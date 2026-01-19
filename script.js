function updateCountdown(eventDate, elementId) {
    const element = document.getElementById(elementId);
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            element.innerHTML = "<h3>Event Started!</h3>";
            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const m = Math.floor((distance / (1000 * 60)) % 60);
        const s = Math.floor((distance / 1000) % 60);

        element.querySelector('.days').innerText = d < 10 ? '0'+d : d;
        element.querySelector('.hours').innerText = h < 10 ? '0'+h : h;
        element.querySelector('.minutes').innerText = m < 10 ? '0'+m : m;
        element.querySelector('.seconds').innerText = s < 10 ? '0'+s : s;
    }, 1000);
}


updateCountdown(new Date("2026-01-20").getTime(), "sport-fiesta");
updateCountdown(new Date("2026-02-02").getTime(), "music-festival");
updateCountdown(new Date("2026-02-24").getTime(), "convocation");
updateCountdown(new Date("2026-04-20").getTime(), "new-year");
updateCountdown(new Date("2026-06-15").getTime(), "mid-exam");
updateCountdown(new Date("2026-12-30").getTime(), "christmas");