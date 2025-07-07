document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".slider-wrapper");
    const slides = Array.from(document.querySelectorAll(".slider-img"));
    const prevBtn = document.querySelector(".slider-arrow.prev");
    const nextBtn = document.querySelector(".slider-arrow.next");
    let index = 0;
  
    function updateSlider() {
      const slideWidth = slides[0].clientWidth;
      wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlider();
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });
  
    // Recalculate on resize
    window.addEventListener("resize", updateSlider);
  });
  