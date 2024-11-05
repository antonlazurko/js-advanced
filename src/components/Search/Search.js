import { CustomComponent } from "../../common/CustomComponent";

import './Search.css'

export class Search extends CustomComponent {
    constructor(appState) {
        super('div', appState)
    }
    render() {
        const el = super.render()
        this.el.classList.add('search')
        this.el.querySelector('button').addEventListener('click', this.search.bind(this))
        this.el.querySelector('input').addEventListener('keydown', ({code}) => {
            if (code === 'Enter') {
                this.search()
            }
        })
        return el
    }
    search() {
        const query = this.el.querySelector('input').value
        this.appState.searchQuery = query
    }
    template() {
        return `
            <div class="search__wrapper">
                <input
                type="text"
                placeholder="Search book or author..."
                class="search__input"
                value="${this.appState.searchQuery ?? ''}">
                <img class="search__img" src="/static/icons/search.svg" alt="Search icon"/>
            </div>
            <button class="search__btn" aria-label="Search">
                <img src="/static/icons/search-white.svg" alt="Search icon"/>
            </button>
        `
    }

}