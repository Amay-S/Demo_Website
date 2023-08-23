let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector(".header");
let homeSection = document.querySelector("#home");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;
  header.classList.toggle("sticky", window.scrollY > 30);

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

  // Remove menu icon nav on click 
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
