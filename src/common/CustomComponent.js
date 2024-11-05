export class CustomComponent {
    constructor(elementType, className, appState) {
        this.elementType = elementType
        this.appState = appState
        this.className = className
    }
    render() {
        this.el = document.createElement(this.elementType)
        this.el.innerHTML = ''
        this.el.classList.add(this.className)
        this.el.innerHTML = this.template()
        return this.el
    }
    template() {
        return ''
    }
}