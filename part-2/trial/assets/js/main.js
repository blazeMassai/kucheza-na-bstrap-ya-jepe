document.addEventListener("DOMContentLoaded", function() {

    // Initialize all tooltips
    const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for (let i = 0; i < tooltipTriggerElements.length; i++) {
        new bootstrap.Tooltip(tooltipTriggerElements[i])
    }

    // Variables for individual pages
    const homePage = document.querySelector('#homePage'); // index.html
    const contactPage = document.querySelector('#contactPage'); // contact.html

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    document.getElementById("year").innerHTML = new Date().getFullYear()

    // Only execute the following code on contactPage
        if (contactPage) {

            // Contact form
            const contactForm = document.querySelector('#contactForm');
            contactForm.addEventListener('submit', function (event) {
                if (!contactForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    const contactButton = document.querySelector('#contactButton');
                    contactButton.innerHTML = spinnerMarkup;
                    contactButton.disabled = true;
                    setTimeout(function() {
                        const contactConfirmationText = 'Sent';
                        contactButton.innerHTML = contactConfirmationText;
                        const contactConfirmationElement = document.querySelector('#contactConfirmation');
                        new bootstrap.Collapse(contactConfirmationElement).show();
                    }, 2000)
                }
                contactForm.classList.add('was-validated');
            }, false)
        }

// Only execute the following code on homePage
        if (homePage) {

            // Newsletter form
            const newsletterForm = document.querySelector('#newsletterForm');
            newsletterForm.addEventListener('submit', function (event) {
                if (!newsletterForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    const newsletterButton = document.querySelector('#newsletterButton');
                    newsletterButton.innerHTML = spinnerMarkup;
                    newsletterButton.disabled = true;
                    setTimeout(function() {
                        const newsletterConfirmationText = 'Subscribed';
                        newsletterButton.innerHTML = newsletterConfirmationText;
                        const newsletterConfirmationElement = document.querySelector('#newsletterConfirmation');
                        new bootstrap.Collapse(newsletterConfirmationElement).show();
                    }, 2000)
                }
                newsletterForm.classList.add('was-validated');
            }, false)
        }

    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
// When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

})




