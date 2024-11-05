import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Search } from '../components/Search/Search'

export class AbstractView {
    constructor() {
        this.app = document.getElementById('root')
    }

    setTitle(title) {
        document.title = title
    }
    render(){
        return this.app
    }
    destroy(){
        return
    }

    renderHeader() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
    renderFooter() {
        const footer = new Footer().render()
        const search = new Search(this.appState).render()
        footer.append(search)
        this.app.appendChild(footer)
    }
}