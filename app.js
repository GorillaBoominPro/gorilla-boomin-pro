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
      document.body.appendChild(dream);
    };
    document.body.appendChild(polish);
  };
  document.body.appendChild(legacy);
})();
