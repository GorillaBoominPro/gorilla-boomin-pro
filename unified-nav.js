/* G//BMN: shared navigation — one site, one signal. */
(function(){
  if(document.getElementById('gbmn-unified-nav')) return;
  const style=document.createElement('style');
  style.textContent=`
     .gbmn-shared-nav,header.nav,header.nav-v4b,header.top,body>header:not(#gbmn-unified-nav){display:none!important}
    #gbmn-unified-nav{position:sticky!important;top:0;z-index:99999;display:flex!important;align-items:center;gap:18px;min-height:66px;padding:12px clamp(16px,3vw,48px);background:rgba(8,12,22,.95);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.17);color:#fff;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box}
    #gbmn-unified-nav *{box-sizing:border-box}
    #gbmn-unified-nav .gbmn-brand{font-weight:900;font-size:22px;color:#fff;text-decoration:none;white-space:nowrap;letter-spacing:-.8px}
    #gbmn-unified-nav .gbmn-brand em{color:#f0354c;font-style:normal}
    #gbmn-unified-nav .gbmn-links{display:flex;align-items:center;gap:clamp(9px,1.3vw,21px);margin-left:auto}
    #gbmn-unified-nav .gbmn-links a{color:#f6f6f8;text-decoration:none;font-size:11px;font-weight:800;letter-spacing:.06em;white-space:nowrap}
    #gbmn-unified-nav .gbmn-links a:hover,#gbmn-unified-nav .gbmn-links a[aria-current="page"]{color:#ff425d}
    #gbmn-unified-nav .gbmn-book{border:1px solid #f0354c;padding:10px 12px}
    #gbmn-unified-nav .gbmn-toggle{display:none;background:transparent;color:#fff;border:1px solid #ffffff60;padding:8px 12px;cursor:pointer;font-weight:800}
    #gbmn-unified-nav .gbmn-language{color:#fff;background:#151c2b;border:1px solid #ffffff60;padding:7px 4px;max-width:110px;font-size:12px}
    html{scroll-padding-top:80px}
    @media(max-width:1100px){
      #gbmn-unified-nav{flex-wrap:wrap}
      #gbmn-unified-nav .gbmn-toggle{display:block;margin-left:auto}
      #gbmn-unified-nav .gbmn-links{display:none;width:100%;order:5;flex-direction:column;align-items:stretch;gap:0;margin:0}
      #gbmn-unified-nav.gbmn-open .gbmn-links{display:flex}
      #gbmn-unified-nav .gbmn-links a{padding:13px 6px;border-bottom:1px solid #ffffff20}
    }`;
  document.head.appendChild(style);
  const nav=document.createElement('header');nav.id='gbmn-unified-nav';
  const links=[
    ['HOME','redesign-v2.html'],
    ['THE ARTIST','gorilla-boomin-artist-v2.html'],
    ['MUSIC','redesign-v2.html#music'],
    ['MAN OF STEEL','man-of-steel-v2.html'],
    ['BASS CULTURE','bass-culture-v2.html'],
    ['STUDIO','redesign-v2.html#studio'],
    ['EPK','gorilla-boomin-epk.html'],
    ['BOOKINGS','redesign-v2.html#contact']
  ];
  const brand=document.createElement('a');brand.className='gbmn-brand';brand.href='redesign-v2.html';brand.setAttribute('aria-label','Gorilla Boomin home');brand.innerHTML='G<em>//</em>BMN:';nav.appendChild(brand);
  const toggle=document.createElement('button');toggle.type='button';toggle.className='gbmn-toggle';toggle.setAttribute('aria-expanded','false');toggle.textContent='☰ MENU';nav.appendChild(toggle);
  const menu=document.createElement('nav');menu.className='gbmn-links';menu.setAttribute('aria-label','Main site navigation');
  const current=location.pathname.split('/').pop()||'index.html';
  links.forEach(([label,url])=>{const a=document.createElement('a');a.href=url;a.textContent=label;if(label==='BOOKINGS')a.className='gbmn-book';if(url===current||(current==='index.html'&&label==='HOME'))a.setAttribute('aria-current','page');menu.appendChild(a)});
  nav.appendChild(menu);
  const existingLanguage=document.getElementById('site-language');
  if(existingLanguage){existingLanguage.classList.add('gbmn-language');existingLanguage.setAttribute('aria-label','Website language');nav.appendChild(existingLanguage)}
  else {const lang=document.createElement('a');lang.href='redesign-v2.html';lang.textContent='🌐';lang.title='Languages on main website';lang.style.color='#fff';nav.appendChild(lang)}
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('gbmn-open');toggle.setAttribute('aria-expanded',String(open))});
  menu.addEventListener('click',()=>{nav.classList.remove('gbmn-open');toggle.setAttribute('aria-expanded','false')});
  document.querySelectorAll('.gbmn-shared-nav, header.nav, header.nav-v4b, header.top').forEach(el=>el.remove());
  document.body.insertBefore(nav,document.body.firstChild);
})();