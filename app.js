/* GORILLA BOOMIN PRO — safe loader for preserved V5 + final polish + dream pass */
(function(){
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
      };
      document.body.appendChild(dream);
    };
    document.body.appendChild(polish);
  };
  document.body.appendChild(legacy);
})();
