import { CustomComponent } from '../../common/CustomComponent'

import './Header.css'
export class Header extends CustomComponent {
    constructor(appState) {
        super('header', appState)
    }
    template() {
        const { favorites } = this.appState
        return `
        <div>
            <a href="/" class="nav__link"><img src="/static/icons/logo.svg" alt=''Logo/></a>
        </div>
        <nav class="nav">
            <a href="#search" class="nav__link">
                <img src="/static/icons/search.svg" alt=''Search icon/>
                Book Search
            </a>
            <a href="#favorites" class="nav__link">
                <img src="/static/icons/favorites.svg" alt=''Favorites icon/>
                Favorites
            </a>
            <div class="nav__count">${favorites.length}</div>
        </nav>`
    }
}