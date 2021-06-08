import { LitElement, html, css } from 'lit-element';  
import './to-do-task.js';

class ToDo extends LitElement {    
	
	//Bind
	static get properties() {		
		return {
			title:{type:String},			
			tareas:{type:Array}
		};
	}	

	static get styles()	
	{
		return css `

			ul{list-style-type:none;
			padding: 0;}
		`;
	}

	
	constructor() {
		// Always calls super() first.
		super();

		this.title="";
		this.tareas=[];
	}

	// Properties code up here	   
	render() {
	
	return html`
		<div>
			<h3>${this.title}</h3>
			<ul>
			${this.tareas.sort(function(a,b){return a.prioridad-b.prioridad;}).map(
				function(tarea)
				{
					return html `<to-do-task id="${tarea.id}" tarea="${tarea.text}" prioridad="${tarea.prioridad}" ></to-do-task>`;
				}
			)}
			</ul>
		</div>
		`;
	}

}

customElements.define('to-do', ToDo);

