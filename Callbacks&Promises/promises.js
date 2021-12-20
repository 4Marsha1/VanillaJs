const posts = [
    { title: 'Post 1', body: 'This is post 1' },
    { title: 'Post 2', body: 'This is post 2' }
]

const getPosts = () => {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title} : ${post.body}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

const createPost = post => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = true
            if (!error) {
                resolve();
            } else {
                reject('Error: something is wrong');
            }
        }, 2000)
    })
}

// createPost({ title: 'Post 3', body: 'This is post 3' })
//     .then(getPosts)
//     .catch(err => console.log(err))

// --------------------------- Async / Await --------------------------

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

// --------------------------- Promise.all ----------------------------

// const Promise1 = Promise.resolve('Hello World')
// const Promise2 = 10
// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'GoodBye')
// })
// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([Promise1, Promise2, Promise3, Promise4]).then(values => console.log(values))