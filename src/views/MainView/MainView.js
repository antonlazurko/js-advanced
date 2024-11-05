import onChange from 'on-change'

import { AbstractView } from '../../common/AbstractView'
import { Search } from '../../components/Search/Search'
import { BookList } from '../../components/BookList/BookList'

import { getBooks } from '../../services/getBooks'

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

    useAppState(path) {
        if (path === 'favorites') {
            this.render();
        }
    }
    async useState(path) {
        if (path === 'searchQuery') {
            this.state.loading = true
            const data = await getBooks(this.state.searchQuery, this.state.offset)
            this.state.loading = false
            this.state.list = data.docs
            this.state.total = data.numFound
        }
        if (path === 'loading' || path === 'list') {
            this.render()
        }
    }

    render() {

        const main = document.createElement('main')
        main.innerHTML = `
            <h1>Books Search</h1>
            <p>Welcome to Books Library App</p>
            <p>Favorite books count: ${this.appState.favorites.length}</p>
        `

        const search = new Search(this.state).render()
        main.append(search)
        const bookList = new BookList(this.appState, this.state).render()
        main.append(bookList)
        this.app.innerHTML = ''

        this.renderHeader()
        this.app.append(main)
        this.renderFooter()
    }
}