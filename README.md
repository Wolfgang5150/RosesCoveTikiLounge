# Rose's Cove Tiki Lounge — v0.2 prototype

## Physical composition
Exactly 1080 × 1920 portrait coordinates. Browser scales this fixed canvas uniformly for preview, never stretches individual elements. Chrome on the Mac mini is the primary target.

## Screens
1. Hero + menu + bottom announcement ticker. Menu/announcements target the prior public published Google Sheets URLs; sample fallback text appears if a feed cannot load. Menu tab mapping should be verified against your published spreadsheet before production.
2. Live view: one YouTube webcam on each screen entrance, next in the existing 21-entry list (not reloaded within the screen); original ten weather locations cycle every 12 s through Open-Meteo. YouTube player IDs have not been live-verified and may change; some may reject embed/autoplay. The display is muted.
3. Tiki trivia + initial static tiki-idol portrait; subtle breathing animation, no audio or speaking yet. Trivia is currently a small built-in curated list.

## Settings
Click `v0.2` in bottom-right. Adjust rotation, screen time, fact time, weather time, ticker speed. Saves via browser localStorage only. Left/right arrows switch screens.

## GitHub Pages
Upload the *contents* of this directory to repository root (including folders) on `main`; Pages source `main` / `(root)`. Current files are independent of old TikiTome, and are the next candidate version, not a proven production replacement.

## Dependencies / next iteration
- Use approved backgrounds/menu illustrations and real fonts (not supplied in the working source files).
- Confirm original menu spreadsheet tab mapping and presentation rules.
- YouTube errors are not guaranteed detectable in a bare cross-origin iframe; future iteration can use the YouTube Player API and an explicit live-channel refresh process.
- The full-screen tiki character is a static prototype built from the previously generated idol art; future work can add mouth/eye layers and audio.


v0.3 update: screen 1 now uses assets/rose_cove_night_background.png as its full-bleed 1080x1920 canvas background (image aspect ratio closely matches canvas). The separate hero overlay was removed. Other screens and scripts are unchanged.
