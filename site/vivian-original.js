(()=>{
  'use strict';
  const links=document.querySelectorAll('[data-command-category]');
  links.forEach(link=>link.addEventListener('click',()=>{
    const group=link.getAttribute('data-command-category');
    // The command catalog controls its own filtering; choose its existing category button.
    requestAnimationFrame(()=>{
      const button=[...document.querySelectorAll('.category-tabs button')].find(b=>b.dataset.group===group);
      if(button) button.click();
    });
  }));
})();
