Rose’s Cove Tiki Lounge v0.7

Based directly on v0.6. Added a floating, translucent full-screen toggle near the upper-right corner. Click to enter or exit full screen; Escape also exits. The control lives outside the 1080 × 1920 sign canvas so it does not shift or resize screen content.

Unchanged from v0.6: all three screen layouts, sheet feeds, webcam/weather/trivia code, settings, image assets, and fixed sign dimensions.

Upload extracted ZIP contents to the root of your GitHub Pages repository.


## v0.8 changes
- Screen 1: centered single-section menu entirely inside wood bounds, Drinks / Food alternating every 5 seconds.
- Screen 1 stays for exactly 20 seconds on auto-rotation; other screens retain configurable duration.
- Menu uses heavier lettering and auto-fits populated spreadsheet entries.
- CSS and main JS query strings updated to avoid stale cache.
- Screens 2 and 3 markup, camera/weather/trivia data and assets are unchanged from v0.7.

## v0.9 — Default menu entries
The five default Drinks and five default Food entries are shown immediately and used if the relevant published Google Sheet is unavailable or empty. When spreadsheet data is available, it replaces the fallback defaults, as in previous versions. No other screen behavior or geometry was changed.

## v1.0 — Screen 1 vertical positioning
- Moved only the menu-board down by 48 design pixels (1235px to 1283px).
- Updated the stylesheet query parameter to prevent stale CSS caching, and visible version label to v1.0.
- All other layout rules, scripts, assets and feeds are unchanged.


## v1.1 screen 1 menu
Four fixed entries per section, larger type fitted inside the existing menu frame. Existing spreadsheet announcements stay connected, but the drinks/food spreadsheet feeds no longer override the specified fixed lists.
