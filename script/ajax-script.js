// slider for services section
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        autoplay: true,
        autoplaySpeed: 10000, // 10000 ms = 10s
        dots: true // enables dots for the slider 
    });
});

//contact

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        mobileNumber: e.target.mobileNumber.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const messageDiv = document.getElementById('message');

        if (response.status === 200) {
            messageDiv.textContent = 'Email sent successfully!';
            messageDiv.style.color = 'green';
            e.target.reset(); // Resets the form
        } else {
            response.json().then(err => {
                console.error(err); // Log the entire error object
                messageDiv.textContent = 'An error occurred while sending the email.';
                messageDiv.style.color = 'red';
            });
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while sending the email.');
    }
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
