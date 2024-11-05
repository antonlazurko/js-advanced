import { AbstractView } from '../../common/AbstractView'

export class NotFoundView extends AbstractView {
    constructor(appState) {
        super()
        this.setTitle('Page not found')
        this.appState = appState
    }

    render() {
        const page = document.createElement('main')

        page.innerHTML = `
            <h1>Page not found</h1>        `
        this.app.innerHTML = ''
        this.renderHeader()
        this.app.append(page)
        this.renderFooter()
    }
}