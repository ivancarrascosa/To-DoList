class TareasController {
    constructor() {
        this.tareasModel = new TareasModel();

        this.tareasView = new TareasVista();

        // Que se pongan las tareas en la vista cuando se inice la página
        this.tareasView.renderTareas(this.tareasModel.lista);
    }

    guardarTareas() {
        tareasView.guardar.addEventListener('click', () => {
        tareasModel.setTarea(tareasView.descripcion.value);
        tareasView.renderTareas(tareasModel.lista);
    })};

    eliminar() {
        this.parentNode.parentNode.remove();
    }

    tareasActualizar() {
        let idTarea = this.parentNode.id();
        tareasModel.updateTarea(idTarea);
        tareasView.renderTareas(tareas);
    }
}