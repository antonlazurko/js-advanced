import { CustomComponent } from '../../common/CustomComponent'

export class Footer extends CustomComponent {
    constructor(appState) {
        super('footer', 'footer', appState)
    }
    template() {
        return `<h2>Footer</h2>`
    }
}