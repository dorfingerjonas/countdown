window.addEventListener('load', () => {
    const finalDate = new Date(2022, 11, 20, 18, 5).getTime();

    const interval = setInterval(() => {
        const timeData = {};

        const currentTime = Date.now();

        const timeRemaining = finalDate - currentTime;

        if (timeRemaining >= 0) {
            timeData.days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)));
            timeData.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeData.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            timeData.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            if (timeData.days === 1) {
                timeData.days = `${timeData.days} <br> Tag`;
            } else {
                timeData.days = `${timeData.days} <br> Tage`;
            }

            if (timeData.hours === 1) {
                timeData.hours = `${('0' + timeData.hours).slice(-2)} <br> Stunde`;
            } else {
                timeData.hours = `${('0' + timeData.hours).slice(-2)} <br> Stunden`;
            }

            if (timeData.minutes === 1) {
                timeData.minutes = `${('0' + timeData.minutes).slice(-2)} <br> Minute`;
            } else {
                timeData.minutes = `${('0' + timeData.minutes).slice(-2)} <br> Minuten`;
            }

            if (timeData.seconds === 1) {
                timeData.seconds = `${('0' + timeData.seconds).slice(-2)} <br> Sekunde`;
            } else {
                timeData.seconds = `${('0' + timeData.seconds).slice(-2)} <br> Sekunden`;
            }

            document.getElementById('days').innerHTML = timeData.days;
            document.getElementById('hours').innerHTML = timeData.hours;
            document.getElementById('mins').innerHTML = timeData.minutes;
            document.getElementById('secs').innerHTML = timeData.seconds;
        } else {
            clearInterval(interval);
        }
    }, 500);
});
