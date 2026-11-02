/* Vivian 2.4: small, one-time scroll entrances; progressive enhancement. */
(()=>{
 'use strict';
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
 if(!('IntersectionObserver' in window)) return;
 const selectors=['.extra-card','.dash-card','.music-preview','.command-browser','.team-badge','.scenario-box','.preview-compare','.feature-row','.console','.chat-shell'];
 const nodes=[...document.querySelectorAll(selectors.join(','))];
 const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
     if(!entry.isIntersecting) continue;
     entry.target.classList.add('vivian-reveal-on');
     observer.unobserve(entry.target);
   }
 },{threshold:.08,rootMargin:'0px 0px -20px 0px'});
 nodes.forEach((node,i)=>{
   node.style.setProperty('--vivian-motion-delay',`${(i%4)*60}ms`);
   observer.observe(node);
 });
})();
