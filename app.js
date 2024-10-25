'use strict'

const Book = function (title, author) {
    this.title = title
    this.author = author
}

Book.prototype.getSummary = function () {
    console.log(`${this.title} was written by ${this.author}`);

}

const AudioBook = function (title, author, length) {
    Book.call(this, title, author)
    this.length = length
}
AudioBook.prototype = Object.create(Book.prototype)
AudioBook.prototype.constructor = AudioBook
AudioBook.prototype.log = function () {
    console.log(`${this.title} is ${this.length} minutes long`);
}
const book = new AudioBook('The Hobbit', 'J.R.R. Tolkien', 295)
book.log()

book.getSummary()
console.log(book);
console.log(book instanceof AudioBook);
console.log(book instanceof Book);
