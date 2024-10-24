'use strict'

class Book {
    isRead = false
    constructor(title, author){
        this.title = title
        this.author = author
    }
    read(){
        this.isRead = true
    }
}
const book = new Book('title', 'author')

console.log(book instanceof Book);
