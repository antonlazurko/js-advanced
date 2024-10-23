'use strict'

const Book = function (title, author){
    this.title = title
    this.author = author
    this.isRead = false
    // this.read = function () {
    //     this.isRead = true
    // }
}
Book.prototype.read = function () {
    this.isRead = true
}
Book.prototype.cover = 'paper'
const book = new Book('book', 'Joe Doe')
const book2 = new Book('book2', 'Joe Doe jr')
console.log(book);
console.log(book.hasOwnProperty('cover'));
book.cover = 'paper2'
console.log(book.hasOwnProperty('cover'));
console.log(book.__proto__);
console.log(book.__proto__ === Book.prototype);
book.read()
console.log(book instanceof Book);
console.log(Book.prototype.isPrototypeOf(Book));
console.log(Book.prototype.isPrototypeOf(book));
Array.prototype.first = function () {
    return this[0]
}

