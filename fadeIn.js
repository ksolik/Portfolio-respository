// fadeIn.js
document.addEventListener("DOMContentLoaded", () => {
    // Select every element that should fade in.
    // (Include selectors for the top sections like .black-square, .cover-title, .cover-image, etc.)
    const fadeElements = document.querySelectorAll(
      ".black-square, .cover-title, .cover-image, .context-section, .design-process-section, " +
      ".intro-section, .problem-section, .goal-section, .contextual-inquiry-section, " +
      ".user-types-section, .maps-section, .findings-section, .takeaway-section, " +
      ".hmw-statement-section, .our-approach-section, .lowfi-prototype-section, " +
      ".final-section, .getstarted-section, .step1-section, .step2-section, " +
      ".step3-section, .step4-section, .step5-section, .step6-9-section, " +
      ".iron-recs-section, .styleguide-section, .footer-section"
    );
  
    const observerOptions = {
      threshold: 0.05, // Trigger when 10% is visible
    };
  
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);
  
    fadeElements.forEach((el) => fadeInObserver.observe(el));
  });
  