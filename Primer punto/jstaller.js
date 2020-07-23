(function(){
	// Variables
	var btnagregar=document.getElementById("btn-agregar");
		lista=document.getElementById("lista")
		btneliminar=document.getElementById("btn-eliminar")
		tareaInput=document.getElementById("tareaInput")
	//funcion agregar tarea
	var agregarTarea=function(){
		var tarea=tareaInput.value,
			nuevaTarea=document.createElement("li"),
			enlace=document.createElement("a"),
			contenido=document.createTextNode(tarea);
			enlace.appendChild(contenido);
			enlace.setAttribute("href","#");
			nuevaTarea.appendChild(enlace);
			lista.appendChild(nuevaTarea);
			tareaInput.value="";
	};
	//funcion eliminar tarea
	var eliminarTarea=function(){
		lista.removeChild(lista.lastElementChild);	
		}
		
	;
	//eventos
	btnagregar.addEventListener("click",agregarTarea);
	btneliminar.addEventListener("click",eliminarTarea);
	
	//ciclo para elimar tareas
	for (let i = 0; i <=lista.children.length -1; i++) {
		lista.children[i].addEventListener("click",eliminarTarea);	
	}
}());