/* v0.7: isolated full-screen control; all existing sign behavior is untouched. */
(()=>{
  const button=document.getElementById('fullscreen-toggle');
  const icon=document.getElementById('fullscreen-icon');
  const host=document.getElementById('viewport');
  if(!button||!host)return;
  function update(){
    const active=!!document.fullscreenElement;
    button.setAttribute('aria-pressed',String(active));
    button.setAttribute('aria-label',active?'Exit full screen':'Enter full screen');
    button.title=active?'Exit full screen (Esc)':'Enter full screen';
    icon.textContent=active?'⤢':'⛶';
    window.dispatchEvent(new Event('resize'));
  }
  button.addEventListener('click',async()=>{
    try{
      if(document.fullscreenElement)await document.exitFullscreen();
      else if(host.requestFullscreen)await host.requestFullscreen();
      else console.warn('Full-screen API is not available in this browser.');
    }catch(err){console.warn('Unable to change full-screen mode:',err);}
    update();
  });
  document.addEventListener('fullscreenchange',update);
  update();
})();
