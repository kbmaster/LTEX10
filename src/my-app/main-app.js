import { LitElement, html, css } from 'lit-element';  
import '../to-do/to-do.js';

class MainApp extends LitElement {   

	static get properties() {
		return {
		};
	}

	static get styles()
	{
		return css `
			div
			{
				text-align:center;
			}
		`;
	}

	constructor() {
	// Always calls super() first.
	super();

	}	


	render() {
		return html`
			<div class='main'>
				<to-do title='Lista de tareas' 
				tareas='[{"id":123456,"text":"Tarea 1","prioridad":3},
					 {"id":125674,"text":"Tarea 2","prioridad":2},
					 {"id":126789,"text":"Tarea 3","prioridad":1}]'></to-do>
			</div>
		`;
	}

}  

customElements.define('main-app', MainApp); 
