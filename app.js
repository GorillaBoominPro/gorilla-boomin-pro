const ARCHIVE=[
"A9E6DC10-37FF-43E9-9E78-C1E50C39B1B7.jpg","FB_IMG_1462978714350.jpg","FB_IMG_1462978763923.jpg","IMG_1117.jpeg","IMG_1128.jpeg","IMG_1129.jpeg","IMG_1136.jpeg","IMG_1141.jpeg","IMG_1151.jpeg","IMG_2260(1).jpeg","IMG_2556(1).JPG","IMG_3220(1).jpeg","IMG_3274.JPG","IMG_3283.jpeg","IMG_3501.JPG","IMG_3712.JPG","IMG_3715.JPG","IMG_3722.JPG","IMG_3723.JPG","IMG_4737.jpeg","IMG_4751.jpeg","IMG_9868.JPG","IMG_9874.JPG","IMG_9892.JPG","IMG_9896.JPG","IMG_9899.JPG","IMG_9901.JPG","IMG_9902.JPG","IMG_9903.JPG","IMG_9904.JPG","IMG_9914.jpeg","IMG_9915.jpeg","IMG_9916.jpeg","IMG_9917.jpeg","IMG_9918 (1).jpeg","IMG_9918.JPG","IMG_9918.jpeg","IMG_9919.jpeg","IMG_9920 (1).jpeg","IMG_9920.jpeg","IMG_9923.jpeg","IMG_9924.jpeg","IMG_9925.jpeg","IMG_9926.jpeg","IMG_9927.jpeg","IMG_9928.jpeg","IMG_9929.jpeg","IMG_9930.jpeg",
"Island Rush Pic 4.jpg","Skyligfht Showtime 4.JPG","Skylight & Shaggy.jpg","Skylight ,Celebrities and fans.JPG","Skylight.jpg","a_high_detail_studio_logo_design_on_a_dark_black_b.png","a_high_energy_glossy_neon_saturated_graphic_desi.png","a_high_energy_promo_poster_style_scene_a_dramatic.png","a_high_energy_promotional_collage_portfolio_poster.png","a_high_energy_ultra_detailed_neon_metallic_studio.png","a_high_resolution_glossy_ultra_detailed_studio.png","a_high_resolution_ultra_detailed_neon_gold_and_p.png","a_highly_detailed_cinematic_promo_poster_artist.png","a_highly_detailed_glossy_neon_gold_emblem_cres.png","a_highly_detailed_polished_graphic_design_promoti.png","a_highly_detailed_promotional_branding_board_moo.png","a_highly_detailed_promotional_poster_artist_bran.png","a_highly_detailed_ultra_polished_3d_cinematic_lo.png","a_highly_detailed_ultra_stylized_neon_gold_and_p.png","a_highly_polished_promotional_poster_album_artis.png","a_wide_cinematic_ultra_detailed_desktop_wallpape.png","a_wide_high_detail_graphic_design_image_for_a_soc.png","a_wide_ultra_detailed_cinematic_desktop_wallpape.png","wide_detailed_interior_shot_of_a_modern_home_musi.png","wide_neon_drenched_graphic_design_banner_faceboo.png"
];
const VIDEOS=["copy_46D7C9CD-A7F0-4F68-A698-0FD54DCF8B66.mov"];
const STUDIO=["wide_detailed_interior_shot_of_a_modern_home_musi.png","A9E6DC10-37FF-43E9-9E78-C1E50C39B1B7.jpg","IMG_9915.jpeg","IMG_9914.jpeg","IMG_9896.JPG","IMG_9918.JPG"];

const $=s=>document.querySelector(s);
const encodeName=name=>encodeURIComponent(name).replace(/%2F/g,'/');

function loadImage(img,name,{fallbackRoot=true,finalFallback=null}={}){
  const encoded=encodeName(name);
  let stage=0;
  img.onerror=()=>{
    stage++;
    if(stage===1 && fallbackRoot){ img.src=encoded; return; }
    if(finalFallback){ img.onerror=null; img.src=finalFallback; return; }
    img.onerror=null;
    img.closest('figure')?.remove();
  };
  img.src='assets/'+encoded;
}

/* V5.1 repair: legacy HTML still points to assets/media/, but uploaded files live in assets/. */
document.querySelectorAll('img[src^="assets/media/"]').forEach(img=>{
  const name=decodeURIComponent(img.getAttribute('src').replace('assets/media/',''));
  const gaming=img.alt==='Gaming world';
  const fallback=gaming
    ? 'assets/a_high_energy_glossy_neon_saturated_graphic_desi.png'
    : 'assets/a_high_resolution_ultra_detailed_neon_gold_and_p.png';
  loadImage(img,name,{fallbackRoot:true,finalFallback:fallback});
});

const archive=$('#archiveGrid');
function addCard(name,i,cls=''){
  const fig=document.createElement('figure');
  fig.className='media-card '+cls;
  const img=document.createElement('img');
  img.loading='lazy';
  img.alt='Gorilla Boomin media '+(i+1);
  img.onclick=()=>openLightbox(img.src,img.alt);
  loadImage(img,name,{fallbackRoot:true});
  fig.appendChild(img);
  archive?.appendChild(fig);
}
ARCHIVE.slice(0,72).forEach((n,i)=>addCard(n,i));

const studioGrid=$('#studioGrid');
STUDIO.forEach((n,i)=>{
  const img=document.createElement('img');
  img.loading='lazy';
  img.alt='BOOM STUDIO '+(i+1);
  img.onclick=()=>openLightbox(img.src,img.alt);
  loadImage(img,n,{fallbackRoot:true});
  studioGrid?.appendChild(img);
});

const videoGrid=$('#videoGrid');
VIDEOS.forEach((n,i)=>{
  const card=document.createElement('article');
  card.className='video-card';
  card.innerHTML=`<div class="video-wrap"><video controls preload="metadata" src="assets/${encodeName(n)}"></video></div><div class="video-copy"><span>BOOM MEDIA • VIDEO ${String(i+1).padStart(2,'0')}</span><h3>${i===0?'THE BOOM FILES':'BEHIND THE BOOM'}</h3><p>Original Gorilla Boomin media archive.</p></div>`;
  videoGrid?.appendChild(card);
});

function openLightbox(src,alt){
  const box=document.createElement('div');
  box.className='lightbox';
  box.innerHTML=`<button aria-label="Close">×</button><img src="${src}" alt="${alt}">`;
  box.addEventListener('click',e=>{if(e.target===box||e.target.tagName==='BUTTON')box.remove()});
  document.body.appendChild(box);
}

const menu=$('#menuBtn');
const nav=$('#mainNav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  const note=form.querySelector('.form-note');
  if(note){
    note.textContent='Thanks — this form is ready for your final email/CRM connection in the live deployment.';
    note.classList.add('show');
  }
}));

const fakePlay=document.getElementById('fakePlay');
if(fakePlay){fakePlay.addEventListener('click',()=>{fakePlay.textContent=fakePlay.textContent==='▶'?'Ⅱ':'▶';});}

/* ===== V5 LANGUAGE SWITCHER ===== */
(function(){
  const toggle=document.getElementById('langToggle');
  const langMenu=document.getElementById('langMenu');
  const current=document.getElementById('currentLang');
  if(!toggle || !langMenu) return;
  toggle.addEventListener('click',()=>langMenu.classList.toggle('open'));
  langMenu.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      current.textContent=btn.dataset.lang;
      langMenu.classList.remove('open');
      document.documentElement.lang=btn.dataset.lang.toLowerCase();
      localStorage.setItem('gb-language',btn.dataset.lang);
    });
  });
  const saved=localStorage.getItem('gb-language');
  if(saved) current.textContent=saved;
  document.addEventListener('click',(e)=>{if(!e.target.closest('.language-switcher')) langMenu.classList.remove('open');});
})();

document.querySelectorAll('[data-support]').forEach(btn=>btn.addEventListener('click',()=>alert((btn.dataset.support==='coffee'?'Buy Me a Coffee':btn.dataset.support==='beer'?'Buy Me a Beer':'Tip the Artist')+' — secure payment connection will be added when the payment provider is connected.')));
document.querySelectorAll('.eco-track a').forEach(item=>{item.addEventListener('focus',()=>item.closest('.eco-track')?.style.setProperty('animation-play-state','paused'));item.addEventListener('blur',()=>item.closest('.eco-track')?.style.removeProperty('animation-play-state'));});

(function(){
  const heroVideo=document.querySelector('.hero-cinema video');
  if(!heroVideo) return;
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){ heroVideo.pause(); }
    else{ heroVideo.play().catch(()=>{}); }
  });
})();

/* ===== BIO PORTRAIT — PAN FUSION ===== */
(function(){
  const storyTitle=document.querySelector('.story-title');
  if(!storyTitle || storyTitle.querySelector('.story-portrait-v6')) return;

  const portrait=document.createElement('div');
  portrait.className='story-portrait-v6';
  portrait.innerHTML='<img src="assets/a_high_energy_promo_poster_style_scene_a_dramatic.png" alt="Gorilla Boomin — Pan Fusion artist portrait">';
  storyTitle.appendChild(portrait);

  const style=document.createElement('style');
  style.textContent=`
    .story-grid-v5{align-items:stretch}
    .story-title{display:flex;flex-direction:column;min-height:100%}
    .story-portrait-v6{margin-top:28px;flex:1;min-height:620px;border:1px solid rgba(255,255,255,.14);border-radius:18px;overflow:hidden;background:#05050a;box-shadow:0 28px 70px rgba(0,0,0,.42),0 0 45px rgba(113,56,255,.12)}
    .story-portrait-v6 img{display:block;width:100%;height:100%;object-fit:contain;object-position:center top;background:#05050a}
    @media(max-width:900px){.story-title{display:block}.story-portrait-v6{min-height:0;margin-top:28px}.story-portrait-v6 img{height:auto;aspect-ratio:auto;object-fit:contain}}
  `;
  document.head.appendChild(style);
})();
