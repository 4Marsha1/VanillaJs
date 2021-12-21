const fetchTxt = () => {
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = `<h3>${data}</h3>`
        })
        .catch(err => console.log(err))
}

const fetchJson = () => {
    fetch('sample.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Users</h2>'
            data.forEach(person => {
                output += `
                            <ul>
                                <li>ID: ${person.id}</li>
                                <li>Name: ${person.name}</li>
                                <li>Email: ${person.email}</li>
                            </ul>
                        `
            })
            document.getElementById('output').innerHTML = output
        })
}

const fetchAPIData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Posts</h2>'
            data.forEach(post => {
                output += `
                            <div class="post">
                                <span class="title">${post.title}</span>
                                <span class="body">${post.body}</span>
                            </div
                        `
            })
            document.getElementById('output').innerHTML = `<div class="posts">${output}</div>`
        })
}

const addPost = e => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

document.querySelector('.getText').addEventListener('click', fetchTxt)
document.querySelector('.getJson').addEventListener('click', fetchJson)
document.querySelector('.getAPI').addEventListener('click', fetchAPIData)
document.getElementById('form').addEventListener('submit', addPost)
