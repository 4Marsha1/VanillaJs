const synth = window.speechSynthesis;

const form = document.getElementById('myForm');
const text = document.getElementById('text');
const rateValue = document.querySelector('.rateValue');
const rate = document.getElementById('rate');
const pitchValue = document.querySelector('.pitchValue');
const pitch = document.getElementById('pitch');
const voiceSelect = document.getElementById('voices');
const body = document.querySelector('body');

let voices = [];

const getVoices = () => {
    voices = synth.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        voiceSelect.appendChild(option);
    })
}

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

const speak = () => {
    if (synth.speaking) {
        console.log('Already Speaking');
        return;
    }
    if (text.value !== '') {

        body.style.background = '#141414 url(./wave.gif)';
        body.style.backgroundSize = '100% 100%';
        body.style.backgroundRepeat = 'repeat-x';

        const speakText = new SpeechSynthesisUtterance(text.value);

        speakText.onend = e => {
            console.log('Done Speaking');
            body.style.background = '#141414'
        }

        speakText.onerror = e => {
            console.log('Error in Speaking');
        }

        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        })

        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        synth.speak(speakText);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    speak();
    text.blur();
})

rate.addEventListener('change', e => rateValue.textContent = rate.value);
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

voiceSelect.addEventListener('change', e => speak());