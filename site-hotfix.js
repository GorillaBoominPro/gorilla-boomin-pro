/* GORILLA BOOMIN — media + header cleanup */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Keep the umbrella / website header as GORILLA BOOMIN PRO.
  const brand=$('.brand');
  if(brand){
    const label=brand.querySelector('span:last-child');
    if(label) label.innerHTML='GORILLA <b>BOOMIN</b><small>PRO</small>';
  }

  // The artist remains GORILLA BOOMIN everywhere else; only the HQ header carries PRO.

  // Avoid showing BIG PEOPLE PARTY twice before the main BOOM FILES archive.
  const performanceCards=$$('.performance-showcase-v8 .performance-card-v8');
  performanceCards.forEach(card=>{
    const title=card.querySelector('h3');
    if(title && /BIG PEOPLE PARTY/i.test(title.textContent)) card.remove();
  });

  // Give archive performance videos visible poster art instead of a black/blank frame while scrolling.
  const oldSchool=$('.performance-showcase-v8 .performance-card-v8');
  if(oldSchool){
    const video=oldSchool.querySelector('video');
    if(video){
      video.poster='assets/a_highly_detailed_cinematic_promo_poster_artist.png';
      video.preload='metadata';
    }
  }

  const youtubeVideo=$('.youtube-player video');
  if(youtubeVideo){
    youtubeVideo.poster='assets/Skylight.jpg';
    youtubeVideo.preload='metadata';
  }

  // Hide legacy archive videos whose media file cannot load. We will reactivate this area
  // when fresh BOOM FILES videos are uploaded rather than displaying a broken player.
  $$('#videoGrid .video-card').forEach(card=>{
    const video=card.querySelector('video');
    if(!video) return;
    let handled=false;
    const removeBroken=()=>{if(handled)return;handled=true;card.remove();};
    video.addEventListener('error',removeBroken,{once:true});
    const src=decodeURIComponent(video.currentSrc || video.getAttribute('src') || '');
    if(/copy_46D7C9CD-A7F0-4F68-A698-0FD54DCF8B66\.mov/i.test(src)) removeBroken();
  });

  // Mobile presentation: one strong archive performance card reads cleaner than duplicates.
  if(!$('#boom-hotfix-style')){
    const style=document.createElement('style');
    style.id='boom-hotfix-style';
    style.textContent=`
      .brand>span:last-child small{display:inline-block!important;margin-left:7px;color:#e7b84d!important;font-size:.62em!important;letter-spacing:1.5px!important;vertical-align:middle!important}
      .performance-showcase-v8:has(.performance-card-v8:only-child){grid-template-columns:minmax(0,820px);justify-content:start}
      .performance-video-v8 video,.dream-live-video video{background:#050508}
      @media(max-width:520px){
        .brand>span:last-child small{margin-left:4px!important;font-size:.55em!important;letter-spacing:1px!important}
        .performance-showcase-v8{gap:18px!important}
      }
    `;
    document.head.appendChild(style);
  }
})();
