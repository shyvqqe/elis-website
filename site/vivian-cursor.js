/* Vivian original square cursor: pointer-capable desktops only, with accessibility fallback. */
(()=>{
  const fine=matchMedia('(pointer: fine) and (hover: hover)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  if(!fine.matches||reduced.matches)return;
  const p=document.createElement('div');p.className='vivian-pointer';p.setAttribute('aria-hidden','true');document.body.appendChild(p);
  let x=-100,y=-100,tx=-100,ty=-100,raf=0,active=false;
  const frame=()=>{x+=(tx-x)*.72;y+=(ty-y)*.72;p.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;raf=(Math.abs(x-tx)>.08||Math.abs(y-ty)>.08)?requestAnimationFrame(frame):0};
  function unset(){p.classList.remove('is-visible','is-hover','is-press');document.body.classList.remove('vivian-cursor-active');active=false}
  document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;tx=e.clientX;ty=e.clientY;const editing=e.target.closest('input, textarea, [contenteditable], select, [role="textbox"]');if(editing){unset();return;}if(!active){x=tx;y=ty;active=true;}p.classList.add('is-visible');document.body.classList.add('vivian-cursor-active');p.classList.toggle('is-hover',!!e.target.closest('a,button,summary,[role="button"],label'));if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
  document.addEventListener('pointerdown',()=>p.classList.add('is-press'),{passive:true});document.addEventListener('pointerup',()=>p.classList.remove('is-press'),{passive:true});document.addEventListener('mouseout',e=>{if(!e.relatedTarget)unset()});window.addEventListener('blur',unset);
  const stop=()=>{unset();p.remove();if(raf)cancelAnimationFrame(raf)};
  fine.addEventListener?.('change',e=>{if(!e.matches)stop()});reduced.addEventListener?.('change',e=>{if(e.matches)stop()});
})();
