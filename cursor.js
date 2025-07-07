// cursor.js

document.addEventListener('DOMContentLoaded', () => {
    // 1) Create a single <div class="custom-cursor"></div> and append it
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  
    // 2) Move the custom cursor with the real mouse
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
  
    // 3) Define which elements count as “clickable”
    const clickableSelector = [
      'a',
      'button',
      'input[type="button"]',
      'input[type="submit"]',
      '.nav-item',
      '.view-projects-container',
      '.view-resume-container',
      '.resume-button-wrapper',
      '.experience-header',
      '.view-more-work-container',
      '.bottom-left-btn',
      '.dropdown-toggle'          // ← new line: h1 headers that open/close dropdowns
    ].join(',');
  
    // 4) Extend the “text” list to include all textual areas (including “MY EXPERIENCE”)
    const textSelector = [
      'p',
      'span',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'li',
      '.intro-text',
      '.view-projects-text',
      '.leopolds-title',
      '.leopolds-subtitle',
      '.leopolds-tagline',
      '.takomo-title',
      '.takomo-subtitle',
      '.takomo-tagline',
      '.about-title',
      '.about-description',
      '.additional-text p',
      '.experience-text',
      '.experience-title',    // ← added so “MY EXPERIENCE” uses text cursor
      '.fun-title',
      '.fun-text',
      '.view-more-work-text',
      '.intro-title',
      '.intro-description',
      '.project-meta',
      '.problem-title',
      '.problem-text',
      '.goal-title',
      '.goal-text',
      '.toc-title',
      '.step-text',
      '.insights-title',
      '.insights-text',
      '.insights-comparison-title',
      '.step-text-2',
      '.define-personas-title',
      '.define-personas-text',
      '.journey-title',
      '.journey-text',
      '.flow-label',
      '.step-text-3',
      '.step-text-4',
      '.step-text-5'
    ].join(',');
  
    // 5) On any mouseover, decide whether to enlarge or turn into a line
    document.addEventListener('mouseover', (e) => {
      const el = e.target;
  
      // 5a) If this element (or an ancestor) matches “clickable”, make circle bigger
      if (el.closest(clickableSelector)) {
        cursor.classList.add('cursor-hover');
        cursor.classList.remove('cursor-text-hover');
        cursor.style.width  = '';
        cursor.style.height = '';
        return;
      }
  
      // 5b) Else if this element itself matches one of the “textSelectors” (and not inside clickable)
      if (el.matches(textSelector) && !el.closest(clickableSelector)) {
        const computed = window.getComputedStyle(el);
        let lineHeight = computed.lineHeight;
        let h;
        if (lineHeight === 'normal') {
          const fontSize = parseFloat(computed.fontSize);
          h = fontSize * 1.2;
        } else {
          h = parseFloat(lineHeight);
        }
  
        cursor.classList.remove('cursor-hover');
        cursor.classList.add('cursor-text-hover');
        cursor.style.height = h + 'px';
        cursor.style.width  = ''; // width is set by CSS to 2px
        return;
      }
  
      // 5c) Otherwise, revert back to the default 20×20 circle
      cursor.classList.remove('cursor-hover', 'cursor-text-hover');
      cursor.style.width  = '';
      cursor.style.height = '';
    });
  
    // 6) On mouseout from either clickable or text, revert
    document.addEventListener('mouseout', (e) => {
      const el = e.target;
      if (el.matches(clickableSelector) || el.matches(textSelector)) {
        cursor.classList.remove('cursor-hover', 'cursor-text-hover');
        cursor.style.width  = '';
        cursor.style.height = '';
      }
    });
  });
  