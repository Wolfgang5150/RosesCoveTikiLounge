/* v2.6: Draggable settings window; independent of the sign controller. */
(() => {
  'use strict';
  const dialog = document.getElementById('settings');
  const panel = dialog && dialog.querySelector('.settings-inner');
  const handle = panel && panel.querySelector('.settings-title');
  const sign = document.getElementById('sign');
  if (!dialog || !panel || !handle || !sign) return;
  const KEY = 'roses-cove-settings-position-v2.6';
  const margin = 8;
  const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), Math.max(lo, hi));
  function place(x, y) {
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const left = clamp(x, margin, sign.clientWidth - w - margin);
    const top = clamp(y, margin, sign.clientHeight - h - margin);
    panel.style.left = left + 'px'; panel.style.top = top + 'px';
    return {x:left, y:top};
  }
  try { const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) place(saved.x,saved.y);
  } catch (_) {}
  let dragging = null;
  handle.addEventListener('pointerdown', e => {
    if (e.button !== 0 || e.target.closest('button, input, a')) return;
    e.preventDefault();
    const rect = sign.getBoundingClientRect();
    const sx = rect.width / sign.clientWidth, sy = rect.height / sign.clientHeight;
    dragging = { id:e.pointerId, startX:e.clientX, startY:e.clientY, x:panel.offsetLeft, y:panel.offsetTop, sx, sy };
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener('pointermove', e => {
    if (!dragging || dragging.id !== e.pointerId) return;
    place(dragging.x + (e.clientX - dragging.startX)/dragging.sx,
          dragging.y + (e.clientY - dragging.startY)/dragging.sy);
  });
  function finish(e) {
    if (!dragging || dragging.id !== e.pointerId) return;
    dragging = null;
    try { localStorage.setItem(KEY, JSON.stringify({x:panel.offsetLeft,y:panel.offsetTop})); } catch (_) {}
  }
  handle.addEventListener('pointerup', finish);
  handle.addEventListener('pointercancel', finish);
})();
