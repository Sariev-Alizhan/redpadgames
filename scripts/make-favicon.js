// Build a multi-size .ico from the official RedPad logo.
// ICO container with embedded PNG bitmaps (Vista+ accepts PNG inside ICO).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PROJECT = "/Users/alizhan/Desktop/RedPad Games/redpad-website";
const SOURCE = path.join(PROJECT, "public/brand/redpad-logo.png");
const OUT = path.join(PROJECT, "src/app/favicon.ico");

// Square the rectangular logo onto a 256x256 transparent canvas first so
// every emitted size keeps the wordmark centered (no 110×70 stretch).
async function buildSquareSource() {
  const meta = await sharp(SOURCE).metadata();
  const w = meta.width ?? 110;
  const h = meta.height ?? 70;
  // Pad to a transparent square the size of the longer side; then resize.
  const side = Math.max(w, h);
  const padX = Math.floor((side - w) / 2);
  const padY = Math.floor((side - h) / 2);
  return sharp(SOURCE)
    .extend({
      top: padY,
      bottom: side - h - padY,
      left: padX,
      right: side - w - padX,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
}

async function pngBuffer(square, size) {
  return sharp(square).resize(size, size).png().toBuffer();
}

async function main() {
  const square = await buildSquareSource();
  const sizes = [16, 32, 48, 64];
  const pngs = await Promise.all(sizes.map((s) => pngBuffer(square, s)));

  // Header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);          // reserved
  header.writeUInt16LE(1, 2);          // type = 1 (icon)
  header.writeUInt16LE(sizes.length, 4); // count

  // Directory entries: 16 bytes each
  const entries = Buffer.alloc(16 * sizes.length);
  let dataOffset = 6 + 16 * sizes.length;
  pngs.forEach((png, i) => {
    const off = i * 16;
    const size = sizes[i];
    entries.writeUInt8(size === 256 ? 0 : size, off + 0);     // width
    entries.writeUInt8(size === 256 ? 0 : size, off + 1);     // height
    entries.writeUInt8(0, off + 2);                            // color palette
    entries.writeUInt8(0, off + 3);                            // reserved
    entries.writeUInt16LE(1, off + 4);                         // color planes
    entries.writeUInt16LE(32, off + 6);                        // bits per pixel
    entries.writeUInt32LE(png.length, off + 8);                // size of image
    entries.writeUInt32LE(dataOffset, off + 12);               // offset
    dataOffset += png.length;
  });

  const ico = Buffer.concat([header, entries, ...pngs]);
  fs.writeFileSync(OUT, ico);
  console.log(`wrote ${OUT} (${ico.length} bytes, sizes: ${sizes.join(",")})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
