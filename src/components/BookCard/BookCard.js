import { CustomComponent } from "../../common/CustomComponent";

import './BookCard.css'

export class BookCard extends CustomComponent {
    constructor(appState, cardState) {
        super('div', 'card', appState)
        this.cardState = cardState
    }
    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(({id}) => id !== this.cardState.id)
    }
    #addToFavorites() {
        this.appState.favorites.push(this.cardState)
    }
    render() {
        this.isExistInFavorites = this.appState.favorites.some(({id}) => id === this.cardState.id)
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
        const { imageLinks, categories = [], title, authors = [] } = this.cardState.volumeInfo

        return `
            <div class="card__image">
                <img src="${imageLinks?.smallThumbnail}" alt="Book cover"/>
            </div>
            <div class="card__info">
                <h4 class="card__tag">${categories.length ? categories[0] : 'N/A'}</h4>
                <h3 class="card__title">${title || 'N/A'}</h3>
                <p class="card__author">${authors.length ? authors[0] : 'N/A'}</p>
                <div class="card__btn-wrapper">
                    <button class="card__btn ${this.isExistInFavorites ? 'card__existed' : ''}">
                        <img src="/static/icons/${this.isExistInFavorites ? 'favorites' : 'favorites-white'}.svg" alt="Favorites icon" />
                    </button>
                </div>
            </div>
        `
    }

}