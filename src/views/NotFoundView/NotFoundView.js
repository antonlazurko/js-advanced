import { AbstractView } from '../../common/AbstractView'

import './NotFoundView.css'

export class NotFoundView extends AbstractView {
    constructor(appState) {
        super()
        this.setTitle('Page not found')
        this.appState = appState
    }

    render() {
        const page = document.createElement('main')

        page.innerHTML = `
            <div class="not-found-logo">
                <span class="not-found-logo__number">4</span>
                <div class="not-found-logo__circle"></div>
                <span class="not-found-logo__number">4</span>
            </div>
            <p class="not-found-text">Page not found</p>

        `
        this.app.innerHTML = ''
        this.renderHeader()
        this.app.append(page)
        this.renderFooter()
    }
}