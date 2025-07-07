// experiences.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all .experience-item containers
    document.querySelectorAll(".experience-item").forEach((item) => {
      const header = item.querySelector(".experience-header");
      const arrow = item.querySelector(".arrow");
  
      // Toggle .expanded class on the parent .experience-item
      header.addEventListener("click", () => {
        item.classList.toggle("expanded");
      });
  
      // Ensure clicking the arrow also toggles without propagation issues
      arrow.addEventListener("click", (e) => {
        e.stopPropagation();
        header.click();
      });
    });
  });
  