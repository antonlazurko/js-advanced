import onChange from 'on-change'

import { AbstractView } from '../../common/AbstractView'
import { Search } from '../../components/Search/Search'
import { BookList } from '../../components/BookList/BookList'

import { getBooks } from '../../services/getBooks'

import { setFavoritesToStorage } from '../../utils'

export class MainView extends AbstractView {

    state = {
        list: [],
        total: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState) {
        super()
        this.appState = appState
        this.appState = onChange(this.appState, this.useAppState.bind(this))
        this.state = onChange(this.state, this.useState.bind(this))
        this.setTitle('Books Search')
    }
    destroy() {
        onChange.unsubscribe(this.appState)
        onChange.unsubscribe(this.state)
    }

    useAppState(path) {
        if (path === 'favorites') {
            setFavoritesToStorage(this.appState)
            this.render();
        }
    }

    async useState(path) {

        if (path === 'searchQuery') {
            this.state.loading = true
            const { docs, numFound } = await getBooks(this.state.searchQuery, this.state.offset)

            this.state.loading = false
            this.state.list = docs
            this.state.total = numFound
        }
        if (path === 'loading' || path === 'list' || path === 'total') {
            this.render()
        }
    }

    render() {
        console.log(this.state.total);

        const main = document.createElement('main')

        main.innerHTML = `<h1>Books Search</h1>`

        const search = new Search(this.state).render()
        main.append(search)
        if (this.state.total) {
            main.innerHTML += `<p>${this.state.total} books found</p>`
        }
        const bookList = new BookList(this.appState, this.state).render()
        main.append(bookList)
        this.app.innerHTML = ''

        this.renderHeader()
        this.app.append(main)
        this.renderFooter()
    }
}