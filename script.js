
document.addEventListener("DOMContentLoaded", function () {
    const countdown = document.getElementById("countdown");
    const weddingDate = new Date("January 31, 2026 17:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            countdown.innerHTML = "🎉 It's Wedding Time!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `<h3>${days}d ${hours}h ${minutes}m ${seconds}s until the party 🎊</h3>`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
