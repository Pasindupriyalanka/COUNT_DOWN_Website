function updateCountdown(dateString, elementId) {
    const element = document.getElementById(elementId);
    
    // Date එක හරි ආකාරව parse කරගන්න (YYYY-MM-DD format)
    const eventDate = new Date(dateString).getTime();

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // ඉසව්ව පටන් ගෙන හෝ අවසන් වී ඇත්නම්
        if (distance < 0) {
            element.innerHTML = "<h3 style='color: #ff4d4d;'>Event Started or Ended!</h3>";
            clearInterval(timerInterval);
            return;
        }

        // දින, පැය, මිනිත්තු සහ තත්පර ගණනය කිරීම
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // HTML එකට දත්ත ඇතුළත් කිරීම
        element.querySelector('.days').innerText = d < 10 ? '0' + d : d;
        element.querySelector('.hours').innerText = h < 10 ? '0' + h : h;
        element.querySelector('.minutes').innerText = m < 10 ? '0' + m : m;
        element.querySelector('.seconds').innerText = s < 10 ? '0' + s : s;
    }, 1000);
}

// දින වකවානු නිවැරදිව (YYYY-MM-DD) ලබා දීම
updateCountdown("2026-01-20", "sport-fiesta");
updateCountdown("2026-02-02", "music-festival");
updateCountdown("2027-02-24", "convocation");
updateCountdown("2026-04-20", "new-year");
updateCountdown("2026-06-15", "mid-exam");
updateCountdown("2026-12-30", "christmas");