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


## v1.2 menu correction
The four-item menu defaults were already correct in v1.1 HTML and JS, but index.html referenced sign.js?v=0.9. The active script is now js/sign-v1.2.js, avoiding reuse of an older cached menu loader. Other behavior remains unchanged.


## v1.3 — Barlow Semi Condensed and menu positioning controls
- Screen 1 menu headings and items use natural-proportion Barlow Semi Condensed at weight 800 (loaded via Google Fonts, with local sans-serif fallback).
- Hidden settings (click version) now include independent Drinks and Food font-size and vertical offset sliders.
- Changes preview live. Save & Close persists to local browser storage; X/Escape restores the prior settings. Reset Menu Adjustments resets to 60px/0px.
- Font auto-fit can shrink items if needed to stay within the designated menu region. No horizontal or vertical scaling is applied.
- Other screens and their source files are unchanged.


## v1.4 — settings panel position
- Settings are constrained to the upper 960 px of the fixed 1080×1920 design canvas.
- The settings content scrolls internally; the lower menu stays uncovered for live visual tuning.
- Existing sliders and save behavior unchanged; other screens and files unchanged.


## v1.5 — Menu slider authority
Removed Screen 1 menu auto-shrink/clamping and CSS overflow clipping. Fonts maintain natural proportions. Menu sizing and vertical offset are now controlled directly by the separate Drinks/Food sliders; long text may extend beyond the wooden panel or canvas (by design). All other screens remain unchanged.


## v1.6 changes
- Five individually editable menu slots for each menu in Settings. Blank slots are hidden.
- Menu editing previews immediately and is saved locally in Chrome when Save & Close is clicked. Closing without saving restores earlier items.
- DRINKS and FOOD headings are 110% of each menu's slider-selected item font size (proportional font sizing, no stretching).
- Preview buttons let you show either menu while settings are open.
- All three screens and other site logic remain as in v1.5.
