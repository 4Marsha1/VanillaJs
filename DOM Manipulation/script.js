// ----------------------- QuerySelector : ---------------

// var odd = document.querySelectorAll('li:nth-child(odd');
// var even = document.querySelectorAll('li:nth-child(even)');

// odd.forEach(item => {
//     item.style.backgroundColor = '#f4f4f4';
// });

// even.forEach(item => {
//     item.style.backgroundColor = '#ccc';
// });


// -------------------------- Traversing the DOM -----------------------

// 1. Parent Element : ------------
// var itemList = document.querySelector('.items');
// console.log(itemList.parentElement.parentElement);

// 2. Children : ------------------
// var itemList = document.querySelector('.items');
// console.log(itemList.children);

// 3. FirstElementChild : ---------
// var itemList = document.querySelector('.items');
// console.log(itemList.firstElementChild);

// 4. LastElemenentChild : --------
// var itemList = document.querySelector('.items');
// console.log(itemList.lastElementChild);

// 5. NextElementSibling : --------
// var itemList = document.querySelector('.items');
// console.log(itemList.nextElementSibling);

// 6. PreviousElementSibling : -------
// var itemList = document.querySelector('.items');
// console.log(itemList.previousElementSibling);


// ------------------------------ Creating Element ----------------------------

// var newDiv = document.createElement('div');
// newDiv.className = 'header2';
// newDiv.id = 'header2';
// newDiv.setAttribute('alt', 'JS Header');
// var newDivText = document.createTextNode('hello World!');
// newDiv.appendChild(newDivText);
// newDiv.style.backgroundColor = 'red';
// newDiv.style.color = 'white'

// var body = document.querySelector('body');
// var h1 = document.querySelector('.header');
// body.insertBefore(newDiv, h1);

// ----------------------------- Event Listener ------------------------------

// const buttonClick = (e) => {
//     e.preventDefault();
//     // console.log(e.target);
//     // console.log(e.target.id, e.target.className, e.target.classList);
//     // console.log(e.type);
//     // console.log(e.clientX, e.clientY, e.offsetX, e.offsetY);
//     // console.log(e.altKey, e.shiftKey, e.ctrlKey);

//     // var output = document.querySelector('.output').textContent = `${e.target.type} ${e.target.className}`;
// };
// var btn = document.querySelector('.btn');
// btn.addEventListener('click', buttonClick);

// ----------------------------- Types of Event Listeners ---------------------

// const eventType = e => {
//     console.log(e.type);
//     var output = document.querySelector('.output');
//     output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`
// };
// var btn = document.querySelector('.btn');
// btn.addEventListener('click', eventType);
// btn.addEventListener('dblclick', eventType);
// btn.addEventListener('mousedown', eventType);
// btn.addEventListener('mouseup', eventType);

// var box = document.getElementById('box');
// console.log(box);
// box.addEventListener('mousemove', eventType);


// ------------------------------  Form  ---------------------------------------

// const runEvent = (e) => {
//     e.preventDefault();
//     console.log(e.type);
//     var output = document.querySelector('.output').innerHTML = `<h4>${e.target.value}</h4>`
// }

// var input = document.querySelector('input[type="text"]');
// var select = document.getElementById('select');
// select.addEventListener('change', runEvent);
// input.addEventListener('keydown', runEvent);
// input.addEventListener('keyup', runEvent);
// input.addEventListener('keypress', runEvent);
// input.addEventListener('focus', runEvent);
// input.addEventListener('blur', runEvent);
// input.addEventListener('cut', runEvent);
// input.addEventListener('paste', runEvent);
// input.addEventListener('input', runEvent);

// var form = document.querySelector('.myForm');
// form.addEventListener('submit', runEvent);
