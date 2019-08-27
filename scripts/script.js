window.addEventListener('load', () => {
    
    setInterval(() => {
        alert(window.innerWidth);
    ), 10000};
    
    let interval = setInterval(() => {
        let months, weeks, days, hours, minutes, seconds;
        
        endDate = new Date(2020, 7, 16, 8, 0).getTime();
        
        startDate = new Date().getTime();
        
        let timeRemaining = parseInt((endDate - startDate) / 1000);
        
        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = timeRemaining % 86400;
            
            weeks = parseInt(days / 7);
            days %= 7;

            months = parseInt(weeks / 4.345);
            weeks %= 4,345;

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = timeRemaining % 3600;
            
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = timeRemaining % 60;
            
            seconds = parseInt(timeRemaining);

            if (months === 1) {
                months = `${months} Monat`;
            } else {
                months = `${months} Monate`;
            }
            
            if (weeks === 1) {
                weeks = `${weeks} Woche`;
            } else {
                weeks = `${weeks} Wochen`;
            }

            if (days === 1) {
                days = `${days} Tag`;
            } else {
                days = `${days} Tage`;
            }

            if (hours === 1) {
                hours = `${("0" + hours).slice(-2)} Stunde`;
            } else {
                hours = `${("0" + hours).slice(-2)} Stunden`;
            }

            if (minutes === 1) {
                minutes = `${("0" + minutes).slice(-2)} Minute`;
            } else {
                minutes = `${("0" + minutes).slice(-2)} Minuten`;
            }

            if (seconds === 1) {
                seconds = `${("0" + seconds).slice(-2)} Sekunde`;
            } else {
                seconds = `${("0" + seconds).slice(-2)} Sekunden`;
            }

            document.getElementById("months").textContent = months;             
            document.getElementById("weeks").textContent = weeks;             
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("mins").textContent = minutes;
            document.getElementById("secs").textContent = seconds;
        } else {
            document.getElementById("weeks").textContent = 'es';
            document.getElementById("days").textContent = 'geht';
            document.getElementById("hours").textContent = 'los,';
            document.getElementById("mins").textContent = 'viel';
            document.getElementById("secs").textContent = 'spaß!';
        }
    }, 1000);
});
