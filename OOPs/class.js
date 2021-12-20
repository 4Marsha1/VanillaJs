// Defining Class 

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    // Don't require instantiation
    // can be called directly through className
    static getTopBooks() {
        return 'Penguin Books'
    }
}

// Instantiation of object of class Book
const book1 = new Book('Book one', 'John Doe', '2013')
console.log(book1.getSummary());

// calling static function :-------> className.functionName()
console.log(Book.getTopBooks());