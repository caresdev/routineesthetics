
/* Navigation */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navTogglerIcon = document.getElementById("toggler-icon");

    // Close toggler menu when links are clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Check if the navbar is currently expanded
            if (navbarToggler.getAttribute("aria-expanded") === "true") {
                // Close it
                navbarToggler.click();
            }
        });
    });


    // Change toggler icons when menu toggler is open/closed
    navbarToggler.addEventListener("click", () => {

        // Initially, toggle is closed/collapsed (aria-expanded === "false")
        const isCollapsed = navbarToggler.getAttribute("aria-expanded") === "false";
        
        if (!isCollapsed) {
            navTogglerIcon.classList.add("open");
        }
        else{
            navTogglerIcon.classList.remove("open");
        }
    });


});






