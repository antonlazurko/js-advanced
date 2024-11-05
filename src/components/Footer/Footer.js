import { CustomComponent } from '../../common/CustomComponent'

import './Footer.css'

export class Footer extends CustomComponent {
    constructor() {
        super('footer', 'footer')
    }
    template() {
        return `
        <div class="footer__container">
            <div class="footer__logo">
                <img src="/static/icons/logo.svg" alt="Logo" />
            </div>
            <nav class="footer__nav">
                <a href="#">Book Search</a>
                <a href="#favorites">Favorites</a>
                <a href="#services">Services</a>
                <a href="#contact">Contacts</a>
            </nav>
            <div class="footer__social">
                <a href="https://facebook.com" aria-label="Facebook">
                    <img src="/static/icons/facebook.png" alt="Facebook" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                    <img src="/static/icons/instagram.png" alt="Instagram" />
                </a>
                <a href="https://linkedin.com" aria-label="Linkedin">
                    <img src="/static/icons/linkedin.png" alt="Linkedin"/>
                </a>
            </div>
            <div class="footer__copyright">
                &copy; 2024 Anton Lazurko. All rights reserved.
            </div>
        </div>`
    }
}