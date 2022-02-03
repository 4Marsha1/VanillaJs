const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const targetDate = new Date('April 18, 2022 00:00:00').getTime();

// console.log(date.getFullYear(), date.getHours(), date.getDay(), date.getMinutes(), date.getSeconds());

const updateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    days.innerText = `${Math.floor(difference / (1000 * 60 * 60 * 24))}`;
    hours.innerText = `${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
    mins.innerText = `${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}`
    seconds.innerText = `${Math.floor((difference % (1000 * 60)) / 1000)}`
}

setInterval(updateTime, 1000);