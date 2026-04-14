
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === "#") return;
      const target = document.querySelector(targetId);
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // hire button scroll
  document.getElementById('hireBtn')?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // simple form alert (non-functional but shows intent)
  const form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      if(name) {
        alert(`Thanks ${name}! I'll get back to you within 24 hours. Let's build something great.`);
        form.reset();
      } else {
        alert("Please enter your name to proceed.");
      }
    });
  }

  // add intersection observer to animate skill fills only once
  const skillFills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const fill = entry.target;
        const width = getComputedStyle(fill).getPropertyValue('--w').trim();
        if(width && fill.style.width !== width) {
          fill.style.width = width;
        }
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(fill => observer.observe(fill));

  // initial pre-set for skill width from css variable
  window.addEventListener('load', () => {
    skillFills.forEach(fill => {
      const w = getComputedStyle(fill).getPropertyValue('--w').trim();
      if(w && fill.getBoundingClientRect().top < window.innerHeight) {
        fill.style.width = w;
      }
    });
  });