class TareasVista {
    constructor() {
        this.form = document.getElementById('formularioTareas');
        this.descripcion = document.getElementById('descripcion');
        this.tablaTareas = document.getElementById('tablaTareas');
        this.guardar = document.getElementById('guardar');
        this.inputDescripcion = document.getElementById('descripcion');
        this.descripcion.focus(); // Cuando se inicia la pagina pone el focus en la descripcion
    }
    
    renderTareas(tareas) {
        // Limpio la lista
        this.tablaTareas.innerHTML = '';
        tareas.forEach(element => {
            if (!element.eliminada) {
                if (element.estado === "sin hacer") {
                    // Si la tarea no está eliminada y su estado es "sin hacer"
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div id="${element.id}">
                            <span style="color: red">${element.descripcion}</span>
                            <span>${element.fecha.toLocaleString()}</span>
                            <button type="button" onclick ="tareas.eliminar()" data-id="${element.id}">Eliminar</button>
                            <button type="button" onclick = "tareas.actualizar()" data-id="${element.id}">Completada</button>
                        </div>
                    `; 
                    this.tablaTareas.appendChild(li);
                    } else {
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <div id="${element.id}">
                                <span style="color: green">${element.descripcion}</span>
                                <span>${element.fecha.toLocaleString()}</span>
                                <button type="button" onclick ="tareas.eliminar()" data-id="${element.id}">Eliminar</button>
                            </div>
                        `; 
                        this.tablaTareas.appendChild(li);
                    }
            }
           console.log(tareas);
        });
    }

    

}