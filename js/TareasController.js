class TareasController {
    constructor() {
        this.tareasModel = new CRUDTareasModel();
        this.tareasView = new TareasVista();

        // Renderizar tareas al iniciar
        this.tareasView.renderTareas(this.tareasModel.getTareas());

        // Configurar eventos
        this.tareasView.guardar.addEventListener('click', () => this.guardarTarea());

        this.tareasView.descripcion.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("guardar").click();
            }
        });

        this.tareasView.tablaTareas.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const id = parseInt(event.target.parentElement.getAttribute('id')); // Lo he probado para hacerlo sin el data-id
                if (event.target.textContent === 'Eliminar') {
                    this.eliminarTarea(id);
                } else if (event.target.textContent === 'Completada') {
                    this.actualizarTarea(id);
                }
            }
        }
        );
    }

    guardarTarea() {
        const descripcion = this.tareasView.descripcion.value;
        if (descripcion) {
            this.tareasModel.setTarea(descripcion);
            this.tareasView.renderTareas(this.tareasModel.getTareas());
            this.tareasView.descripcion.value = ''; // Limpiar el campo de entrada
        }
    }

    eliminarTarea(id) {
        let encontrada = false;
        let index = 0;
        while(!encontrada) {
            if (this.tareasModel.lista[index].id === id) {
                this.tareasModel.lista[index].eliminada = true;
                encontrada = true;
            }
            index++;
        }
        this.tareasView.renderTareas(this.tareasModel.getTareas());
    }

    actualizarTarea(id) {
        this.tareasModel.updateTarea(id);
        this.tareasView.renderTareas(this.tareasModel.getTareas());
    }
}

// Preguntar a David por que no me funcionaba sin esto
// Inicializar la aplicación
function inicializar() {
    const controller = new TareasController();
}

// Llamar a inicializar al cargar la página
window.onload = inicializar;