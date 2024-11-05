export class CustomComponent {
    constructor(elementType, appState) {
        this.elementType = elementType
        this.appState = appState
    }
    render() {
        this.el = document.createElement(this.elementType)
        this.el.innerHTML = ''
        this.el.classList.add(this.elementType)
        this.el.innerHTML = this.template()
        return this.el
    }
    template() {
        return ''
    }
}