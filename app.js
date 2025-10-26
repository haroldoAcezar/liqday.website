// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  });
});

// CTA form handler
const ctaForm = document.getElementById('cta-form');
if(ctaForm){
  ctaForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = (document.getElementById('cta-email')||{}).value || '';
    alert('Obrigado! Em breve entraremos em contato: ' + email);
  });
}