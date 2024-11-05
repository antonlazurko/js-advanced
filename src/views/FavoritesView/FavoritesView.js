import onChange from 'on-change'

import { AbstractView } from '../../common/AbstractView'
import { BookCard } from '../../components/BookCard/BookCard'

import { setFavoritesToStorage } from '../../utils'

export class FavoritesView extends AbstractView {

    constructor(appState) {
        super()
        this.appState = appState
        this.appState = onChange(this.appState, this.useAppState.bind(this))
        this.setTitle('Favorites')
    }
    destroy() {
        onChange.unsubscribe(this.appState)
    }

    useAppState(path) {
        if (path === 'favorites') {
            setFavoritesToStorage(this.appState)
            this.render();
        }
    }
    render() {
        const favorites = this.appState.favorites
        const main = document.createElement('main')
        main.innerHTML = `
            <h1>Favorite books</h1>        `
        const booksGrid = document.createElement('div')
        booksGrid.classList.add('books-grid')
        main.append(booksGrid)

        for (const book of favorites) {
            booksGrid.append(new BookCard(this.appState, book).render())
        }

        this.app.innerHTML = ''

        this.renderHeader()
        this.app.append(main)
        this.renderFooter()
    }
}