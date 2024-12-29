// JavaScript Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Function to remove "active" class from all links
    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove("active"));
    };

    // Function to add "active" class to the corresponding link
    const addActiveClass = (id) => {
        removeActiveClasses();
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
    };

    // Intersection Observer Callback
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                addActiveClass(sectionId);
            }
        });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.6 // Trigger when 60% of the section is in the viewport
    });

    sections.forEach(section => observer.observe(section));
});

// Loading Screen Logic
window.onload = function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden'); // Add the hidden class to fade out
        setTimeout(() => loadingScreen.style.display = 'none', 1000); // Remove from flow after fade-out
    }, 3000); // 3 seconds delay
};
