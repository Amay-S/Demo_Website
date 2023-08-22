let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  section.forEach((sec, index) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove 'active' from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' to the corresponding link
      let correspondingLink = document.querySelector(`header nav a[href*='#${id}']`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });

  //stick navbar
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 30);

  // remove menu icon nav on click 

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/*
// dark mode 
let modeToggle = document.getElementById('mode-toggle');
let body = document.body;

modeToggle.onclick = () => {
  body.classList.toggle('dark-mode'); // Toggle dark mode styles
  
  // Toggle between moon and sun icons
  if (modeToggle.classList.contains('bxs-moon')) {
    modeToggle.classList.remove('bxs-moon');
    modeToggle.classList.add('bx-sun');
  } else {
    modeToggle.classList.remove('bx-sun');
    modeToggle.classList.add('bxs-moon');
  }
}
*/


ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 50
});

ScrollReveal().reveal('.home-content , .about-content, .portfolio-container, .slider', { origin: 'top'});
