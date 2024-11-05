export class Header {
    constructor(appState) {
        this.appState = appState

    }
    render() {
        this.el = document.createElement('header')
        this.el.innerHTML = ''
        this.el.classList.add('header')
        this.el.innerHTML = `<img src="/static/icons/logo.svg" alt=''Logo/>`
        return this.el
    }
}