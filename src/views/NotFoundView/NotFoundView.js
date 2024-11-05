import { AbstractView } from '../../common/AbstractView'

export class NotFoundView extends AbstractView {
    constructor() {
        super()
        this.setTitle('Page not found')
    }

    render() {
        const page = document.createElement('main')

        page.innerHTML = `
            <h1>Page not found</h1>        `
        this.app.innerHTML = ''
        this.app.append(page)
        this.renderHeader()
        this.renderFooter()
    }
}