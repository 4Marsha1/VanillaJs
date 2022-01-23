const breakChain = () => {
    const chain = document.getElementById('chain');
    if (chain.classList.contains('fa-unlink')) {
        chain.classList.remove('fa-unlink');
    }
    chain.classList.add('fa-link');
    setTimeout(() => {
        chain.classList.remove('fa-link');
        chain.classList.add('fa-unlink');
    }, 1000)
}
breakChain();
setInterval(breakChain, 2000);

const chargeBattery = () => {
    const battery = document.getElementById('battery');
    if (battery.classList.contains('fa-battery-full')) {
        battery.classList.remove('fa-battery-full');
    }
    battery.classList.add('fa-battery-empty');
    setTimeout(() => {
        battery.classList.remove('fa-battery-empty');
        battery.classList.add('fa-battery-quarter');
    }, 1000)
    setTimeout(() => {
        battery.classList.remove('fa-battery-quarter');
        battery.classList.add('fa-battery-half');
    }, 2000)
    setTimeout(() => {
        battery.classList.remove('fa-battery-half');
        battery.classList.add('fa-battery-three-quarters');
    }, 3000)
    setTimeout(() => {
        battery.classList.remove('fa-battery-three-quarters');
        battery.classList.add('fa-battery-full');
    }, 4000)
}

chargeBattery();
setInterval(chargeBattery, 5000);

const hourglassAnimate = () => {
    const hourglass = document.getElementById("hourglass");
    if (hourglass.classList.contains('fa-hourglass-end')) {
        hourglass.classList.remove('fa-hourglass-end');
    }
    hourglass.classList.add('fa-hourglass-start');
    setTimeout(() => {
        hourglass.classList.remove('fa-hourglass-start');
        hourglass.classList.add('fa-hourglass-half');
    }, 1000);
    setTimeout(() => {
        hourglass.classList.remove('fa-hourglass-half');
        hourglass.classList.add('fa-hourglass-end');
    }, 2000);
}

hourglassAnimate();
setInterval(hourglassAnimate, 3000);