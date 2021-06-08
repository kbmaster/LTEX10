import { LitElement, html } from 'lit-element';  
import './header-app.js';
import './main-app.js';
import './footer-app.js';

class MyApp extends LitElement {   

	static get properties() {
		return {
		};
	}

	constructor() {
	// Always calls super() first.
	super();

	}	


	render() {
		return html`
			<header-app></header-app>
			<main-app></main-app>
			<footer-app></footer-app>
		`;
	}

}  

customElements.define('my-app', MyApp); 
