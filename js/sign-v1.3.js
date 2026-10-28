'use strict';
(()=>{
 const BASE={auto:true,screenTime:25,factTime:12,weatherTime:12,tickerSpeed:95,drinksSize:60,drinksY:0,foodSize:60,foodY:0};
 let cfg={...BASE};try{const x=JSON.parse(localStorage.getItem('roses-cove-v02')||'{}');cfg={...cfg,...x};}catch(_){}
 const $=id=>document.getElementById(id), screens=[...document.querySelectorAll('.screen')];let current=-1,rotator=null,menuTimer=null,menuIndex=0,weatherTimer=null,factTimer=null,weatherIndex=0,camIndex=-1,camTimer=null,lastTrackWidth=0;const data=window.ROSES_DATA||{cams:[],locations:[]};
 function scale(){document.getElementById('sign').style.setProperty('--scale',Math.min(innerWidth/1080,innerHeight/1920));}
 addEventListener('resize',scale);scale();
 function tickClock(){const d=new Date();$('clock').textContent=d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})+'  •  '+d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});}tickClock();setInterval(tickClock,15000);
 const facts=[
  ['POLYNESIAN VOYAGING','Polynesian navigators traveled vast Pacific distances using stars, swells, winds, and signs from birds and clouds.'],
  ['TIKI CULTURE','American tiki bars became popular in the 20th century, blending tropical fantasy, elaborate cocktails, and carved décor.'],
  ['HAWAII','The Hawaiian Islands were formed by volcanic activity as the Pacific Plate moved over a hotspot.'],
  ['TAHITI','Tahiti is the largest island in French Polynesia and is part of the Society Islands.'],
  ['LANGUAGE','Aloha can convey hello, goodbye, affection, and compassion depending on its context.'],
  ['OCEAN HISTORY','Traditional Polynesian double-hulled canoes were engineered for long ocean voyages.'],
  ['TIKI TRIVIA','The Mai Tai is widely associated with the American tiki cocktail boom of the 1940s.'],
  ['BORA BORA','Bora Bora is surrounded by a lagoon protected by a reef and is known for Mount Otemanu.']
 ];let factIndex=-1;
 function showFact(){if(!facts.length)return;let next=Math.floor(Math.random()*facts.length);if(facts.length>1&&next===factIndex)next=(next+1)%facts.length;factIndex=next;$('fact-type').textContent=facts[next][0];$('fact-text').textContent=facts[next][1];}
 function stopCam(){clearTimeout(camTimer);camTimer=null;$('cam-mount').replaceChildren();$('cam-fallback').classList.remove('hidden');}
 function showCam(){stopCam();if(!data.cams.length)return;camIndex=(camIndex+1)%data.cams.length;const cam=data.cams[camIndex];$('cam-location').textContent=cam.label;$('cam-fallback').classList.add('hidden');const f=document.createElement('iframe');f.title=cam.label;f.allow='autoplay; encrypted-media; picture-in-picture';f.referrerPolicy='strict-origin-when-cross-origin';f.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(cam.id)+'?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&enablejsapi=1';$('cam-mount').replaceChildren(f); // Embedded-player errors cannot be reliably inspected across origins.
  camTimer=setTimeout(()=>{if(current===1&&$('cam-mount').childElementCount===0)$('cam-fallback').classList.remove('hidden');},12000);
 }
 const weatherCodes={0:['Clear sky','☀️'],1:['Mainly clear','🌤️'],2:['Partly cloudy','⛅'],3:['Overcast','☁️'],45:['Fog','🌫️'],48:['Fog','🌫️'],51:['Light drizzle','🌦️'],53:['Drizzle','🌧️'],55:['Heavy drizzle','🌧️'],61:['Light rain','🌧️'],63:['Rain','🌧️'],65:['Heavy rain','🌧️'],80:['Showers','🌦️'],81:['Rain showers','🌧️'],82:['Heavy showers','⛈️'],95:['Thunderstorm','⛈️']};
 async function updateWeather(){if(current!==1||!data.locations.length)return;const loc=data.locations[weatherIndex++%data.locations.length];$('weather-place').textContent=loc.label;$('weather-position').textContent='LIVE CONDITIONS';$('weather-description').textContent='Checking island skies…';$('weather-temp').textContent='--°';try{const u='https://api.open-meteo.com/v1/forecast?latitude='+loc.lat+'&longitude='+loc.lon+'&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto';const r=await fetch(u,{cache:'no-store'});if(!r.ok)throw Error('weather unavailable');const d=(await r.json()).current;if(current!==1)return;const c=weatherCodes[d.weather_code]||['Current conditions','🌺'];$('weather-place').textContent=loc.label;$('weather-description').textContent=c[0];$('weather-icon').textContent=c[1];$('weather-temp').textContent=Math.round(d.temperature_2m)+'°';}catch(err){$('weather-description').textContent='The forecast is on island time';$('weather-icon').textContent='🌴';}}
 function resetRotation(){clearTimeout(rotator);if(cfg.auto&&!document.getElementById('settings').classList.contains('hidden'))return;if(cfg.auto)rotator=setTimeout(()=>go((current+1)%screens.length),(current===0?20:Math.max(5,cfg.screenTime))*1000);}
 function go(n){if(current===0)clearInterval(menuTimer);if(current===1){stopCam();clearInterval(weatherTimer);}if(current===2)clearInterval(factTimer);current=(n+screens.length)%screens.length;screens.forEach((s,i)=>s.classList.toggle('selected',i===current));if(current===0){menuIndex=0;showMenuSection();menuTimer=setInterval(()=>{menuIndex=(menuIndex+1)%2;showMenuSection();},5000);}if(current===1){showCam();updateWeather();weatherTimer=setInterval(updateWeather,Math.max(5,cfg.weatherTime)*1000);}if(current===2){showFact();factTimer=setInterval(showFact,Math.max(5,cfg.factTime)*1000);}resetRotation();}
 function csvRows(s){const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(quoted&&s[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&s[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell='';}else cell+=c;}row.push(cell);if(row.some(v=>v))rows.push(row);return rows;}
 const SHEET='https://docs.google.com/spreadsheets/d/e/2PACX-1vShAy-GrtLBPJMGyfPQBCRl1yyCQTLke9Q0C-xyIYYTUgYyNmT03ZVHALSvmA-bkBeygqZuT_Kxi07q/pub?';
 // The older TikiTome used these three published CSV tabs. Keep them isolated so a missing sheet does not affect screen rotation.
 const feeds={announcements:SHEET+'gid=0&single=true&output=csv',drinks:SHEET+'gid=1771875939&single=true&output=csv',food:SHEET+'gid=312447422&single=true&output=csv'};
 function renderTagged(raw){const fragment=document.createDocumentFragment(),stack=[{node:fragment,tag:null}],re=/\[\/?(?:red|gold|green|aqua|blue|purple|pink|white|cream|blink|pulse|wave|rainbow)\]/gi;let pos=0,m;while((m=re.exec(raw))){stack[stack.length-1].node.append(document.createTextNode(raw.slice(pos,m.index)));const tag=m[0].slice(1,-1).toLowerCase();if(tag.startsWith('/')){if(stack.length>1&&stack[stack.length-1].tag===tag.slice(1))stack.pop();else stack[stack.length-1].node.append(document.createTextNode(m[0]));}else{const span=document.createElement('span');span.className='tag-'+tag;stack[stack.length-1].node.append(span);stack.push({node:span,tag});}pos=re.lastIndex;}stack[stack.length-1].node.append(document.createTextNode(raw.slice(pos)));return fragment;}
 async function loadFeed(kind){const r=await fetch(feeds[kind]+'&_='+Date.now(),{cache:'no-store'});if(!r.ok)throw Error(kind+' HTTP '+r.status);const a=csvRows(await r.text()).map(r=>(r[0]||'').trim()).filter(Boolean);return a;}
 function showMenuSection(){const names=['drinks','food'];names.forEach((name,i)=>$(name+'-panel').classList.toggle('menu-active',menuIndex===i));}
 // Fit the complete populated menu inside the unobstructed wooden area, without changing its geometry.
 function fitMenuText(target){
  if(!target.children.length)return;
  const type=target.id, panel=target.closest('.menu-panel'), header=panel.querySelector('h2');
  const requested=Math.min(82,Math.max(32,Number(cfg[type+'Size'])||60));
  const desiredY=Math.min(90,Math.max(-90,Number(cfg[type+'Y'])||0));
  // Move the entire section together, then adapt the text to available plank space.
  // No transform scaleX / scaleY: the font always retains its natural proportions.
  panel.style.paddingTop='0px';
  const innerHeight=panel.clientHeight;
  const headerH=header.offsetHeight;
  let size=requested, y=desiredY;
  for(;size>=24;size--){
    target.style.fontSize=size+'px';
    const contentH=headerH+target.scrollHeight;
    const maxY=Math.max(0,innerHeight-contentH);
    y=Math.max(0,Math.min(maxY,desiredY+Math.max(0,(innerHeight-contentH)/2)));
    panel.style.paddingTop=y+'px';
    if(target.scrollWidth<=target.clientWidth+1 && contentH+y<=innerHeight)break;
  }
  target.dataset.appliedSize=String(size);
}
 const DEFAULT_MENU={drinks:['Miller High Life', 'Michelob Ultra', "Rose's Cove Old Fashioned", 'Merlot or Chardonay'],food:['Hawaiian Pork Sliders', 'Seared Mahi Mahi w/Vegetables', 'Blackened Swordfish Steak', 'Island Fresh Fruit Salad']};
 function displayMenu(type,entries){const target=$(type);target.replaceChildren();entries.slice(0,18).forEach(entry=>{const line=document.createElement('span');line.className='menu-entry';line.append(renderTagged(entry));target.append(line);});fitMenuText(target);}
 function updateMenu(){for(const type of ['drinks','food'])displayMenu(type,DEFAULT_MENU[type]);}
 
 let announcements=[];async function updateAnnouncements(){try{const a=await loadFeed('announcements');if(!a.length)return;const signature=JSON.stringify(a);if(signature===JSON.stringify(announcements))return;announcements=a;const text=a.join('  ✿  ');const track=$('ticker');track.replaceChildren();for(let i=0;i<2;i++){const span=document.createElement('span');span.className='ticker-copy';span.append(renderTagged(text+'  ✿  '));track.append(span);}updateTickerSpeed();}catch(e){console.warn('Announcements feed unavailable:',e);}}
 function updateTickerSpeed(){const span=document.querySelector('.ticker-copy');if(!span)return;const pixels=span.getBoundingClientRect().width/(parseFloat(getComputedStyle($('sign')).getPropertyValue('--scale'))||1);lastTrackWidth=pixels;document.getElementById('ticker').style.setProperty('--ticker-duration',Math.max(8,pixels/Math.max(20,cfg.tickerSpeed))+'s');}
 function tuneMenu(type,size,y){
   cfg[type+'Size']=Number(size);cfg[type+'Y']=Number(y);
   $(type+'-size-value').textContent=size+' px';
   $(type+'-y-value').textContent=(Number(y)>0?'+':'')+y+' px';
   fitMenuText($(type));
 }
 function loadMenuControls(){for(const type of ['drinks','food']){
   $(type+'-size').value=cfg[type+'Size'];$(type+'-y').value=cfg[type+'Y'];
   tuneMenu(type,cfg[type+'Size'],cfg[type+'Y']);
 }}
 function restoreMenuSnapshot(){if(!menuSnapshot)return;for(const type of ['drinks','food']){
   cfg[type+'Size']=menuSnapshot[type+'Size'];cfg[type+'Y']=menuSnapshot[type+'Y'];
 } loadMenuControls();}
 let menuSnapshot=null;
 for(const type of ['drinks','food'])for(const field of ['size','y']){
   $(type+'-'+field).addEventListener('input',()=>tuneMenu(type,$(type+'-size').value,$(type+'-y').value));
 }
 $('reset-menu-tuning').onclick=()=>{for(const type of ['drinks','food']){
   cfg[type+'Size']=60;cfg[type+'Y']=0;
 }loadMenuControls();};
 const settings=$('settings');function openSettings(){menuSnapshot={drinksSize:cfg.drinksSize,drinksY:cfg.drinksY,foodSize:cfg.foodSize,foodY:cfg.foodY};settings.classList.remove('hidden');loadMenuControls();clearTimeout(rotator);$('auto-rotate').checked=!!cfg.auto;$('screen-time').value=cfg.screenTime;$('fact-time').value=cfg.factTime;$('weather-time').value=cfg.weatherTime;$('ticker-speed').value=cfg.tickerSpeed;}
 function closeSettings(save){if(save){cfg={...cfg,auto:$('auto-rotate').checked,screenTime:Number($('screen-time').value)||25,factTime:Number($('fact-time').value)||12,weatherTime:Number($('weather-time').value)||12,tickerSpeed:Number($('ticker-speed').value)||95};localStorage.setItem('roses-cove-v02',JSON.stringify(cfg));updateTickerSpeed();if(current===1){clearInterval(weatherTimer);weatherTimer=setInterval(updateWeather,Math.max(5,cfg.weatherTime)*1000);}if(current===2){clearInterval(factTimer);factTimer=setInterval(showFact,Math.max(5,cfg.factTime)*1000);}}else{restoreMenuSnapshot();}menuSnapshot=null;settings.classList.add('hidden');resetRotation();}
 $('version').onclick=openSettings;$('close-settings').onclick=()=>closeSettings(false);$('save-settings').onclick=()=>closeSettings(true);$('next-screen').onclick=()=>go(current+1);$('prev-screen').onclick=()=>go(current-1);addEventListener('keydown',e=>{if(e.key==='Escape')closeSettings(false);if(e.key==='ArrowRight')go(current+1);if(e.key==='ArrowLeft')go(current-1);});
 go(0);updateMenu();updateAnnouncements();setInterval(updateMenu,10*60*1000);setInterval(updateAnnouncements,60*1000);document.fonts?.ready?.then(()=>{updateTickerSpeed();fitMenuText($('drinks'));fitMenuText($('food'));});
})();
