'use strict'
import { MainView } from './views/MainView/MainView.js'
import './app.css'
import { NotFoundView } from './views/NotFoundView/NotFoundView.js'

class App {
    routes = [
        { path: '', view: MainView }
    ]
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
        const view = this.routes.find(({path}) => path === window.location.hash.slice(1))?.view || NotFoundView

        this.currentView = new view(this.appState)

        this.currentView.render()
    }
}

new App()