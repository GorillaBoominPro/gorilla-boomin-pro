/* GORILLA BOOMIN — dedicated gaming feature fix */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const feature=$('.gaming-v6');
  if(!feature) return;

  const video=$('.gaming-v6-art video',feature);
  if(video){
    video.pause();
    video.removeAttribute('src');
    video.innerHTML='';
    const source=document.createElement('source');
    source.src='assets/gorilla-boomin-gaming.mov';
    source.type='video/quicktime';
    video.appendChild(source);
    video.preload='metadata';
    video.playsInline=true;
    video.controls=true;
    video.muted=false;
    video.loop=false;
    video.load();
  }

  const copy=$('.gaming-v6-copy',feature);
  if(copy && !$('.gb-gaming-feature-socials',feature)){
    const block=document.createElement('div');
    block.className='gb-gaming-feature-socials';
    block.innerHTML=`
      <span>FOLLOW THE GAMING WORLD</span>
      <div class="gb-gaming-feature-row">
        <a href="https://youtube.com/@xxgorillaboominxx" target="_blank" rel="noopener noreferrer" aria-label="Gaming YouTube">▶</a>
        <a href="https://www.instagram.com/xgorillaboominx/" target="_blank" rel="noopener noreferrer" aria-label="Gaming Instagram">◎</a>
        <a href="https://www.tiktok.com/@xxgorillaboominxx" target="_blank" rel="noopener noreferrer" aria-label="Gaming TikTok">♪</a>
        <a href="https://www.twitch.tv/xgorillaboominxgaming" target="_blank" rel="noopener noreferrer" aria-label="Gaming Twitch">◫</a>
      </div>`;
    const btn=copy.querySelector('.btn');
    if(btn) btn.insertAdjacentElement('afterend',block); else copy.appendChild(block);
  }

  if(!document.querySelector('#gaming-fix-style')){
    const style=document.createElement('style');
    style.id='gaming-fix-style';
    style.textContent=`
      .gb-gaming-feature-socials{margin-top:20px;padding-top:16px;border-top:1px solid #ffffff1c}
      .gb-gaming-feature-socials>span{display:block;margin-bottom:11px;color:#9da3b1;font:800 8px Orbitron;letter-spacing:2px}
      .gb-gaming-feature-row{display:flex;gap:9px;flex-wrap:wrap}
      .gb-gaming-feature-row a{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;border:1px solid #ffffff2a;background:#05050ad9;color:#fff;text-decoration:none;font:900 17px Orbitron;box-shadow:0 8px 26px #0008;transition:.2s}
      .gb-gaming-feature-row a:hover{transform:translateY(-2px);border-color:#ff4fae88}
      .gb-gaming-feature-row a:nth-child(1){color:#ff5364}.gb-gaming-feature-row a:nth-child(2){color:#ff66bd}.gb-gaming-feature-row a:nth-child(3){color:#69f4ed}.gb-gaming-feature-row a:nth-child(4){color:#b48cff}
      .gaming-v6-art video{background:#030306;object-fit:cover}
      @media(max-width:700px){.gb-gaming-feature-row a{width:44px;height:44px}.gb-gaming-feature-socials{margin-top:18px}}
    `;
    document.head.appendChild(style);
  }
})();