// Ensure the page always loads at #hero on refresh
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth'});
});

// Toggle navbar visibility on mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Highlight active navbar link
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinksItems.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

