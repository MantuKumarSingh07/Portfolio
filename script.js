// Hamburger Mobile Menu Toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Optional: Dynamic Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
        navbar.style.padding = "5px 0";
    } else {
        navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        navbar.style.padding = "0";
    }
});