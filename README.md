Rose's Cove Tiki Lounge — v3.9

Key refinements in this build:
- Screen 3 cleaned up substantially.
- Fixed the Screen 3 background scaling so the volcano scene keeps proper proportions and the moon stays round.
- Reduced the tiki head footprint slightly and re-centered it to show more of the dynamic volcano/lava environment.
- Refined the Screen 3 message placement over the lava-rock board.
- Tightened tiki animation ranges so eyes, lids, brows, and jaw stay cleaner and less cut-off while still feeling alive.
- Reduced idle eye drift and jaw chatter for a more polished look.
- Updated the visible version number to v3.9 and switched the page to the new script file.

Files:
- index.html
- css/sign.css
- js/sign-v3.9.js


## v4.0 — Screen 3 repair pass
- Screens 1 and 2 and their JavaScript settings logic are unchanged.
- Screen 3 native artwork and SVG sprite viewBox preserve the 800:1120 ratio, with no anisotropic sprite scaling.
- Reduced heavy per-part drop shadows and extreme jaw/brow movements that exaggerate visible piece edges.
- Adjusted normal eyelid pose to show more of the eyes; added a suspicious expression.
- Fullscreen cursor is hidden.
- v3.9 source remains in the package for rollback.
- Existing asset artwork is retained; hand-cleaning/painting original sprite seams remains an artistic improvement beyond this stabilization pass.

v4.1 notes
- Screen 3 background now uses an explicit portrait image layer to preserve the moon and scenery proportions.
- Screen 3 eye and mouth motion are clipped to carved openings to reduce visible seams and spillover.
- Screen 3 tiki idle eye motion now preserves mood pose instead of overwriting it.

v4.2 notes
- Replaced Screen 3 volcano background asset with a corrected moon.
- Locked Screen 3 background rendering to the asset's exact native 1080x1920 dimensions.
- Removed Screen 3 internal padding from the background render path to prevent any remaining distortion.

v4.4 notes
- Rebuilt Screen 3 background with new 1080x1920 portrait volcanic tiki scene and a larger stone slate for trivia text.
- Rebuilt the Screen 3 tiki rig using the assets_v39_clean part set so the eyes are clearly visible.
- Screen 3 now uses independent animated eyebrows, visible eyeballs, sliding lids, and a hinged lower jaw.
- Increased the trivia card height to allow more room for future sayings and trivia.

v4.5 notes
- Rebuilt Screen 3 again as a full-scene random "Tiki Oracle" using 10 diverse background/face compositions.
- Removed the old layered puppet rig from Screen 3 and replaced it with a random full-image scene that stays fixed for the duration of each Screen 3 visit.
- Added 7 topic pools with 20 entries each: Tiki Jokes, Island Trivia, Fun Facts, Weird Island Facts, Hawaiian History, Polynesian Island Life, and Pacific Pirate Life.
- Added Screen 3 slider controls for message text size, category label size, line spacing, text box X/Y position, and text box width/height.
- Added a Screen 3 reset button and a "Load Another Random Screen 3 Now" preview button.
- Added SCREEN3_TOPIC_LIBRARY_v4.5.md so the full message library is easy to review outside the sign.
- Updated visible version number to v4.5 and moved settings persistence to a new localStorage key for a cleaner upgrade.


v4.5 Lean deployment: contains only current web dependencies; archived development layers and preview images excluded. Ten oracle PNGs converted to high-quality JPG at native 1080×1920, without geometric distortion.
