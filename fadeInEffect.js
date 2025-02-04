document.addEventListener('scroll', () => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
  
    fadeInSections.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (sectionPosition < screenPosition) {
        section.classList.add('visible');
      }
    });
  });
  