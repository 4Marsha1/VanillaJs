const current = document.getElementById('current');
const images = document.querySelectorAll('.img');
const opacity = 0.6;

images[0].style.opacity = opacity;

const imageSwitch = e => {
    images.forEach(image => image.style.opacity = 1)

    current.src = e.target.src;

    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);

    e.target.style.opacity = opacity;
}

images.forEach(image => image.addEventListener('click', imageSwitch));