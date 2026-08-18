const ARCHIVE=["1000020075(1).jpg", "1000020075.jpg", "1000020079(1).jpg", "1000020079.jpg", "1000020474.png", "1000020476.jpg", "950D172A-CFF6-42D9-8DD5-DEABAF2DC294.jpg", "A9E6DC10-37FF-43E9-9E78-C1E50C39B1B7.jpg", "EA471644-1236-477C-B0FC-674E03AF99A1.jpg", "F0944ACB-792D-403C-B6F5-A4128F016031.jpg", "FB_IMG_1458250336107.jpg", "FB_IMG_1458250432547.jpg", "FB_IMG_1458250480727.jpg", "FB_IMG_1458250525602.jpg", "FB_IMG_1458250531266.jpg", "FB_IMG_1462978586670.jpg", "FB_IMG_1462978594162.jpg", "FB_IMG_1462978614607.jpg", "FB_IMG_1462978621348.jpg", "FB_IMG_1462978645606.jpg", "FB_IMG_1462978666274.jpg", "FB_IMG_1462978674212.jpg", "FB_IMG_1462978714350.jpg", "FB_IMG_1462978763923.jpg", "IMG_1117.jpeg", "IMG_1128.jpeg", "IMG_1129.jpeg", "IMG_1136.jpeg", "IMG_1141.jpeg", "IMG_1151.jpeg", "IMG_2260(1).jpeg", "IMG_2556(1).JPG", "IMG_3220(1).jpeg", "IMG_3274.JPG", "IMG_3283.jpeg", "IMG_3501.JPG", "IMG_3712.JPG", "IMG_3715.JPG", "IMG_3722.JPG", "IMG_3723.JPG", "IMG_4737.jpeg", "IMG_4751.jpeg", "IMG_9868.JPG", "IMG_9874.JPG", "IMG_9892.JPG", "IMG_9896.JPG", "IMG_9899.JPG", "IMG_9901.JPG", "IMG_9902.JPG", "IMG_9903.JPG", "IMG_9904.JPG", "IMG_9914.jpeg", "IMG_9915.jpeg", "IMG_9916.jpeg", "IMG_9917.jpeg", "IMG_9918 (1).jpeg", "IMG_9918.JPG", "IMG_9918.jpeg", "IMG_9919.jpeg", "IMG_9920 (1).jpeg", "IMG_9920.jpeg", "IMG_9923.jpeg", "IMG_9924.jpeg", "IMG_9925.jpeg", "IMG_9926.jpeg", "IMG_9927.jpeg", "IMG_9928.jpeg", "IMG_9929.jpeg", "IMG_9930.jpeg", "IMG_9931.jpeg", "IMG_9932 (1).jpeg", "Island Rush Pic 4.jpg", "Skyligfht Showtime 4.JPG", "Skylight & Shaggy.jpg", "Skylight ,Celebrities and fans.JPG", "Skylight.jpg", "a_bold_high_contrast_highly_detailed_emblem_logo.png", "a_bold_high_contrast_ultra_stylized_vector_3d_re.png", "a_bold_high_end_cinematic_glossy_3d_rendered_lo.png", "a_bold_high_gloss_3d_logo_poster_emblem_design.png", "a_bold_high_gloss_cinematic_3d_logo_poster_emb.png", "a_bold_highly_detailed_glossy_emblem_logo_graphi.png", "a_bold_ultra_detailed_high_contrast_neon_gold_a.png", "a_bright_high_detail_photo_collage_contact_sh.png", "a_cinematic_high_energy_promotional_poster_billbo.png", "a_digital_vector_illustration_features_the_emblem.png", "a_dramatic_high_end_promotional_poster_album_arti.png", "a_dramatic_high_production_promotional_poster_a.png", "a_dramatic_neon_cinematic_artist_branding_portr.png", "a_high_detail_studio_logo_design_on_a_dark_black_b.png", "a_high_energy_glossy_neon_saturated_graphic_desi.png", "a_high_energy_promo_poster_style_scene_a_dramatic.png", "a_high_energy_promotional_collage_portfolio_poster.png", "a_high_energy_ultra_detailed_neon_metallic_studio.png", "a_high_resolution_glossy_ultra_detailed_studio.png", "a_high_resolution_ultra_detailed_neon_gold_and_p.png", "a_highly_detailed_cinematic_promo_poster_artist.png", "a_highly_detailed_glossy_neon_gold_emblem_cres.png", "a_highly_detailed_polished_graphic_design_promoti.png", "a_highly_detailed_promotional_branding_board_moo.png", "a_highly_detailed_promotional_poster_artist_bran.png", "a_highly_detailed_ultra_polished_3d_cinematic_lo.png", "a_highly_detailed_ultra_stylized_neon_gold_and_p.png", "a_highly_polished_promotional_poster_album_artis.png", "a_promotional_poster_photo_scene_overall_a_roof.png", "a_vibrant_cinematic_promotional_poster_cover_imag.png", "a_vibrant_cinematic_promotional_poster_scene_a_t.png", "a_vibrant_glossy_neon_infused_promotional_emblem.png", "a_vibrant_ultra_detailed_neon_glossy_cinematic.png", "a_wide_cinematic_ultra_detailed_desktop_wallpape.png", "a_wide_high_detail_graphic_design_image_for_a_soc.png", "a_wide_ultra_detailed_cinematic_desktop_wallpape.png", "wide_detailed_interior_shot_of_a_modern_home_musi.png", "wide_neon_drenched_graphic_design_banner_faceboo.png"];
const VIDEOS=["copy_46D7C9CD-A7F0-4F68-A698-0FD54DCF8B66.mov", "copy_C04EC2FE-7CAB-456C-BB10-19247B932D32.mov"];
const STUDIO=["wide_detailed_interior_shot_of_a_modern_home_musi.png", "EA471644-1236-477C-B0FC-674E03AF99A1.jpg", "950D172A-CFF6-42D9-8DD5-DEABAF2DC294.jpg", "A9E6DC10-37FF-43E9-9E78-C1E50C39B1B7.jpg", "IMG_9915.jpeg", "IMG_9914.jpeg", "IMG_9896.JPG", "IMG_9918.JPG"];

const $=s=>document.querySelector(s);
const archive=$('#archiveGrid');
function addCard(name, i, cls=''){const fig=document.createElement('figure');fig.className='media-card '+cls;const img=document.createElement('img');img.loading='lazy';img.src='assets/media/'+encodeURIComponent(name).replace(/%2F/g,'/');img.alt='Gorilla Boomin media '+(i+1);img.onclick=()=>openLightbox(img.src,img.alt);fig.appendChild(img);archive.appendChild(fig);}
ARCHIVE.slice(0,48).forEach((n,i)=>addCard(n,i));
const studioGrid=$('#studioGrid'); STUDIO.forEach((n,i)=>{const img=document.createElement('img');img.loading='lazy';img.src='assets/media/'+encodeURIComponent(n).replace(/%2F/g,'/');img.alt='BOOM STUDIO '+(i+1);img.onclick=()=>openLightbox(img.src,img.alt);studioGrid.appendChild(img)});
const videoGrid=$('#videoGrid'); VIDEOS.forEach((n,i)=>{const card=document.createElement('article');card.className='video-card';card.innerHTML=`<div class="video-wrap"><video controls preload="metadata" src="assets/media/${encodeURIComponent(n)}"></video></div><div class="video-copy"><span>BOOM MEDIA • VIDEO ${String(i+1).padStart(2,'0')}</span><h3>${i===0?'THE BOOM FILES':'BEHIND THE BOOM'}</h3><p>Original Gorilla Boomin media archive.</p></div>`;videoGrid.appendChild(card)});
function openLightbox(src,alt){const box=document.createElement('div');box.className='lightbox';box.innerHTML=`<button aria-label="Close">×</button><img src="${src}" alt="${alt}">`;box.addEventListener('click',e=>{if(e.target===box||e.target.tagName==='BUTTON')box.remove()});document.body.appendChild(box)}
const menu=$('#menuBtn'); const nav=$('#mainNav'); menu.addEventListener('click',()=>nav.classList.toggle('open')); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.form-note');note.textContent='Thanks — this form is ready for your final email/CRM connection in the live deployment.';note.classList.add('show');}));

// V4B player controls: visual demo until a real release file is supplied.
const fakePlay=document.getElementById('fakePlay'); if(fakePlay){fakePlay.addEventListener('click',()=>{fakePlay.textContent=fakePlay.textContent==='▶'?'Ⅱ':'▶';});}
// YouTube: set a real video ID here when ready, e.g. window.GB_YOUTUBE_ID='YOUR_ID';

/* ===== V5 LANGUAGE SWITCHER ===== */
(function(){
  const toggle=document.getElementById('langToggle');
  const menu=document.getElementById('langMenu');
  const current=document.getElementById('currentLang');
  if(!toggle || !menu) return;
  toggle.addEventListener('click',()=>menu.classList.toggle('open'));
  menu.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      current.textContent=btn.dataset.lang;
      menu.classList.remove('open');
      document.documentElement.lang=btn.dataset.lang.toLowerCase();
      // V5 stores the selected language now; full translated copy can be connected to a CMS/i18n layer next.
      localStorage.setItem('gb-language',btn.dataset.lang);
    });
  });
  const saved=localStorage.getItem('gb-language');
  if(saved) current.textContent=saved;
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.language-switcher')) menu.classList.remove('open');
  });
})();

document.querySelectorAll('[data-support]').forEach(btn=>btn.addEventListener('click',()=>alert((btn.dataset.support==='coffee'?'Buy Me a Coffee':btn.dataset.support==='beer'?'Buy Me a Beer':'Tip the Artist')+' — secure payment connection will be added when the payment provider is connected.')));

document.querySelectorAll('.eco-track a').forEach(item=>{item.addEventListener('focus',()=>item.closest('.eco-track')?.style.setProperty('animation-play-state','paused'));item.addEventListener('blur',()=>item.closest('.eco-track')?.style.removeProperty('animation-play-state'));});

/* V5.1 FINAL PERFORMANCE POLISH */
(function(){
  const heroVideo=document.querySelector('.hero-cinema video');
  if(!heroVideo) return;
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){ heroVideo.pause(); }
    else { heroVideo.play().catch(()=>{}); }
  });
})();
