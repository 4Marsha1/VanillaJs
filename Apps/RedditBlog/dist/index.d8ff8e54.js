const form = document.getElementById('form');
const search = document.getElementById('search');
const relevance = document.getElementById('relevance');
const latest = document.getElementById('latest');
const limit = document.getElementById('limit');
const showMessage = (message, type)=>{
    const parent = document.querySelector('.parent');
    const span = document.createElement('span');
    span.id = 'message';
    span.style.display = 'block';
    span.style.backgroundColor = type === 'error' ? 'red' : 'green';
    span.append(message);
    setTimeout(()=>{
        document.getElementById('message').remove();
    }, 3000);
    parent.insertBefore(span, form);
};
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = search.value;
    const sortby = relevance.value === true ? relevance.value : latest.value;
    const limitP = limit.value;
    if (text === '') {
        const message = 'Please type in a search term';
        showMessage(message, 'error');
    }
    search.value = '';
});

//# sourceMappingURL=index.d8ff8e54.js.map
