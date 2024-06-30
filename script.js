const countdown = () => {
    const now = new Date().getTime();
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = '<h2>Happy New Year 2025!</h2>';
    }
};

const interval = setInterval(countdown, 1000);
