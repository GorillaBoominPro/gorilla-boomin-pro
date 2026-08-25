/* GORILLA BOOMIN PRO — safe loader for preserved V5 + final polish + dream pass */
(function(){
  const albumStyle=document.createElement('link'); albumStyle.rel='stylesheet'; albumStyle.href='live-albums.css?v=2'; document.head.appendChild(albumStyle);
  const legacy=document.createElement('script');
  legacy.src='legacy-app.js?v=1';
  legacy.onload=()=>{
    const polish=document.createElement('script');
    polish.src='polish.js?v=1';
    polish.onload=()=>{
      const dream=document.createElement('script');
      dream.src='dream.js?v=2';
      dream.onload=()=>{
        const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
        const nodes=[]; let n;
        while((n=walker.nextNode())) nodes.push(n);
        nodes.forEach(node=>{
          let t=node.nodeValue;
          t=t.replace(/\bVSTs?\b/gi,'SAMPLE PACKS');
          t=t.replace(/MUSIC\s*[•|,/]\s*MERCH\s*[•|,/]\s*SAMPLE PACKS/gi,'MUSIC • MERCH • SAMPLE PACKS');
          node.nodeValue=t;
        });
        const socialLinks={artistYouTube:'https://youtube.com/@gorillaboomin2.0?si=pIqwlyUxWbhZDIVU',facebook:'https://www.facebook.com/share/1DcGZScAQA/?mibextid=wwXIfr',instagram:'https://www.instagram.com/gorillaboomin?igsh=MWE4NTA5dnA0ZmI5ag%3D%3D&utm_source=qr',gamingTikTok:'https://www.tiktok.com/@xxgorillaboominxx?_r=1&_t=ZN-98zkazCXXxm',gamingYouTube:'https://youtube.com/@xxgorillaboominxx?si=MhOE73QVOtSKR9jE',twitch:'https://www.twitch.tv/xgorillaboominxgaming'};
        const setExternal=(el,url)=>{if(!el)return;el.href=url;el.target='_blank';el.rel='noopener noreferrer';};
        document.querySelectorAll('.eco-track a[data-group="social"]').forEach(a=>{const label=a.textContent.toLowerCase();if(label.includes('youtube'))setExternal(a,socialLinks.artistYouTube);else if(label.includes('instagram'))setExternal(a,socialLinks.instagram);else if(label.includes('tiktok'))setExternal(a,socialLinks.gamingTikTok);else if(label.includes('twitch'))setExternal(a,socialLinks.twitch);});
        const contact=document.querySelector('#contact');
        if(contact&&!document.querySelector('.official-socials')){const socials=document.createElement('div');socials.className='official-socials';socials.innerHTML='<span>OFFICIAL LINKS</span><a href="'+socialLinks.artistYouTube+'" target="_blank" rel="noopener noreferrer">▶ YOUTUBE / ARTIST</a><a href="'+socialLinks.facebook+'" target="_blank" rel="noopener noreferrer">f FACEBOOK</a><a href="'+socialLinks.instagram+'" target="_blank" rel="noopener noreferrer">◎ INSTAGRAM</a><a href="'+socialLinks.gamingYouTube+'" target="_blank" rel="noopener noreferrer">▶ YOUTUBE / GAMING</a><a href="'+socialLinks.gamingTikTok+'" target="_blank" rel="noopener noreferrer">♪ TIKTOK / GAMING</a><a href="'+socialLinks.twitch+'" target="_blank" rel="noopener noreferrer">◫ TWITCH / GAMING</a>';const intro=contact.querySelector(':scope > div');if(intro)intro.appendChild(socials);}
        const hotfix=document.createElement('script');hotfix.src='site-hotfix.js?v=3';hotfix.onload=()=>{const gamingFix=document.createElement('script');gamingFix.src='gaming-fix.js?v=2';gamingFix.onload=()=>{const albums=document.createElement('script');albums.src='live-albums.js?v=3';albums.onload=()=>{const cards=document.querySelectorAll('.album-card');if(cards[2]){const audio=cards[2].querySelector('audio');const img=cards[2].querySelector('.album-cover-img');if(audio)audio.src='assets/album03-hot-hot-hot-live-archive%20(2).mp3';if(img)img.src='assets/album03-hot-hot-hot-cover-final-v2.jpg';}};document.body.appendChild(albums);};document.body.appendChild(gamingFix);};document.body.appendChild(hotfix);
      };document.body.appendChild(dream);
    };document.body.appendChild(polish);
  };document.body.appendChild(legacy);
})();