// scripts.js
window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        document.body.style.display = 'block'; // Show main content
    }, 3000); // 3 seconds delay
};
