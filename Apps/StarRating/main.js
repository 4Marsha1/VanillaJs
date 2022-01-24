const ratings = {
    Red: 4.5,
    Blue: 3.4,
    Green: 1.6,
    Yellow: 2.7,
    Pink: 4.82
}
const totalStars = 5;

const color = document.getElementById('color');
const rating = document.getElementById('rating');

let item;
color.addEventListener('change', (e) => {
    item = e.target.value;
    rating.disabled = false;
    rating.value = ratings[item];
})

rating.addEventListener('blur', (e) => {
    const currentRating = e.target.value;
    if (currentRating > 5) {
        alert('Range is 1-5');
        return;
    }
    ratings[item] = currentRating;
    getRatings();
})

const getRatings = () => {
    for (let rating in ratings) {
        const starPercentage = (ratings[rating] / totalStars) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        document.querySelector(`.${rating} .star-inner`).style.width = starPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).textContent = ratings[rating];
    }
}

document.addEventListener('DOMContentLoaded', getRatings)

