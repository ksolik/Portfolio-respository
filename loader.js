// loader.js
(function() {
    const MINIMUM_LOAD_TIME = 1250; // 1.25 seconds
    const startTime = Date.now();
    
    console.log("Loader script started at: " + startTime);
    
    window.addEventListener('load', function() {
      console.log("Window load event fired.");
      
      const loaderOverlay = document.getElementById('loader-overlay');
      const pageContent = document.getElementById('page-content');
  
      if (!loaderOverlay) {
        console.error("Element with ID 'loader-overlay' not found!");
        return;
      }
      if (!pageContent) {
        console.error("Element with ID 'page-content' not found!");
        return;
      }
  
      const elapsed = Date.now() - startTime;
      console.log("Elapsed time since script start: " + elapsed + "ms");
  
      const delay = Math.max(0, MINIMUM_LOAD_TIME - elapsed);
      console.log("Will hide loader after an additional " + delay + "ms.");
  
      setTimeout(function() {
        console.log("Hiding loader now.");
        loaderOverlay.style.display = 'none';
        // Unhide page content: remove the 'hidden' class and optionally set display property.
        pageContent.classList.remove('hidden');
        pageContent.style.display = 'block';
        console.log("Page content is now visible.");
      }, delay);
    });
  })();
  
