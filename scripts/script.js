window.addEventListener('load', () => {
    const finalDate = new Date(2021, 6, 22, 8, 0).getTime();
    
    const interval = setInterval(() => {
        const timeData = {};
        
        const currentTime = Date.now();
        
        const timeRemaining = finalDate - currentTime;
        
        if (timeRemaining >= 0) {
            timeData.days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)));
            timeData.weeks = Math.floor(timeData.days / 7);
            timeData.days = Math.floor(timeData.days % 7);
            timeData.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeData.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            timeData.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            if (timeData.months === 1) {
                timeData.months = `${timeData.months} Monat`;
            } else {
                timeData.months = `${timeData.months} Monate`;
            }
            
            if (timeData.weeks === 1) {
                timeData.weeks = `${timeData.weeks} Woche`;
            } else {
                timeData.weeks = `${timeData.weeks} Wochen`;
            }

            if (timeData.days === 1) {
                timeData.days = `${timeData.days} Tag`;
            } else {
                timeData.days = `${timeData.days} Tage`;
            }

            if (timeData.hours === 1) {
                timeData.hours = `${('0' + timeData.hours).slice(-2)} Stunde`;
            } else {
                timeData.hours = `${('0' + timeData.hours).slice(-2)} Stunden`;
            }

            if (timeData.minutes === 1) {
                timeData.minutes = `${('0' + timeData.minutes).slice(-2)} Minute`;
            } else {
                timeData.minutes = `${('0' + timeData.minutes).slice(-2)} Minuten`;
            }

            if (timeData.seconds === 1) {
                timeData.seconds = `${('0' + timeData.seconds).slice(-2)} Sekunde`;
            } else {
                timeData.seconds = `${('0' + timeData.seconds).slice(-2)} Sekunden`;
            }
           
            document.getElementById('weeks').textContent = timeData.weeks;             
            document.getElementById('days').textContent = timeData.days;
            document.getElementById('hours').textContent = timeData.hours;
            document.getElementById('mins').textContent = timeData.minutes;
            document.getElementById('secs').textContent = timeData.seconds;
        } else {
            clearInterval(interval);
            document.getElementById('weeks').textContent = 'Enjoy';
            document.getElementById('days').textContent = 'the';
            document.getElementById('hours').textContent = 'time';
            document.getElementById('mins').textContent = 'together!';
            document.getElementById('secs').textContent = '';
        }
    }, 10);
});
