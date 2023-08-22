// slider for services section
$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    autoplay: true,
    autoplaySpeed: 5000, // 10000 ms = 10s
    dots: true // enables dots for the slider 
  });
});

//scroll section

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  section.forEach((sec, index) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link, linkIndex) => {
        link.classList.remove('active');
        if (index === linkIndex) {
          link.classList.add('active'); // directly use the link
        }
      });

      // Debugging logs
      console.log('Active section:', id);
      console.log('Top:', top);
      console.log('Offset:', offset);
      console.log('Height:', height);
    }
  });

  // sticky navbar
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 30);
};


// toggle function for 'read more button'

function toggleContent(e, element) {
  e.preventDefault(); // prevents from jumping to the top of the page
  var content = document.getElementById("more-content");
  if (content.style.display === "none") {
    content.style.display = "block";
    element.textContent = "Read Less";
  } else {
    content.style.display = "none";
    element.textContent = "Read More";
  }
}


