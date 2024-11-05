import { CustomComponent } from "../../common/CustomComponent";
import { Loader } from '../../common/UI/Loader/Loader'
import { BookCard } from "../BookCard/BookCard";

import './BookList.css'

export class BookList extends CustomComponent {
    constructor(appState, parentState) {
        super('div', 'book_list', appState)
        this.parentState = parentState
    }
    render() {
        const { loading, total, list } = this.parentState

        if (loading) {
            return new Loader().render()
        }
        const el = super.render()

        this.el.innerHTML = `<h2>Find ${total} books</h2>`

        const booksGrid = document.createElement('div')
        booksGrid.classList.add('books-grid')
        el.append(booksGrid)

        for (const book of list) {
            booksGrid.append(new BookCard(this.appState, book).render())
        }
        return el
    }

}