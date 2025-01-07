// Hide loading screen and show main content after 3 seconds
window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.opacity = '0'; // Fade out
        setTimeout(function () {
            document.getElementById('loading-screen').style.display = 'none'; // Hide it
            document.body.style.display = 'block'; // Show main content
        }, 500); // Wait for fade-out
    }, 3000); // 3 seconds delay
};

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
