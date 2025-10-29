// main.js - pequeños comportamientos
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // CTA top: ensure escape hatch to app
  const ctaTop = document.getElementById('ctaTop');
  if(ctaTop){
    ctaTop.addEventListener('click', function(){
      // could add analytics here
    });
  }
});
