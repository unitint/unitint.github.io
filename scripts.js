
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

const darkToggle = document.getElementById('dark-toggle');

// Check local storage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark');
    darkToggle.checked = true;
}

darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
