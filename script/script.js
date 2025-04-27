// Page Loader
window.addEventListener("load", () => {
    document.querySelector(".loader-wrapper").style.display = "none";
  });
  
  // Scroll Animation
  const animateElements = document.querySelectorAll('.animate-slide, .animate-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-show');
      }
    });
  }, { threshold: 0.2 });
  
  animateElements.forEach(el => observer.observe(el));
  
  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
  
  // Particle Background
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particlesArray;
  
  function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
      });
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
  
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  
      ctx.fillStyle = "#FCB800";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  
  initParticles();
  animateParticles();
  
  window.addEventListener('resize', () => {
    initParticles();
  });
  