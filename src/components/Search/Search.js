import { CustomComponent } from "../../common/CustomComponent";

import './Search.css'

export class Search extends CustomComponent {
    constructor(appState) {
        super('div', appState)
    }
    render() {
        const el = super.render()
        this.el.classList.add('search')
        return el
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