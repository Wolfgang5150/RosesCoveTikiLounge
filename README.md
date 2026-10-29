# Rose's Cove Tiki Lounge — v3.3

GitHub Pages-ready vertical digital sign for **1080 × 1920** playback in Chrome.
Keep `index.html` at the repository root.

## Changes in v3.3
- **Screen 2 weather box**
  - Removed the **LIVE CONDITIONS** wording.
  - Retained the left-anchored city/icon group and right-anchored temperature behavior from v3.2.
- **Fullscreen behavior**
  - Mouse cursor now hides automatically while the sign is in fullscreen mode.
- **Screen 3 first mockup**
  - Replaced the previous trivia layout with a new **full-screen tiki host concept**.
  - Added a new gritty, hyper-realistic tiki-head scene in a **nighttime lava / tropical environment**.
  - The lower portion is now treated as a **lava-rock wisdom plaque** for trivia / spoken text.
  - Existing random fact rotation remains active using the current Screen 3 timing control.

## Existing retained behavior
- Screen 1 menu rotation and bottom scrolling announcement.
- Screen 2 dual rotating YouTube island feeds.
- Existing settings panel, draggable settings sheet, and persisted browser settings.
- Existing Screen 2 video fit/crop/frame controls and weather size/position controls.
- Version button remains the settings trigger.

## Files of note
- `index.html`
- `css/sign.css`
- `js/sign-v3.3.js`
- `js/fullscreen.js`
- `assets/tiki_oracle_screen3.png`

## Notes
- Browser storage key is intentionally unchanged so previous saved settings continue to carry forward.
- The new Screen 3 is a **mockup / art direction pass** intended as the foundation for future animated facial-part development.
