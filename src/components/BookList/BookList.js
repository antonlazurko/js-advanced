import { CustomComponent } from "../../common/CustomComponent";
import { Loader } from '../../common/UI/Loader/Loader'

import './BookList.css'

export class BookList extends CustomComponent {
    constructor(appState, parentState) {
        super('div', 'book_list', appState)
        this.parentState = parentState
    }
    render() {

        if (this.parentState.loading) {
            return new Loader().render()
        }
        const el = super.render()
        this.el.classList.add('book_list')
        this.el.innerHTML = `<h1>Find ${this.parentState.list.length} books</h1>`
        return el
    }

}