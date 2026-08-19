/* FINAL POLISH PASS — loaded after legacy-app.js */
(function(){
  // BIO: keep Pan Fusion artwork exclusive to Pan Fusion; use a real archive portrait for the story.
  const bio=document.querySelector('.story-portrait-v6 img');
  if(bio){bio.src='assets/IMG_2260(1).jpeg';bio.alt='Gorilla Boomin — artist portrait';bio.style.objectFit='cover';bio.style.objectPosition='center top';}

  // LISTEN / WATCH / LIVE: remove the unrelated gaming-style artwork and make this a cinematic artist window.
  const playerArt=document.querySelector('#mediahub .player-art');
  if(playerArt){
    playerArt.innerHTML='<video class="mediahub-cinema" autoplay muted loop playsinline preload="metadata" poster="assets/hero-festival-poster.jpg"><source src="assets/hero-festival.mp4" type="video/mp4"></video>';
  }
  const trackStrong=document.querySelector('#mediahub .track-info strong');
  const trackSmall=document.querySelector('#mediahub .track-info small');
  if(trackStrong)trackStrong.textContent='PAN FUSION — GORILLA BOOMIN';
  if(trackSmall)trackSmall.textContent='Artist • DJ • Vocalist • Steelpan • Festival Energy';

  // BOOM FILES: turn the archive into a career journey — no generated flyers, logos or banners.
  const archive=document.querySelector('#archiveGrid');
  if(archive){
    archive.innerHTML='';
    const journey=[
      ['Skyligfht Showtime 4.JPG','LIVE PERFORMANCE','Years of entertaining audiences live.'],
      ['Skylight & Shaggy.jpg','SHARED STAGES','A career built around real artists, real stages and real moments.'],
      ['Skylight ,Celebrities and fans.JPG','THE PEOPLE','Artists, audiences, fans and memories from the journey.'],
      ['Skylight.jpg','THE EARLY CHAPTER','The experience came before the rebrand.'],
      ['Island Rush Pic 4.jpg','ISLAND ENERGY','Caribbean roots that still drive the sound today.'],
      ['FB_IMG_1462978714350.jpg','ON THE ROAD','Performance, entertainment and years of doing the work.'],
      ['FB_IMG_1462978763923.jpg','THE JOURNEY','Past chapters becoming fuel for the next one.'],
      ['IMG_2556(1).JPG','GORILLA BOOMIN','Experience behind the new era.'],
      ['IMG_3220(1).jpeg','BEHIND THE MUSIC','The work continues offstage.'],
      ['IMG_3274.JPG','LIVE & DIRECT','A life in music, performance and entertainment.'],
      ['IMG_3283.jpeg','THEN TO NOW','The archive is proof of the journey.'],
      ['IMG_3501.JPG','NEXT CHAPTER','From the islands to the main stage.']
    ];
    journey.forEach(([file,title,copy])=>{
      const fig=document.createElement('figure');fig.className='media-card journey-card';
      const img=document.createElement('img');img.loading='lazy';img.alt=title;img.src='assets/'+encodeURIComponent(file).replace(/%2F/g,'/');
      img.onerror=()=>fig.remove();img.onclick=()=>window.openLightbox?window.openLightbox(img.src,img.alt):null;
      const cap=document.createElement('figcaption');cap.innerHTML='<span>'+title+'</span><p>'+copy+'</p>';
      fig.append(img,cap);archive.appendChild(fig);
    });
  }
  const archiveIntro=document.querySelector('#media .section-intro');
  if(archiveIntro)archiveIntro.textContent='A visual journey through the years — stages, artists, audiences, island roots and the experience behind GORILLA BOOMIN. No filler. Just the story.';

  const style=document.createElement('style');
  style.textContent=`
    .mediahub-cinema{display:block;width:100%;height:100%;min-height:320px;object-fit:cover;object-position:center;border-radius:inherit;background:#05050a}
    #media .archive-grid{align-items:stretch}
    #media .journey-card{position:relative;overflow:hidden;background:#08080d;border:1px solid rgba(255,255,255,.12)}
    #media .journey-card img{width:100%;height:330px;object-fit:cover;display:block}
    #media .journey-card figcaption{padding:16px 16px 18px;background:linear-gradient(180deg,#0a0a10,#050508)}
    #media .journey-card figcaption span{font:800 9px Orbitron;letter-spacing:1.8px;color:#ffcf58}
    #media .journey-card figcaption p{margin:7px 0 0;color:#aeb5c3;font-size:12px;line-height:1.5}
    @media(max-width:700px){#media .journey-card img{height:280px}.mediahub-cinema{min-height:220px}}
  `;
  document.head.appendChild(style);
})();
