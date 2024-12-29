window.onload = function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden'); // Add the hidden class to fade out
        setTimeout(() => loadingScreen.style.display = 'none', 1000); // Remove from flow after fade-out
    }, 3000); // 3 seconds delay
};
