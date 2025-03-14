class TareasVista {
    constructor() {
        this.form = document.getElementById('formularioTareas');
        this.descripcion = document.getElementById('descripcion');
        this.tablaTareas = document.getElementById('tablaTareas');
        this.guardar = document.getElementById('guardar');
    }

    renderTareas(tareas) {
        this.tablaTareas.innerHTML = '';
        tareas.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div id="${element.id}">
                    <span>${element.descripcion}</span>
                    <span>${element.fecha}</span>
                    <span>${element.estado}</span>
                    <button type="button" onclick ="tareas.eliminar()">Eliminar</button>
                    <button type="button" onclick = "tareas.actualizar()">Actualizar</button>
                </div>
            `; 
        });
    }
}