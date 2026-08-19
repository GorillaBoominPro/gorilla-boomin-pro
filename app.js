/* GORILLA BOOMIN PRO — safe loader for preserved V5 + final polish */
(function(){
  const legacy=document.createElement('script');
  legacy.src='legacy-app.js?v=1';
  legacy.onload=()=>{
    const polish=document.createElement('script');
    polish.src='polish.js?v=1';
    document.body.appendChild(polish);
  };
  document.body.appendChild(legacy);
})();
