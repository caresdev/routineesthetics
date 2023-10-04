
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
// Use hidden attribute to closing button html tag , remove attribute with removeAttribute() function
// Add hidden attribute to hamburger button html tage, 
const navbarToggler = document.querySelector(".navbar-toggler");
const closingButton = document.getElementsByClassName("closing-button");
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



