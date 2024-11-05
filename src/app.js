'use strict'
import { MainView } from './views/MainView/MainView.js'
import './app.css'
import { NotFoundView } from './views/NotFoundView/NotFoundView.js'

class App {
    routesMap = new Map([
        ['', MainView]
    ])
    appState = {
        favorites: []
    }
    constructor() {
        window.addEventListener('hashchange',this.route.bind(this))
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