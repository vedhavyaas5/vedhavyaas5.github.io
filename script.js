// Responsive Nav Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '50px';
    menu.style.background = '#222';
    menu.style.width = '90vw';
    menu.style.left = '5vw';
    menu.style.zIndex = '99';
  }
});

// Contact Form Handling (Demo)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
});
