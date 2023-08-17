// sticky navbar

window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 30);
};

// toggle function for 'read more button'

function toggleContent(e, element) {
    e.preventDefault(); // prevents from jumping to the top of the page
    var content = document.getElementById("more-content");
    if(content.style.display === "none") {
        content.style.display = "block";
        element.textContent = "Read Less";
    } else {
        content.style.display = "none";
        element.textContent = "Read More";
    }
};


