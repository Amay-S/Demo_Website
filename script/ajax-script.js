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
