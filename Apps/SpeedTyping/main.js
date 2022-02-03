let time = 7;
let score = 0;
let words = [];
let isPlaying;

const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const seconds = document.getElementById('seconds');
const timeSpan = document.getElementById('time');
const scoreSpan = document.getElementById('score');
const message = document.getElementById('message');

const init = async () => {
    seconds.innerHTML = time;
    const res = await fetch('https://random-word-api.herokuapp.com/word?number=100');
    words = await res.json();
    showWords(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
}
const startMatch = () => {
    if (wordMatch()) {
        isPlaying = true;
        time = 8;
        showWords(words);
        score++;
        wordInput.value = ''
    }
    if (score === -1) {
        scoreSpan.innerHTML = 0;
    } else {
        scoreSpan.innerHTML = score;
    }
}
const wordMatch = () => {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct !!'
        return true;
    } else {
        message.innerHTML = ''
        return false;
    }
}
const showWords = (words) => {
    const randIdx = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIdx];
}
const countDown = () => {
    if (time > 0)
        time--;
    else if (time === 0)
        isPlaying = false;
    timeSpan.innerHTML = time;
}
const checkStatus = () => {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over !!'
        score = -1;
    }
}

window.addEventListener('load', init)