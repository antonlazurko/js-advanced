import { Wrapper } from '../../common/Wrapper'
import { Header } from '../../components/Header/Header'
import { AbstractView } from '../../common/AbstractView'

export class NotFoundView extends AbstractView {
    constructor() {
        super()
        this.setTitle('Page not found')
    }

    render() {
        const page = new Wrapper().render()

        page.innerHTML = `
            <h1>Page not found</h1>        `
        this.app.innerHTML = ''
        this.app.append(page)
        this.renderHeader()
    }
    renderHeader() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
}