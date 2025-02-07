// script.js
window.addEventListener('load', function() {
    const overlay = document.getElementById('overlay');
    if (overlay) { // Check if the overlay element exists
        overlay.style.display = 'none';
    }
});

function startConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (confettiCanvas) { // Check if the canvas element exists
        const confettiSettings = {
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 }
        };
        confetti(confettiCanvas, confettiSettings);
    } else {
        console.error("Confetti canvas element not found!"); // Log an error
    }
}