// Toggle mobile nav
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');
navbarToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
  navbarToggle.setAttribute('aria-expanded', !expanded);
});

// Active nav link highlight
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.remove('active');
      l.removeAttribute('aria-current');
    });

    // Set active on clicked link
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');

    // Auto-close nav menu on mobile
    navLinks.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
  });
});



// Section hover highlights corresponding nav link
const sections = document.querySelectorAll('section[id]');

sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (navLink) navLink.classList.add('highlighted');
  });

  section.addEventListener('mouseleave', () => {
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (navLink) navLink.classList.remove('highlighted');
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

// Scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// In scripts.js
const typingText = "I'm John Emman Isuga";
let index = 0;
function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;


// Reveal sections on scroll
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
revealOnScroll(); // on load
