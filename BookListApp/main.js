// Book Class : Creates a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class : display / add / remove 
class UI {
    static displayBooks() {
        const storedBooks = Store.getBooks();
        const books = storedBooks;
        books.forEach(book => UI.addBookToList(book));
    }

    static showMsg(message, color) {
        var msg = document.querySelector('.msg');
        msg.textContent = message;
        msg.style.backgroundColor = color;
        msg.style.display = 'block';
        setTimeout(() => {
            msg.style.display = 'none';
            msg.textContent = '';
        }, 3000);
    }

    static addBookToList(book) {
        var itemList = document.querySelector('.items');
        var newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.innerHTML = (`<span>${book.title}</span>
                <span>${book.author}</span>
                <span>${book.isbn}</span>
                <button class="delete-btn">X</button>`);
        itemList.appendChild(newItem);
    }

    static deleteBook(e) {
        e.preventDefault();
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        };
    }

    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('book').value = '';
    }
}

// Store Class : handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') == null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event : display book list
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : add book
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('book').value;

    if (title === '' || author === '' || isbn === '') {
        UI.showMsg('Fields Empty!', 'red');
    }
    else {
        const newBook = new Book(title, author, isbn);
        UI.addBookToList(newBook);
        Store.addBook(newBook);
        UI.clearFields();
        UI.showMsg('Book Added!', 'green');
    }
});

// Event : remove book
var items = document.querySelector('.items');
items.addEventListener('click', (e) => {
    e.preventDefault();
    UI.deleteBook(e);
    Store.deleteBook(e.target.previousElementSibling.textContent)
    UI.showMsg('Book Deleted!', 'green');
    UI.clearFields();
});