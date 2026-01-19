function countdown(eventDate, elementId) {
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById(elementId).innerHTML = "Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById(elementId).innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

countdown(new Date("2026-03-15").getTime(), "exam");
countdown(new Date("2026-04-10").getTime(), "convocation");
countdown(new Date("2026-02-20").getTime(), "sports");
