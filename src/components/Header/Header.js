import { Wrapper } from '../../common/Wrapper'

export class Header extends Wrapper {
    constructor(appState) {
        super()
        this.appState =appState
    }
    render() {
        this.el.innerHTML = ''
        this.el.classList.add('header')
        this.el.innerHTML = `
            <header>
                <img src="/static/icons/logo.svg" alt=''Logo/>
            </header>
        `
        return this.el
    }
}