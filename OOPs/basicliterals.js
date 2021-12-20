const book = {
    title: 'Book One',
    author: 'John DOe',
    year: '2012',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book.getSummary())
console.log(Object.values(book))
console.log(Object.keys(book))