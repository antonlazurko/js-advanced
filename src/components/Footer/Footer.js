export class Footer {
    render() {
        this.el = document.createElement('footer')
        this.el.innerHTML = ''
        this.el.classList.add('footer')
        this.el.innerHTML = `<h2>Footer</h2>
        <img src="/static/icons/logo.svg" alt=''Logo/>`
        return this.el
    }
}