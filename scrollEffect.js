document.addEventListener("scroll", () => {
    const scrollElements = document.querySelectorAll(".scroll-fade");
    const scrollPosition = window.scrollY;
    const fadeOutPoint = 200; // Adjust to set when fading starts
  
    scrollElements.forEach((element) => {
      if (scrollPosition < fadeOutPoint) {
        element.style.opacity = 1 - scrollPosition / fadeOutPoint;
      } else {
        element.style.opacity = 0.1;
      }
    });
  });
  