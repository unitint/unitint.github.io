window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.opacity = '0'; // Fade out effect
        setTimeout(function () {
            document.getElementById('loading-screen').style.display = 'none'; // Hide it after fade
            document.body.style.display = 'block'; // Show main content
        }, 500); // Wait for fade-out to complete
    }, 3000); // 3 seconds delay
};
