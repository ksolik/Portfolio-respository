// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Use IntersectionObserver to trigger the fade-in animation
    const personaSection = document.getElementById('persona-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the container is visible, add the 'visible' class
          if (entry.isIntersecting) {
            personaSection.classList.add('visible');
            observer.unobserve(personaSection); // Animate only once
          }
        });
      },
      {
        threshold: 0.3, // The percentage of the section that must be in view
      }
    );
  
    observer.observe(personaSection);
  });
  