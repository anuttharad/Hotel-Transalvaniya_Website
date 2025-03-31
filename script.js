window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.classList.add("hidden"); // Hide loader
    setTimeout(() => preloader.style.display = "none", 500); // Remove from DOM
});




let lastScrollY = window.scrollY;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling up, show navbar
        navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY; // Update last scroll position
});



// script.js
window.onload = function() {
    // Show the preloader popup after the page loads
    document.getElementById("preloader-popup").style.display = "flex";

    // Add click event to the "Explore" button
    document.getElementById("explore-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        closePreloader();
    });
};

// Function to hide the preloader and show the main content
function closePreloader() {
    document.getElementById("preloader-popup").style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling after "Explore" click
}


window.onload = function() {
    // Disable page scrolling
    document.body.classList.add("no-scroll");
    
    // Show the preloader popup
    document.getElementById("preloader-popup").style.display = "flex";

    // Add click event to the "Explore" button
    document.getElementById("explore-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        closePreloader();
    });
};

function closePreloader() {
    document.getElementById("preloader-popup").style.display = "none";
    document.body.classList.remove("no-scroll"); // Enable scrolling after "Explore" click
}

