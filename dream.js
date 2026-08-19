/* GORILLA BOOMIN — DJ / PRODUCER / LIVE ARTIST dream pass */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const hero=$('.hero-v5');
  if(!hero || $('#djlive')) return;

  // Load the dream visual layer without disturbing the preserved V5 foundation.
  if(!document.querySelector('link[href="dream.css"]')){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='dream.css?v=2';
    document.head.appendChild(css);
  }

  // Put the new career direction near the top of the site.
  const live=document.createElement('section');
  live.id='djlive';
  live.className='next-chapter';
  live.innerHTML=`
    <div class="next-chapter-media" aria-hidden="true">
      <video autoplay muted loop playsinline preload="metadata" poster="assets/hero-festival-poster.jpg">
        <source src="assets/hero-festival.mp4" type="video/mp4">
      </video>
    </div>
    <div class="next-chapter-copy">
      <div class="next-kicker">THE NEXT CHAPTER / LIVE</div>
      <h2>DJ. PRODUCER.<br><em>LIVE ARTIST.</em></h2>
      <div class="next-tagline">CARIBBEAN ROOTS. GLOBAL STAGE. <strong>FUTURE SOUND.</strong></div>
      <div class="next-sound">PAN FUSION TECH HOUSE</div>
      <p class="next-body">The next era of Gorilla Boomin puts the DJ and producer at the front: festival energy, Caribbean rhythm, live steelpan identity and electronic music built for the drop.</p>
      <div class="next-actions">
        <a class="btn" href="#mediahub">WATCH / LISTEN</a>
        <a class="btn ghost" href="#contact">BOOK GORILLA BOOMIN</a>
      </div>
      <div class="stage-flags"><span class="tt">🇹🇹 TRINIDAD &amp; TOBAGO</span><span>×</span><span class="ro">🇷🇴 ROMANIA</span><span>• WORLDWIDE</span></div>
    </div>`;
  hero.insertAdjacentElement('afterend',live);
  const divider=document.createElement('div'); divider.className='festival-divider'; live.insertAdjacentElement('afterend',divider);

  // New primary navigation destination.
  const nav=$('#mainNav');
  if(nav && !nav.querySelector('a[href="#djlive"]')){
    const a=document.createElement('a'); a.href='#djlive'; a.textContent='DJ / LIVE';
    const worlds=nav.querySelector('a[href="#worlds"]');
    worlds ? nav.insertBefore(a,worlds) : nav.prepend(a);
  }

  // Make the opening statement match the new focus.
  const lead=$('.hero-v5-lead');
  if(lead) lead.textContent='DJ • PRODUCER • LIVE ARTIST • PAN FUSION TECH HOUSE • STEELPAN • GAMING';

  // LISTEN / WATCH / LIVE: use the cinematic performance reel instead of unrelated cover art.
  const yt=$('.youtube-player');
  if(yt){
    yt.innerHTML=`<div class="player-top"><span>GORILLA BOOMIN / LIVE</span><span>CINEMATIC REEL</span></div>
      <div class="dream-live-video"><video controls playsinline preload="metadata" poster="assets/hero-festival-poster.jpg"><source src="assets/hero-festival.mp4" type="video/mp4"></video></div>
      <div class="yt-caption">DJ • Pan Fusion Tech House • festival vision • live performance • future shows</div>`;
  }

  // Give the biography a visual DJ chapter without reusing the Pan Fusion cover.
  const storyTitle=$('.story-title');
  if(storyTitle && !storyTitle.querySelector('.story-dj-card')){
    const card=document.createElement('div');
    card.className='story-dj-card';
    card.innerHTML=`<div class="story-dj-frame"><video autoplay muted loop playsinline preload="metadata" poster="assets/hero-festival-poster.jpg"><source src="assets/hero-festival.mp4" type="video/mp4"></video></div><div class="story-dj-label"><b>THE DJ / PRODUCER CHAPTER</b><span>PAN FUSION TECH HOUSE • LIVE ARTIST</span></div>`;
    storyTitle.appendChild(card);
  }

  // Archive language: make the purpose explicit — proof of the journey, not a flyer wall.
  const archiveIntro=$('#media .section-intro');
  if(archiveIntro) archiveIntro.textContent='A career told through real moments — stages, steelpan, cruise ships, media, DJ evolution, performances and the road into the next chapter.';

  // Correct / strengthen small labels.
  const now=$('.media-now'); if(now) now.innerHTML='<span class="dot"></span> NOW PLAYING / PAN FUSION TECH HOUSE';

  // Festival energy around major sections without covering content.
  ['worlds','music','studio','mediahub','story','media'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.classList.add('festival-section');
  });
})();
