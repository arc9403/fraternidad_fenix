
// Main JS for Fraternidad Fénix landing page
document.addEventListener('DOMContentLoaded', function(){
  // Menu toggle for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  menuToggle && menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      if(!targetId) return;
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close menu on mobile
        if(mainNav.classList.contains('open')) mainNav.classList.remove('open');
      }
    });
  });

  // Set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Gallery modal
  const galleryGrid = document.getElementById('gallery-grid');
  const modal = document.getElementById('gallery-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  if(galleryGrid){
    galleryGrid.querySelectorAll('.gallery-item img').forEach(img=>{
      img.addEventListener('click', ()=>{
        modalContent.innerHTML = '<img src="'+img.src+'" alt="'+(img.alt||'')+'" style="max-width:100%;height:auto;border-radius:8px" />';
        modal.setAttribute('aria-hidden','false');
      });
    });
  }
  modalClose && modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

  // Form handlers (mocked, client-side only)
  const joinForm = document.getElementById('join-form');
  const joinFeedback = document.getElementById('join-feedback');
  if(joinForm){
    joinForm.addEventListener('submit', function(e){
      e.preventDefault();
      // basic validation
      const name = this.querySelector('[name="name"]').value.trim();
      const email = this.querySelector('[name="email"]').value.trim();
      if(!name || !email){
        joinFeedback.textContent = 'Por favor completa nombre y correo.';
        joinFeedback.style.color = 'tomato';
        return;
      }
      joinFeedback.style.color = '';
      joinFeedback.textContent = 'Solicitud enviada. Nos comunicaremos contigo pronto.';
      this.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.querySelector('[name="name"]').value.trim();
      const email = this.querySelector('[name="email"]').value.trim();
      const message = this.querySelector('[name="message"]').value.trim();
      if(!name || !email || !message){
        contactFeedback.textContent = 'Por favor completa todos los campos.';
        contactFeedback.style.color = 'tomato';
        return;
      }
      contactFeedback.style.color = '';
      contactFeedback.textContent = 'Mensaje enviado. Gracias por contactarnos.';
      this.reset();
    });
  }
});
