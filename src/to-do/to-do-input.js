import { LitElement, html } from 'lit-element';  

class ToDoInput extends LitElement {    
	
	static get properties() {
                return {
                        tarea: {type: String}
                };
        }


        constructor() {
                // Always calls super() first.
                super();
                this.tarea='';
        }
	
	// Properties code up here	   
	render() {

	return html`
		<div>
			<input type="text" value="${this.tarea}" @input="${this.updateTarea}" placeholder="Ingrese una tarea"/>
			<input type="button" value='Agregar' @click="${this.agregarTarea}" />
		</div>
		`;
	}

	updateTarea(e)
	{
		this.tarea=e.target.value;
	}

	agregarTarea()
	{
		this.dispatchEvent(new CustomEvent('agregar-tarea',{detail:{'tarea':this.tarea}}));		
	}

}

customElements.define('to-do-input', ToDoInput)
