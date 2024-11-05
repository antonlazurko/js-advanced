import onChange from 'on-change'

import { AbstractView } from '../../common/AbstractView'

export class MainView extends AbstractView {

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState) {
        super()
        this.appState = appState
        this.appState = onChange(this.appState, this.useAppState.bind(this))
        this.setTitle('Books Search')
    }

    useAppState(path) {
        if (path === 'favorites') {
            console.log(path);
        }
    }
    render() {
        const main = document.createElement('main')
        main.innerHTML = `
            <h1>Books Search</h1>
            <p>Welcome to Books Library App</p>
            <p>Favorite books count: ${this.appState.favorites.length}</p>
        `
        this.app.innerHTML = ''
        this.renderHeader()
        this.app.append(main)
        this.renderFooter()
    }
}