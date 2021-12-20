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
}

// Defining Sub Class 

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month
    }
}

// Instantiating an object of class Magazine
const mag1 = new Magazine('Mag 1', 'Jane Doe', '2018', 'Jan')

console.log(mag1, mag1.getSummary());