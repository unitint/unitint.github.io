// Toggle navbar on mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');
navbarToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Highlight active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark');
  darkToggle.checked = true;
}
darkToggle?.addEventListener('change', () => {
  if (darkToggle.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // initial load
