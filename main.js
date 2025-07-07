console.log('>> main.js is running! – injecting grass with proper layering.');

document.addEventListener('DOMContentLoaded', () => {
  function getRndNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  const CLUMPS = 200;
  const header = document.getElementById('header');
  const isMobile = window.innerWidth <= 600; // Check if the screen width is 600px or less

  if (!header) {
    console.error('Error: #header not found in the DOM.');
    return;
  }

  // ─── LAYER 1: Furthest back (#FFA418) ─────────────────────────── (z-index: 1)
  for (let i = 0; i < CLUMPS; i++) {
    const size = getRndNum(30, 50);
    const clump = document.createElement('div');
    clump.className = 'grass';
    clump.style.cssText =
      'width: ' + size + 'vmin; ' +
      'height: ' + size + 'vmin; ' +
      'left: ' + (Math.random() * 100) + 'vw; ' +
      'color: #FFA418; ' +
      'z-index: 1;'; // Behind image and text
    for (let j = 1; j <= 3; j++) {
      const blade = document.createElement('div');
      blade.className = 'grass__blade grass__blade--' + j;
      if (!isMobile) {
        blade.style.animationDelay = getRndNum(0, 2000) + 'ms'; // Add animation only for non-mobile screens
      }
      clump.appendChild(blade);
    }
    header.appendChild(clump);
  }

  // ─── LAYER 2: Middle (#FF9B0B) ───────────────────────────────── (z-index: 1)
  for (let i = 0; i < CLUMPS; i++) {
    const size = getRndNum(30, 40);
    const clump = document.createElement('div');
    clump.className = 'grass';
    clump.style.cssText =
      'width: ' + size + 'vmin; ' +
      'height: ' + size + 'vmin; ' +
      'left: ' + (Math.random() * 100) + 'vw; ' +
      'color: #FF9B0B; ' +
      'z-index: 1;'; // Still behind the image/text
    for (let j = 1; j <= 3; j++) {
      const blade = document.createElement('div');
      blade.className = 'grass__blade grass__blade--' + j;
      if (!isMobile) {
        blade.style.animationDelay = getRndNum(0, 2000) + 'ms'; // Add animation only for non-mobile screens
      }
      clump.appendChild(blade);
    }
    header.appendChild(clump);
  }

  // ─── INSERT rob1.png (z-index: 2) ───────────────────────────────
  const img = document.createElement('img');
  img.id = 'hero-img';
  img.src = 'Images/rob1.png';
  img.alt = 'rob image';
  img.style.zIndex = '2'; // Above Layers 1 & 2, below Layer 3 & text
  header.appendChild(img);

  // ─── LAYER 3: Front (#FF8F1F) ────────────────────────────────── (z-index: 3)
  for (let i = 0; i < CLUMPS; i++) {
    const size = getRndNum(15, 30);
    const clump = document.createElement('div');
    clump.className = 'grass';
    clump.style.cssText =
      'width: ' + size + 'vmin; ' +
      'height: ' + size + 'vmin; ' +
      'left: ' + (Math.random() * 100) + 'vw; ' +
      'color: #FF8F1F; ' +
      'z-index: 3;'; // In front of image/text
    for (let j = 1; j <= 3; j++) {
      const blade = document.createElement('div');
      blade.className = 'grass__blade grass__blade--' + j;
      if (!isMobile) {
        blade.style.animationDelay = getRndNum(0, 2000) + 'ms'; // Add animation only for non-mobile screens
      }
      clump.appendChild(blade);
    }
    header.appendChild(clump);
  }

  // ─── FADE ENTIRE HEADER ON SCROLL ─────────────────────────────────
  const headerHeight = header.offsetHeight;
  console.log('→ Header offsetHeight (px):', headerHeight);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Only use 30% of headerHeight as our “fade span”
    const fadeSpan = headerHeight * 0.3;

    // 1 at top, 0 when scrollY ≥ fadeSpan
    let newOpacity = 1 - scrollY / fadeSpan;
    newOpacity = Math.max(0, Math.min(1, newOpacity)); // clamp [0..1]

    header.style.opacity = newOpacity;
  });
});