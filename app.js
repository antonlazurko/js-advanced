'use strict'

const Book = function (title, author) {
    this.title = title
    this.author = author
}
const book1 = new Book('title1', 'author1')
Book.prototype.isRead = false
console.log(book1)
console.log(book1.hasOwnProperty('title'))
console.log(book1.hasOwnProperty('isRead'))//false
console.log(Book.prototype.__proto__)