(()=>{
  const clocks = [...document.querySelectorAll('.site-clock')];
  if (!clocks.length) return;
  const render = () => {
    const now = new Date();
    const isRu = document.documentElement.lang.toLowerCase().startsWith('ru');
    const locale = isRu ? 'ru-RU' : 'en-GB';
    const time = new Intl.DateTimeFormat(locale,{hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now);
    const date = new Intl.DateTimeFormat(locale,{day:'numeric',month:'short'}).format(now);
    for (const clock of clocks) {
      const t=clock.querySelector('[data-site-time]');
      const d=clock.querySelector('[data-site-date]');
      if(t){t.textContent=time;t.dateTime=now.toISOString()}
      if(d)d.textContent=date;
      clock.title = isRu ? 'Локальное время вашего устройства' : 'Your device local time';
      clock.setAttribute('aria-label',(isRu ? 'Локальное время: ' : 'Local time: ')+time+', '+date);
    }
  };
  render();
  const tick=setInterval(render,15000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)render()});
  window.addEventListener('pageshow',render);
  window.addEventListener('languagechange',render);
})();
