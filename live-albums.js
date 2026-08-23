/* GORILLA BOOMIN PRO — Live Albums */
(function(){
const albums=[
{title:'LIVE AT SEA',sub:'Cocktails • Steelpan • Caribbean Lounge',src:'assets/Gorilla_Boomin_Live_At_Sea_WEB.mp3',cover:'assets/ChatGPT Image Aug 23, 2026, 02_26_57 AM.png',tracks:[['00:00','Port of Viarruel (Jazz Intro)',0],['00:51','Summertime',51],['10:39','Stir It Up',639],['13:26','Jammin’',806],['18:35','Is This Love',1115],['27:49','Waiting in Vain — Lounge Version',1669]]},
{title:'POOLSIDE IN PARADISE',sub:'Live Caribbean Cruise Sessions',src:'assets/Gorilla_Boomin_Poolside_In_Paradise_WEB.mp3',cover:'assets/ChatGPT Image Aug 23, 2026, 02_26_12 AM.png',tracks:[['00:00','Jammin’ — Poolside Version',0],['03:19','Margaritaville',199],['07:29','Brown Eyed Girl',449],['11:49','No Woman, No Cry',709],['13:42','Waiting in Vain',822],['18:21','Sweat (A La La La La Long)',1101],['23:06','Red Red Wine',1386]]}
];
function build(){
 const music=document.querySelector('#music'); if(!music||document.querySelector('.live-albums'))return;
 const sec=document.createElement('section'); sec.className='live-albums';
 sec.innerHTML='<div class="live-kicker">GORILLA BOOMIN / LIVE ARCHIVES</div><h2>TWO MOODS.<br><em>ONE LIVE EXPERIENCE.</em></h2><p class="live-intro">Cruise ship performances from the archive — steelpan, vocals, Caribbean lounge and poolside energy. Choose an album, press play, or jump directly to a song.</p><div class="album-grid"></div>';
 const grid=sec.querySelector('.album-grid');
 albums.forEach((a,ai)=>{
  const card=document.createElement('article'); card.className='album-card';
  card.innerHTML='<div class="album-cover"><img class="album-cover-img" src="'+a.cover+'" alt="'+a.title+' album cover"><div class="album-badge">LIVE ARCHIVE 0'+(ai+1)+'</div></div><div class="album-body"><div class="album-head"><div><small>LIVE ALBUM</small><h3>'+a.title+'</h3><p>'+a.sub+'</p></div><button class="album-play" type="button">▶ PLAY</button></div><div class="led-eq" aria-label="Audio reactive equalizer"><canvas></canvas><span>LIVE AUDIO</span></div><audio preload="metadata" src="'+a.src+'"></audio><div class="album-progress"><span class="cur">0:00</span><input type="range" min="0" max="100" value="0" step="0.1"><span class="dur">--:--</span></div><div class="tracklist"></div></div>';
  const audio=card.querySelector('audio'),play=card.querySelector('.album-play'),range=card.querySelector('input'),cur=card.querySelector('.cur'),dur=card.querySelector('.dur'),list=card.querySelector('.tracklist'),canvas=card.querySelector('.led-eq canvas');
  const fmt=s=>{if(!isFinite(s))return'--:--';return Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0')};
  let audioCtx=null,analyser=null,source=null,raf=0,data=null;
  const drawIdle=()=>{
    const dpr=Math.max(1,window.devicePixelRatio||1),w=canvas.clientWidth||420,h=canvas.clientHeight||92;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}
    const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    const bars=Math.max(18,Math.floor(w/16)),gap=4,bw=(w-gap*(bars-1))/bars,levels=7,ledGap=2,lh=(h-ledGap*(levels-1))/levels;
    for(let i=0;i<bars;i++){const lit=audio.paused?1:2+Math.round((Math.sin(i*.85)+1)*.7);for(let l=0;l<levels;l++){const y=h-(l+1)*lh-l*ledGap;const hue=190+(i/(bars-1))*140;ctx.globalAlpha=l<lit?.34:.06;ctx.fillStyle='hsl('+hue+' 95% 58%)';ctx.shadowBlur=l<lit?7:0;ctx.shadowColor=ctx.fillStyle;ctx.fillRect(i*(bw+gap),y,bw,lh)}}ctx.globalAlpha=1;ctx.shadowBlur=0;
  };
  const ensureAudioGraph=()=>{
    if(analyser)return true;
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;
    try{audioCtx=new AC();analyser=audioCtx.createAnalyser();analyser.fftSize=256;analyser.smoothingTimeConstant=.76;source=audioCtx.createMediaElementSource(audio);source.connect(analyser);analyser.connect(audioCtx.destination);data=new Uint8Array(analyser.frequencyBinCount);return true}catch(e){return false}
  };
  const renderEQ=()=>{
    cancelAnimationFrame(raf);
    const dpr=Math.max(1,window.devicePixelRatio||1),w=canvas.clientWidth||420,h=canvas.clientHeight||92;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}
    const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    const bars=Math.max(20,Math.floor(w/15)),gap=4,bw=(w-gap*(bars-1))/bars,levels=8,ledGap=2,lh=(h-ledGap*(levels-1))/levels;
    if(analyser){analyser.getByteFrequencyData(data)}
    for(let i=0;i<bars;i++){
      const bin=analyser?Math.min(data.length-1,Math.floor(Math.pow(i/(bars-1),1.55)*(data.length-1))):0;
      const v=analyser?data[bin]/255:0;
      const boost=Math.min(1,Math.max(.04,v*1.18));
      const lit=Math.max(1,Math.round(boost*levels));
      for(let l=0;l<levels;l++){
        const y=h-(l+1)*lh-l*ledGap;
        const pct=l/(levels-1);
        const hue=pct<.5?190+pct*120:250+(pct-.5)*190;
        const on=l<lit;
        ctx.globalAlpha=on?1:.08;ctx.fillStyle='hsl('+hue+' 100% '+(on?58:40)+'%)';ctx.shadowBlur=on?9:0;ctx.shadowColor=ctx.fillStyle;ctx.fillRect(i*(bw+gap),y,bw,lh);
      }
    }
    ctx.globalAlpha=1;ctx.shadowBlur=0;
    if(!audio.paused)raf=requestAnimationFrame(renderEQ);else drawIdle();
  };
  const startAudio=async()=>{document.querySelectorAll('.album-card audio').forEach(x=>{if(x!==audio)x.pause()});if(ensureAudioGraph()&&audioCtx&&audioCtx.state==='suspended')await audioCtx.resume();await audio.play();renderEQ();};
  a.tracks.forEach((t,i)=>{const b=document.createElement('button');b.type='button';b.className='track';b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><b>'+t[1]+'</b><time>'+t[0]+'</time>';b.onclick=()=>{audio.currentTime=t[2];startAudio().catch(()=>{})};list.appendChild(b)});
  play.onclick=()=>{if(audio.paused)startAudio().catch(()=>{});else audio.pause()};
  audio.onplay=()=>{play.textContent='❚❚ PAUSE';renderEQ()}; audio.onpause=()=>{play.textContent='▶ PLAY';cancelAnimationFrame(raf);drawIdle()};
  audio.onloadedmetadata=()=>dur.textContent=fmt(audio.duration);
  audio.ontimeupdate=()=>{cur.textContent=fmt(audio.currentTime);range.value=audio.duration?audio.currentTime/audio.duration*100:0;let active=0;a.tracks.forEach((t,i)=>{if(audio.currentTime>=t[2])active=i});list.querySelectorAll('.track').forEach((x,i)=>x.classList.toggle('active',i===active));};
  range.oninput=()=>{if(audio.duration)audio.currentTime=audio.duration*(range.value/100)};
  window.addEventListener('resize',drawIdle,{passive:true});drawIdle();grid.appendChild(card);
 });
 music.insertAdjacentElement('afterend',sec);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();