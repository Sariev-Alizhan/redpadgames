Drop a file named `seven-nation-army.mp3` in this directory and the
floating music player (bottom-right of every page) will pick it up.

If the file is missing, the player auto-hides — no broken UI.

Browser autoplay policy means the song will not play until the user
clicks the red button. Volume defaults to 40%.

Remove the player when no longer needed: delete
src/components/effects/MusicPlayer.tsx and its export from
src/components/effects/index.ts, then remove the <MusicPlayer />
mount in src/app/layout.tsx.
