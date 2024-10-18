// Basic form validation for Join a Club form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const club = document.getElementById("club").value;

        if (!name || !email || !club) {
            alert("Please fill out all fields!");
            event.preventDefault();  // Prevent form submission
        } else {
            alert(`Successfully joined ${club}!`);
        }
    });
});

// Toggle mobile menu visibility (if you have a mobile version with a hamburger menu)
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// Example of smooth scrolling when clicking on links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to filter the club cards by category
function filterClubs() {
    const filterValue = document.getElementById("filter").value;
    const clubs = document.querySelectorAll(".club-card");

    clubs.forEach(club => {
        if (filterValue === "all" || club.classList.contains(filterValue)) {
            club.style.display = "block";
        } else {
            club.style.display = "none";
        }
    });
}
