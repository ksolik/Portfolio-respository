const textFlipElement = document.querySelector('.text-flip');
const roles = ['UX/UI', 'graphic', 'web'];
let roleIndex = 0;

function flipText() {
  textFlipElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(flipText, 3000);  // Slide in/out every 3 seconds
