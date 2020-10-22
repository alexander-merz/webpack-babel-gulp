export default class MyComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.innerHTML = '<h1>Webpack-Babel-Gulp</h1>';
    }

}