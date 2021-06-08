import { LitElement, html, css } from 'lit-element';  

class HeaderApp extends LitElement {   

	static get properties() {
		return {
			  	
		};
	} 

	
	static get styles() {
    		return css`
      			div{
				overflow: hidden;
				background-color: #f1f1f1;
				padding: 20px 10px;
			}`
  	}


	constructor() {
	// Always calls super() first.
	super();
		
	}	


	render() {
		return html`
			<div>TO DO APP</div>
		`;
	}

}  

customElements.define('header-app', HeaderApp); 
