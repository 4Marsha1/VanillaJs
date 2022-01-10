const input = document.querySelector('#input');
const output = document.querySelector('#output');
const span = document.querySelector('#text');

// const findFactAjax = () => {
//     const number = input.value;
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://numbersapi.com/${number}`)

//     xhr.onload = function () {
//         if (this.status == 200 && number != '') {
//             output.style.display = 'flex';
//             span.textContent = this.response;
//         } else {
//             output.style.display = 'none';
//             span.textContent = '';
//         }
//     }
//     xhr.send()
// }

const findFact = async () => {
    const number = input.value;
    const res = await fetch(`http://numbersapi.com/${number}`);
    const data = await res.text();
    if (number != '') {
        output.style.display = 'flex';
        span.textContent = data;
    } else {
        output.style.display = 'none';
        span.textContent = '';
    }
}

input.addEventListener('input', findFact);