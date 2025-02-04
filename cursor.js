// Cursor movement
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Hover effect for interactive elements (links, buttons, navbar items, etc.)
const interactiveElements = document.querySelectorAll('a, button, .case-study-link, .navlink, .navlinktext');

interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.custom-cursor');
    // Remove text-hover class if present
    cursor.classList.remove('cursor-text-hover');
    cursor.classList.add('cursor-hover');

    // Reset styles to ensure the circle appears correctly
    cursor.style.width = '60px';
    cursor.style.height = '60px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 1)';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.borderRadius = '50%';
    cursor.style.transform = 'translate(-50%, -50%)';
  });

  element.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.classList.remove('cursor-hover');
    // Reset to default styles
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 0.7)';
    cursor.style.borderRadius = '50%';
  });
});

// Hover effect for text elements that are not interactive elements
const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li');

textElements.forEach(element => {
  element.addEventListener('mouseenter', (event) => {
    // Check if the element is inside an interactive element
    let isInteractive = false;
    let currentElement = element;
    while (currentElement) {
      if (currentElement.matches('a, button, .case-study-link, .navlink, .navlinktext')) {
        isInteractive = true;
        break;
      }
      currentElement = currentElement.parentElement;
    }

    if (!isInteractive) {
      const cursor = document.querySelector('.custom-cursor');
      // Remove hover class if present
      cursor.classList.remove('cursor-hover');
      cursor.classList.add('cursor-text-hover');

      // Get the line height of the element
      const computedStyle = window.getComputedStyle(element);
      let cursorHeight;

      // Try to get the line height in pixels
      let lineHeight = computedStyle.lineHeight;
      if (lineHeight === 'normal') {
        // If line height is 'normal', estimate it
        const fontSize = parseFloat(computedStyle.fontSize);
        cursorHeight = fontSize * 1.2; // Approximate line height
      } else {
        cursorHeight = parseFloat(lineHeight);
      }

      cursor.style.height = `${cursorHeight}px`;
      cursor.style.width = '2px';
      cursor.style.backgroundColor = 'limegreen';
      cursor.style.border = 'none';
      cursor.style.borderRadius = '0';
      cursor.style.transform = 'translate(-50%, -50%)';
    }
  });

  element.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.classList.remove('cursor-text-hover');
    // Reset to default styles
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 0.7)';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.borderRadius = '50%';
    cursor.style.transform = 'translate(-50%, -50%)';
  });
});
