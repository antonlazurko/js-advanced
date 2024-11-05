'use strict'
import { MainView } from './views/MainView/MainView.js'
import { FavoritesView } from './views/FavoritesView/FavoritesView.js'
import './app.css'
import { NotFoundView } from './views/NotFoundView/NotFoundView.js'
import { getFavoritesFromStorageAndSet } from "./utils.js";

class App {
    routesMap = new Map([
        ['', MainView],
        ['favorites', FavoritesView]
    ])
    appState = {
        favorites: []
    }
    constructor() {
        window.addEventListener('hashchange',this.route.bind(this))
        getFavoritesFromStorageAndSet(this.appState)
        this.route()

    }
    route(){
        if (this.currentView) {
            this.currentView.destroy()
        }
        const currentPath = window.location.hash.slice(1)

        const view = this.routesMap.get(currentPath) || NotFoundView

        this.currentView = new view(this.appState)

        this.currentView.render()
    }
}

new App()