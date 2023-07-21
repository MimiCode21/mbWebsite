
// Navbar
const navbarToggle = document.querySelector(".navbar-toggler");

const navbarLinks = document.querySelector('.navbar-collapse');
// Old code
// const navbarLinks = document.querySelector('.navbar-links');
navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
});
// Old code
// navbarLinks.classList.toggle("active");


// popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))