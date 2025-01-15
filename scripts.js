// Ensure the page always loads at #hero on refresh
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        history.replaceState(null, null, ' '); // Prevent jumping to #hero after reload
    }

    const targetSection = window.location.hash ? document.querySelector(window.location.hash) : null;
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
    }
});

// Toggle navbar visibility on mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');
navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navbarToggle.classList.toggle('open'); // Add animation to toggle button
});

// Highlight active navbar link
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Update active link
        navLinksItems.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        // Close the navbar menu on mobile after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Dynamically highlight active navbar link based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint for better accuracy

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');
            navLinksItems.forEach(nav => {
                nav.classList.remove('active');
                if (nav.getAttribute('href') === `#${currentId}`) {
                    nav.classList.add('active');
                }
            });
        }
    });
});

// Debounce scroll events for performance optimization
let debounceTimer;
window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        // You can execute scroll-dependent actions here
    }, 100);
});
