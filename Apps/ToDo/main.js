const fetchTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        output.innerHTML += '<div class="card">' +
            '<span class="todo-text">' + todos[i] + '</span>' +
            '<button class="delete" onclick="deleteTodo(\'' + todos[i] + '\')">x</button>' +
            '</div>'
    }
}

const deleteTodo = (text) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
        if (todos[i] === text)
            todos.splice(i, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    fetchTodos();
}

const addTodo = e => {
    e.preventDefault();
    const text = document.querySelector('.add').value;

    if (text == "") {
        alert('Input the text before adding');
        return false;
    }

    if (localStorage.getItem('todos') === null) {
        let todos = [];
        todos.push(text);
        localStorage.setItem('todos', JSON.stringify(todos));
    } else {
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(text);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    fetchTodos();
    document.getElementById('myForm').reset();
}

document.getElementById('myForm').addEventListener('submit', addTodo);