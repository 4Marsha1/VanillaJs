const click = document.querySelector('.btn');
const closeX = document.querySelector('.close');
const modal = document.querySelector('.popup-container');

let disp = false;
const toggle = () => {
    if (disp) {
        document.querySelector('.popup-container').style.display = 'none';
        disp = false;
    } else {
        document.querySelector('.popup-container').style.display = 'flex';
        disp = true;
    }
}

const clickOutside = (e) => {
    if (e.target == modal) {
        document.querySelector('.popup-container').style.display = 'none';
        disp = false;
    }
}

click.addEventListener('click', toggle);
closeX.addEventListener('click', toggle);
window.addEventListener('click', clickOutside);