import { CustomComponent } from "../../CustomComponent";

import './Loader.css'

export class Loader extends CustomComponent {
    constructor() {
        super('div')
    }
    render() {
        const el = super.render()
        this.el.setAttribute('role', 'status')
        this.el.setAttribute('aria-live', 'polite')
        this.el.classList.add('loader-wrapper')
        return el
    }
    template() {
        return `<div class="loader" role="status" aria-live="polite">
            <span class="sr-only">Loading...</span>
        </div>`
    }

}