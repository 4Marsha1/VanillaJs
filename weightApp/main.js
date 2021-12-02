var form = document.querySelector('#form');
var body = document.querySelector('body');

const displayCards = (e) => {
    e.preventDefault();
    var pounds = e.target.value;
    var kg = document.getElementById('kg');
    var gm = document.getElementById('gm');
    var oz = document.getElementById('oz');

    kg.textContent = pounds * 0.453592;
    gm.textContent = pounds * 453.592;
    oz.textContent = pounds * 16;

    kg.parentElement.style.backgroundColor = '#55A95C';
    gm.parentElement.style.backgroundColor = '#0070E0';
    oz.parentElement.style.backgroundColor = '#E55F4D';

    var cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'flex')
}

form.addEventListener('keyup', (e) => {
    displayCards(e);
});