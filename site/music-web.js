(() => {
 const area=document.querySelector('#web-music'); if(!area)return;
 const $=s=>area.querySelector(s), output=$('#wm-result'), field=$('#wm-guild');
 const guild=()=>field.value.trim();
 async function refresh(){
  if(!/^\d{15,20}$/.test(guild()))return;
  try{
   const r=await fetch('/api/music/status?guild_id='+encodeURIComponent(guild()),{credentials:'same-origin'});
   if(r.status===401){output.textContent='Войди через Discord для управления музыкой.';return;}
   if(!r.ok)return;
   const data=await r.json(), t=data.track;
   $('#wm-title').textContent=t?.title||'Ничего не играет';
   $('#wm-artist').textContent=t?.artist||'Discord-голосовой канал';
   $('#wm-state').textContent=t?.paused?'ПАУЗА':t?.playing?'ВОСПРОИЗВОДИТСЯ':'ОЖИДАНИЕ';
   if(data.last_request?.message) output.textContent=data.last_request.message;
  }catch{output.textContent='Нет соединения с API.';}
 }
 area.querySelectorAll('[data-music]').forEach(button=>button.addEventListener('click',async()=>{
  if(!/^\d{15,20}$/.test(guild())){output.textContent='Введи корректный Discord ID сервера.';return;}
  const action=button.dataset.music,query=$('#wm-query').value.trim();
  if(action==='play'&&!query){output.textContent='Введи название трека.';return;}
  output.textContent='Отправляю запрос боту…';
  try{
   const r=await fetch('/api/music/control',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify({guild_id:guild(),action,query})});
   const data=await r.json();
   output.textContent=r.status===202?'Запрос принят. Vivian проверит твой голосовой канал.':data.error||'Ошибка запроса';
  }catch{output.textContent='Ошибка соединения с API.';}
 }));
 field.addEventListener('change',refresh);
 setInterval(()=>{if(!document.hidden)refresh()},7000);
})();
