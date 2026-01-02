// Дата кінця (5 січня 2026 року, 00:00:00)
const targetDate = new Date(2026, 0, 5, 0, 0, 0); 
// Січень = 0, бо місяці в JS починаються з 0

function updateCountdown() {
const now = new Date();
const diff = targetDate - now;

if (diff <= 0) {
    document.getElementById("countdown").innerText = "Час вийшов!";
    clearInterval(timer);
    return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("countdown").innerText =
    `${days}д. ${hours}г. ${minutes}хв. ${seconds}с.`;
}

// Оновлення щосекунди
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
