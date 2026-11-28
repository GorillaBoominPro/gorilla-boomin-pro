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
    #gbmn-unified-nav .gbmn-language-wrap{display:flex!important;align-items:center!important;flex:0 0 auto;gap:7px;padding:6px 9px;border:1px solid #e1c68b;border-radius:6px;background:#1a2030;min-height:42px;margin-left:4px;box-shadow:0 0 0 1px #0005}
    #gbmn-unified-nav .gbmn-language-label{color:#f3d9aa;font-weight:900;letter-spacing:.04em;font-size:12px;white-space:nowrap;cursor:pointer}
    #gbmn-unified-nav .gbmn-language{display:block!important;visibility:visible!important;opacity:1!important;position:static!important;color:#fff!important;background:#151c2b!important;border:1px solid #ffffff60!important;padding:7px 6px!important;max-width:145px;min-width:100px;font-size:12px;font-weight:700;cursor:pointer}
    #gbmn-unified-nav .gbmn-language option{background:#151c2b;color:#fff}
    @media(max-width:600px){#gbmn-unified-nav{gap:7px;padding:8px 12px}#gbmn-unified-nav .gbmn-language-wrap{margin-left:auto;gap:3px;padding:4px 5px}#gbmn-unified-nav .gbmn-language-label{font-size:10px}#gbmn-unified-nav .gbmn-language{min-width:79px;max-width:105px;font-size:11px}}
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
    ['HOME','/'],
    ['THE ARTIST','gorilla-boomin-artist-v2.html'],
    ['MUSIC','music.html'],
    ['VIDEO','music.html#video-world'],
    ['MAN OF STEEL','man-of-steel-v2.html'],
    ['BASS CULTURE','bass-culture-v2.html'],
    ['STUDIO','/#studio'],
    ['APPS','apps.html'],
    ['EPK','gorilla-boomin-epk.html'],
    ['BOOKINGS','/#contact']
  ];
  const brand=document.createElement('a');brand.className='gbmn-brand';brand.href='/';brand.setAttribute('aria-label','Gorilla Boomin home');brand.innerHTML='G<em>//</em>BMN:';nav.appendChild(brand);
  const toggle=document.createElement('button');toggle.type='button';toggle.className='gbmn-toggle';toggle.setAttribute('aria-expanded','false');toggle.textContent='☰ MENU';nav.appendChild(toggle);
  const menu=document.createElement('nav');menu.className='gbmn-links';menu.setAttribute('aria-label','Main site navigation');
  const current=location.pathname.split('/').pop()||'index.html';
  links.forEach(([label,url])=>{const a=document.createElement('a');a.href=url;a.textContent=label;if(label==='BOOKINGS')a.className='gbmn-book';if((label==='HOME'&&current==='index.html')||(label==='THE ARTIST'&&current==='gorilla-boomin-artist-v2.html')||(label==='MUSIC'&&current==='music.html')||(label==='APPS'&&current==='apps.html')||(label==='MAN OF STEEL'&&current==='man-of-steel-v2.html')||(label==='BASS CULTURE'&&current==='bass-culture-v2.html')||(label==='EPK'&&current==='gorilla-boomin-epk.html'))a.setAttribute('aria-current','page');menu.appendChild(a)});
  nav.appendChild(menu);
  /* Language choice is global, not home-page-only. The homepage retains its
     original Google Translate handler; all other pages initialize the same
     service here. Preserve the choice in links, a cookie, and localStorage. */
  const supported=['en','ro','es','fr','de','ja','it','ar','zh-CN','ru','uk','pt','ko','iw','hi','th'];
  const labels={'en':'English','ro':'Română','es':'Español','fr':'Français','de':'Deutsch','ja':'日本語','it':'Italiano','ar':'العربية','zh-CN':'简体中文','ru':'Русский','uk':'Українська','pt':'Português (Brasil)','ko':'한국어','iw':'עברית','hi':'हिन्दी','th':'ไทย'};
  const existingLanguage=document.getElementById('site-language');
  const searchLang=new URLSearchParams(location.search).get('lang');
  let savedLang=null;
  try{savedLang=localStorage.getItem('gbmn-site-language')}catch(_){}
  let cookieLang=null;
  try{const c=document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);if(c)cookieLang=decodeURIComponent(c[1]).split('/').pop()}catch(_){}
  const lang=supported.includes(searchLang)?searchLang:supported.includes(savedLang)?savedLang:supported.includes(cookieLang)?cookieLang:'en';
  const writeChoice=function(choice){
    const val=choice==='en'?'/en/en':'/en/'+choice;
    document.cookie='googtrans='+val+';path=/;SameSite=Lax';
    document.cookie='googtrans='+val+';path=/gorilla-boomin-pro/;SameSite=Lax';
    try{localStorage.setItem('gbmn-site-language',choice)}catch(_){}
  };
  writeChoice(lang);
  const picker=existingLanguage||document.createElement('select');
  picker.id='site-language';
  picker.classList.add('gbmn-language');
  picker.setAttribute('aria-label','Website language');
  if(!existingLanguage){
    supported.forEach(code=>{const option=document.createElement('option');option.value=code;option.textContent=labels[code];picker.appendChild(option)});
  }
  picker.value=lang;
  const languageWrap=document.createElement('div');languageWrap.className='gbmn-language-wrap';
  const languageLabel=document.createElement('label');languageLabel.className='gbmn-language-label';languageLabel.htmlFor='site-language';languageLabel.textContent='🌐 LANG';
  languageWrap.appendChild(languageLabel);
  languageWrap.appendChild(picker);
  nav.appendChild(languageWrap);
  /* Delegated link rewriting also covers page-body links and dynamically
     inserted navigation. External destinations and on-page hashes are untouched. */
  document.addEventListener('click',function(event){
    const a=event.target.closest&&event.target.closest('a[href]');
    if(!a||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.altKey||event.shiftKey||a.hasAttribute('download'))return;
    if(a.target&&a.target!=='_self')return;
    let u;try{u=new URL(a.href,location.href)}catch(_){return}
    if(u.origin!==location.origin||!/^https?:$/.test(u.protocol))return;
    const active=picker.value;
    if(!supported.includes(active))return;
    const isSamePage=u.pathname===location.pathname&&u.search===location.search&&!!u.hash;
    if(isSamePage)return;
    if(active==='en')u.searchParams.delete('lang');else u.searchParams.set('lang',active);
    a.href=u.href;
  },true);
  if(!existingLanguage){
    picker.addEventListener('change',function(){
      const selected=picker.value;
      if(!supported.includes(selected))return;
      writeChoice(selected);
      const u=new URL(location.href);
      if(selected==='en')u.searchParams.delete('lang');else u.searchParams.set('lang',selected);
      location.assign(u.href);
    });
    let container=document.getElementById('google_translate_element');
    if(!container){
      container=document.createElement('div');container.id='google_translate_element';
      container.setAttribute('aria-hidden','true');
      container.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;left:-9999px';
      document.body.appendChild(container);
    }
    window.gbmnGoogleTranslateInit=function(){
      if(window.google&&google.translate&&google.translate.TranslateElement){
        new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:supported.filter(x=>x!=='en').join(','),autoDisplay:false},'google_translate_element');
      }
    };
    if(!document.querySelector('script[data-gbmn-translate]')){
      const script=document.createElement('script');
      script.dataset.gbmnTranslate='1';
      script.src='https://translate.google.com/translate_a/element.js?cb=gbmnGoogleTranslateInit';
      script.async=true;
      document.head.appendChild(script);
    }
  }else{
    /* Homepage already owns the change/reload handler; sync storage before it navigates. */
    picker.addEventListener('change',function(){if(supported.includes(picker.value))writeChoice(picker.value)});
  }
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('gbmn-open');toggle.setAttribute('aria-expanded',String(open))});
  menu.addEventListener('click',()=>{nav.classList.remove('gbmn-open');toggle.setAttribute('aria-expanded','false')});
  document.querySelectorAll('.gbmn-shared-nav, header.nav, header.nav-v4b, header.top').forEach(el=>el.remove());
  document.body.insertBefore(nav,document.body.firstChild);
})();