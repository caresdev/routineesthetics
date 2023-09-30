
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


// Navbar closing button
const navbarToggler = document.querySelector(".navbar-toggler");
const closingButton = document.getElementById("closing-button");
const navbarTogglerIcon = document.getElementById("navbar-toggler-icon");

navbarToggler.addEventListener("click", () => {
    // Toggle visibility of closing button
    if (closingButton.style.display === "none") {
        closingButton.style.display = "block";
        navbarTogglerIcon.style.display = "none";
    }
    else{
        closingButton.style.display = "none";
        navbarTogglerIcon.style.display = "block";
    }
});



