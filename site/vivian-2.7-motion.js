(()=>{
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const start=()=>{
    const groups=['.feature-row','.extra-card','.dash-card','.section-intro','.command-item','.team-card','.hero-demo','.preview-compare','.footer-main'];
    const elements=[...document.querySelectorAll(groups.join(','))];
    elements.forEach((el,i)=>{
      if (el.closest('[hidden],.hidden')) return;
      el.classList.add('motion-reveal');
      el.style.setProperty('--reveal-delay',`${Math.min(i%4,3)*55}ms`);
      if (el.matches('.extra-card,.dash-card,.team-card')) el.classList.add('motion-card');
    });
    document.querySelector('.hero-main')?.classList.add('motion-hero');
    if (!('IntersectionObserver' in window)) {elements.forEach(e=>e.classList.add('motion-visible'));return;}
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('motion-visible');observer.unobserve(e.target);}})
    },{threshold:0.075,rootMargin:'0px 0px -18px 0px'});
    elements.forEach(e=>observer.observe(e));
    document.documentElement.classList.add('motion-ready');
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
