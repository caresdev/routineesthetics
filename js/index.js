
/* Navigation */

// Close navbar toggler when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        if (navbarToggler.getAttribute("aria-expanded") === "true") {
            navbarToggler.click();
        }
    });
});





