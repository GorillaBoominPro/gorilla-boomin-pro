/* GORILLA BOOMIN — DJ / PRODUCER / LIVE ARTIST dream pass */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const hero=$('.hero-v5');
  if(!hero || $('#djlive')) return;

  if(!document.querySelector('link[href^="dream.css"]')){
    const css=document.createElement('link'); css.rel='stylesheet'; css.href='dream.css?v=4'; document.head.appendChild(css);
  }

  // SEO / authenticity identity.
  document.title='Lee Dominique Viarruel | GORILLA BOOMIN — DJ, Producer & Pan Fusion Tech House Artist';
  const meta=document.querySelector('meta[name="description"]');
  if(meta) meta.content='Official website of Lee Dominique Viarruel, professionally known as GORILLA BOOMIN — DJ, producer, vocalist and steelpan artist creating Pan Fusion Tech House between Trinidad & Tobago and Romania.';

  // HERO: stop repeating the same festival reel. Use a strong still collage instead.
  const heroCinema=$('.hero-cinema');
  if(heroCinema){
    heroCinema.innerHTML=`<div class="hero-still-v7" role="img" aria-label="Gorilla Boomin artist, DJ and live performance world">
      <div class="hero-still-main"></div><div class="hero-still-cut hero-still-cut-a"></div><div class="hero-still-cut hero-still-cut-b"></div>
    </div><div class="cinema-fallback"></div>`;
  }

  // Put the new career direction near the top — this is the ONE main cinematic festival reel.
  const live=document.createElement('section');
  live.id='djlive'; live.className='next-chapter';
  live.innerHTML=`
    <div class="next-chapter-media" aria-hidden="true"><video autoplay muted loop playsinline preload="metadata" poster="assets/hero-festival-poster.jpg"><source src="assets/hero-festival.mp4" type="video/mp4"></video></div>
    <div class="next-chapter-copy">
      <div class="next-kicker">THE NEXT CHAPTER / LIVE</div>
      <h2>DJ. PRODUCER.<br><em>LIVE ARTIST.</em></h2>
      <div class="next-tagline">CARIBBEAN ROOTS. GLOBAL STAGE. <strong>FUTURE SOUND.</strong></div>
      <div class="next-sound">PAN FUSION TECH HOUSE</div>
      <p class="next-body">The next era of Gorilla Boomin puts the DJ and producer at the front: festival energy, Caribbean rhythm, live steelpan identity and electronic music built for the drop.</p>
      <div class="next-actions"><a class="btn" href="#mediahub">WATCH / LISTEN</a><a class="btn ghost" href="#contact">BOOK GORILLA BOOMIN</a></div>
      <div class="stage-flags"><span class="tt">🇹🇹 TRINIDAD &amp; TOBAGO</span><span>×</span><span class="ro">🇷🇴 ROMANIA</span><span>• WORLDWIDE</span></div>
    </div>`;
  hero.insertAdjacentElement('afterend',live);
  const divider=document.createElement('div'); divider.className='festival-divider'; live.insertAdjacentElement('afterend',divider);

  const nav=$('#mainNav');
  if(nav && !nav.querySelector('a[href="#djlive"]')){const a=document.createElement('a');a.href='#djlive';a.textContent='DJ / LIVE';const worlds=nav.querySelector('a[href="#worlds"]');worlds?nav.insertBefore(a,worlds):nav.prepend(a);}

  const lead=$('.hero-v5-lead'); if(lead) lead.textContent='DJ • PRODUCER • LIVE ARTIST • PAN FUSION TECH HOUSE • STEELPAN • GAMING';

  // MEDIA: use a DIFFERENT real archive video here, not the hero festival reel again.
  const yt=$('.youtube-player');
  if(yt){
    yt.innerHTML=`<div class="player-top"><span>GORILLA BOOMIN / ARCHIVE</span><span>LIVE PERFORMANCE</span></div>
      <div class="dream-live-video"><video controls playsinline preload="metadata"><source src="assets/copy_46D7C9CD-A7F0-4F68-A698-0FD54DCF8B66.mov" type="video/quicktime"></video></div>
      <div class="yt-caption">A different chapter from the real archive — performance, crowd energy and the journey before the next era.</div>`;
  }

  // BIO AUTHENTICITY: real name first, artist identity second, then readable chapter headings.
  const storyTitle=$('.story-title');
  if(storyTitle){
    const originalH2=storyTitle.querySelector('h2');
    if(originalH2) originalH2.innerHTML='LEE DOMINIQUE<br><em>VIARRUEL.</em>';
    const sign=storyTitle.querySelector('.story-sign');
    if(sign) sign.innerHTML='<strong>PROFESSIONALLY KNOWN AS GORILLA BOOMIN</strong><br>ARTIST • DJ • PRODUCER • VOCALIST • STEELPAN';

    const oldDreamCard=storyTitle.querySelector('.story-dj-card'); if(oldDreamCard) oldDreamCard.remove();
    const legacyPortrait=storyTitle.querySelector('.story-portrait-v6 img');
    if(legacyPortrait){legacyPortrait.src='assets/Skylight.jpg'; legacyPortrait.alt='Lee Dominique Viarruel — Gorilla Boomin';}

    const badge=document.createElement('div'); badge.className='bio-identity-v7';
    badge.innerHTML='<span>THE ARTIST</span><b>GORILLA BOOMIN</b><small>PAN FUSION TECH HOUSE • DJ / PRODUCER • LIVE ARTIST</small>';
    storyTitle.appendChild(badge);
  }

  const storyCopy=$('.story-copy-v5');
  if(storyCopy && !storyCopy.querySelector('.bio-chapter-v7')){
    const paras=[...storyCopy.querySelectorAll('p')];
    const labels={0:['01','ROOTS & IDENTITY'],1:['02','THE FOUNDATION'],2:['03','THE WORLD STAGE'],5:['04','THE DJ AWAKENING'],7:['05','PAN FUSION TECH HOUSE'],8:['06','THE NEXT CHAPTER']};
    Object.entries(labels).reverse().forEach(([idx,data])=>{const p=paras[Number(idx)];if(!p)return;const h=document.createElement('div');h.className='bio-chapter-v7';h.innerHTML=`<span>${data[0]}</span><b>${data[1]}</b>`;p.insertAdjacentElement('beforebegin',h);});
  }

  const archiveIntro=$('#media .section-intro');
  if(archiveIntro) archiveIntro.textContent='A career told through real moments — stages, steelpan, cruise ships, media, DJ evolution, performances and the road into the next chapter.';
  const now=$('.media-now'); if(now) now.innerHTML='<span class="dot"></span> NOW PLAYING / PAN FUSION TECH HOUSE';

  ['worlds','music','studio','mediahub','story','media'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('festival-section');});
})();
