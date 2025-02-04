// Create a custom cursor element dynamically
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Hide the default browser cursor
document.body.style.cursor = 'none';

// Track mouse movement to position the custom cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Style custom cursor for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .case-study-link, .navlink, .navlinktext');
interactiveElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.remove('cursor-text-hover');
    cursor.classList.add('cursor-hover');

    // Set styles for the interactive hover state
    cursor.style.width = '60px';
    cursor.style.height = '60px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 1)';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.borderRadius = '50%';
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');

    // Reset to default cursor styles
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 0.7)';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'transparent';
  });
});

// Style custom cursor for all text elements
const textElements = document.querySelectorAll(
  'p, span, h1, h2, h3, h4, h5, h6, li, div:not([class*="interactive"]):not([class*="wrapper"])'
);

textElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    // Ensure the element is not inside an interactive element
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
      cursor.classList.remove('cursor-hover');
      cursor.classList.add('cursor-text-hover');

      // Compute the height to match the text line height
      const computedStyle = window.getComputedStyle(element);
      let cursorHeight = computedStyle.lineHeight === 'normal'
        ? parseFloat(computedStyle.fontSize) * 1.2
        : parseFloat(computedStyle.lineHeight);

      // Set styles for text hover state
      cursor.style.width = '2px';
      cursor.style.height = `${cursorHeight}px`;
      cursor.style.backgroundColor = 'limegreen';
      cursor.style.border = 'none';
      cursor.style.borderRadius = '0';
    }
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-text-hover');

    // Reset to default cursor styles
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid rgba(255, 255, 255, 0.7)';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'transparent';
  });
});

// Ensure all elements on the page hide the default cursor
document.querySelectorAll('*').forEach((element) => {
  element.style.cursor = 'none';
});
document.addEventListener('mousemove', (e) => {
  // Show the custom cursor on first mouse move
  cursor.style.opacity = '1';
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
setInterval(() => {
  document.querySelectorAll('*').forEach((el) => {
    el.style.cursor = 'none';
  });
}, 1000);
