function startCountdown(elementId, targetDate) {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = target - now;

        // Calculations for days, hours, minutes and seconds
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        // Display results
        document.getElementById(elementId).innerHTML = `${d}d ${h}h ${m}m ${s}s`;

        // If countdown finished
        if (difference < 0) {
            clearInterval(interval);
            document.getElementById(elementId).innerHTML = "EVENT STARTED";
        }
    }, 1000);
}

// Set your dates here
startCountdown("exams", "May 20, 2026 09:00:00");
startCountdown("christmas", "December 25, 2026 00:00:00");
startCountdown("newyear", "January 1, 2027 00:00:00");