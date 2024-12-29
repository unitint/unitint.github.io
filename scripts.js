window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        document.body.style.display = 'block'; // Show main content
    }, 3000); // 3 seconds delay
};

// Add active class functionality
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });

        // Show the text on hover and hide icon, vice versa
        link.addEventListener('mouseenter', function () {
            this.querySelector('.icon').style.display = 'none';
            this.querySelector('.text').style.display = 'inline-block';
        });

        link.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.querySelector('.icon').style.display = 'inline-block';
                this.querySelector('.text').style.display = 'none';
            }
        });
    });
});
