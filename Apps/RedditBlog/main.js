import reddit from './redditAPI'

const form = document.getElementById('form');
const search = document.getElementById('search');
const relevance = document.getElementById('relevance');
const latest = document.getElementById('latest');
const limit = document.getElementById('limit');

const showMessage = (message, type) => {

    const parent = document.querySelector('.parent');
    const span = document.createElement('span');
    span.id = 'message';
    span.style.display = 'block';
    span.style.backgroundColor = type === 'error' ? 'red' : 'green'
    span.append(message);
    setTimeout(() => {
        document.getElementById('message').remove()
    }, 3000);
    parent.insertBefore(span, form);
}

const truncate = (text, limit) => {
    const short = text.indexOf(' ', limit);
    if (short == -1) return text;
    return text.substring(0, short);
}

const addItemsToDom = data => {
    let output = '<div class="cards">';
    console.log(data);
    data.forEach(post => {
        let image = post.preview ? post.preview.images[0].source.url :
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxerG98mMVg4j7gbrC8avlWHwwGERn8RPuA5N4iSzm70Cpa6Oi-2_ZctyTyaN5VUfDjhs&usqp=CAU'
        output += `
            <div class="card">
            <img class="img" src="${image}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncate(post.selftext, 100)}</p>
                <a href="${post.url}" target="_blank" class="btn-read-more">Read More </a>
                <div>
                <span class="sub">Subreddit: ${post.subreddit}</span>
                <span class="score">Score: ${post.score}</span>
                </div>
            </div>
            </div>
        `
    })
    output += '</div';
    document.getElementById('output').innerHTML = output;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = search.value;
    const sortby = relevance.value === true ? relevance.value : latest.value;
    const limitP = limit.value;

    if (text === '') {
        const message = 'Please type in a search term';
        showMessage(message, 'error');
        return;
    }
    search.value = '';
    reddit.search(text, limitP, sortby)
        .then(data => addItemsToDom(data));
})