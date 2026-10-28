# Rose's Cove Tiki Lounge v2.5

New on Screen 2: independently adjust each dashed video viewport with Frame left (X), Frame top (Y), Frame width, and Frame height controls. These reposition the window and alignment guide; the video inside maintains proportional scaling, and existing independent image zoom/crop controls remain available. Reset Frame restores the original artwork-aligned rectangle separately from Reset Video Image. Settings persist using the existing Save & Close control in Chrome.

Native design canvas remains 1080 × 1920. All other screens and camera rotation logic are unchanged.

# Rose’s Cove Tiki Lounge — v2.4

Complete static website for GitHub Pages. Keep `index.html` at the repository root.

Changes from v2.3: Screen 2 settings have independent top and bottom video horizontal/vertical position, proportional zoom, and four crop-edge sliders. Changes preview live, Save & Close persists in browser storage, close without saving rolls back, and each player has an independent reset. Optional alignment guides display during Screen 2 settings. The background, camera list, wooden captions, and other screens remain unchanged.

Select Screen 2 in the hidden settings to navigate to the camera page and adjust the feeds. The crop controls trim the video viewport, so increasing crop values may expose the original black artwork underneath. Zoom uniformly to fill the video windows. Third-party video content can still contain encoded black bars.


## v2.6 changes
- Removed the translucent background from the lower-right version button on all screens.
- Drag the SETTINGS title bar to move the settings sheet anywhere within the 1080×1920 canvas. Position is remembered on this browser.
- Settings controls, save/cancel behavior, video feeds, and screens otherwise unchanged.


## v2.7
- Screen 2: independent upper/lower camera-caption text-size sliders (60–170%).
- Both caption lines scale in unison, retaining 29:23 size ratio with no horizontal or vertical stretching.
- Immediate preview, Save & Close persistence and Cancel restoration via existing settings workflow.
- All other screens, video frame/crop controls and source feeds unchanged.


v2.9: Screen 2 weather information (city, icon, temperature, condition) enlarged 60%; Screen 1 ticker now white with black offset shadow; menu lettering 85% opacity without text shadow; independent saved durations for all three screens under General. Original screen-time value is retained for backward compatibility; individual values take precedence.


## v2.9 Weather controls
Screen 2 settings now include Weather size (50–180%, uniform), horizontal (±200px), and vertical (±150px) with a reset button. Adjustments preview immediately and persist with Save & Close. The 1080×1920 canvas and other screens remain unchanged.

## v3.0
Halved the baseline Screen 2 weather icon, city, temperature and condition font sizes. Existing weather size/position slider ranges and controls are unchanged, as are saved browser preferences. Refresh browser to load updated stylesheet.

## v3.1
Screen 2 weather readout is center anchored and automatically fits within a strict 25% inset on every edge of the translucent weather-card (inner 50% rectangle). The existing uniform scale and X/Y sliders remain, but their effective adjustments are safely bounded. New weather text automatically refits whenever the forecast changes. Other screens unchanged.
