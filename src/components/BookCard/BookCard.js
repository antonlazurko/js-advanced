import { CustomComponent } from "../../common/CustomComponent";

import './BookCard.css'

export class BookCard extends CustomComponent {
    constructor(appState, cardState) {
        super('div', 'card', appState)
        this.cardState = cardState
    }
    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(({cover_edition_key}) => cover_edition_key !== this.cardState.cover_edition_key)
    }
    #addToFavorites() {
        this.appState.favorites.push(this.cardState)
    }
    render() {
        this.isExistInFavorites = this.appState.favorites.some(({cover_edition_key}) => cover_edition_key === this.cardState.cover_edition_key)
        const el = super.render()

        const btn = el.querySelector('.card__btn')
        btn.addEventListener('click', () => {
            if (this.isExistInFavorites) {
                this.#deleteFromFavorites()
            } else {
                this.#addToFavorites()
            }
        })
        return el
    }
    template() {
        const { cover_edition_key, subject, title, author_name = [] } = this.cardState

        const imgSrc = `https://covers.openlibrary.org/b/olid/${ cover_edition_key }-M.jpg`

        return `
            <div class="card__image">
                <img src="${imgSrc}" alt="Book cover"/>
            </div>
            <div class="card__info">
                <h4 class="card__tag">${subject || 'N/A'}</h4>
                <h3 class="card__title">${title || 'N/A'}</h3>
                <p class="card__author">${author_name.length ? author_name[0] : 'N/A'}</p>
                <div class="card__btn-wrapper">
                    <button class="card__btn ${this.isExistInFavorites ? 'card__existed' : ''}">
                        <img src="/static/icons/${this.isExistInFavorites ? 'favorites' : 'favorites-white'}.svg" alt="Favorites icon" />
                    </button>
                </div>
            </div>
        `
    }

}