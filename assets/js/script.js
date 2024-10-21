document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute('href'));
  
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('h1[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // Adjust based on header height
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});
