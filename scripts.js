// Generic site script
document.addEventListener('DOMContentLoaded', () => {
  // year footers
  const years = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = years;
  });

  // mobile menu toggle (single handler for any toggle)
  function toggleMobileNav(evt){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    nav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  }

  ['mobile-toggle','mobile-toggle-2','mobile-toggle-3','mobile-toggle-4','mobile-toggle-5']
    .forEach(id => {
      const btn = document.getElementById(id);
      if(btn) btn.addEventListener('click', toggleMobileNav);
    });

  // simple contact form validation & mock submit
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const status = document.getElementById('formStatus');

      if(!name || !email || !message){
        status.textContent = 'Please fill in required fields.';
        status.style.color = '#ffbaba';
        return;
      }

      // visual feedback (since no backend)
      status.style.color = '';
      status.textContent = 'Sending...';

      setTimeout(()=> {
        status.style.color = 'var(--accent-2)';
        status.textContent = 'Message sent. Thank you — we will contact you shortly.';
        contactForm.reset();
      }, 900);
    });
  }

  // pause video on mobile to save bandwidth
  const video = document.getElementById('bgVideo');
  if(video && /Mobi|Android/i.test(navigator.userAgent)){
    video.pause();
    video.style.display = 'none'; // fallback to background color or image
  }
});
