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
        this.el.classList.add('book_list')
        this.el.innerHTML = `<h1>Find ${total} books</h1>`
        for (const book of list) {
            this.el.append(new BookCard(this.appState, book).render())
        }
        return el
    }

}