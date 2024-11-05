import { CustomComponent } from '../common/CustomComponent'

export class Footer extends CustomComponent {
    constructor(appState) {
        super('footer', appState)
    }
    render() {
        this.el = document.createElement(this.elementType)
        this.el.innerHTML = ''
        this.el.classList.add(this.elementType)
        this.el.innerHTML = this.template()
        return this.el
    }
    template() {
        return `<h2>Footer</h2><img src="/static/icons/logo.svg" alt=''Logo/>`
    }
}