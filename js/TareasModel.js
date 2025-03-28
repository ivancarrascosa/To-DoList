class CRUDTareasModel {
    constructor() {
        this.lista = [];
        this.contador = 1;
    }
    
    getTareas() {
        return this.lista;
    }

    getTarea(id) {
        let encontrado = false;
        let resultado = [];
        encontrado = this.buscaId(id)
        if (encontrado >= 0)
            resultado = this.lista[encontrado];
        return resultado;
    }

    setTarea(descripcion) {
        console.log(descripcion);
        let tarea = new Tarea(this.contador++, descripcion, new Date(), "sin hacer", false);
        this.lista.push(tarea);
    }

    removeTarea(id) {
        this.lista.forEach(element => {
            if (element.id === id) {
                this.lista.splice(this.lista.indexOf(element), 1);
            }
        });
    }

    removeAll() {
        this.lista.splice(0, this.lista.length);
    }

    updateTarea(id) {
        let encontrado = false;
        let index = 0;
        while (!encontrado) {
            if (this.lista[index].id === id) {
                this.lista[index].estado = "hecho";
                encontrado = true;
            }
            index++;
        }
    }
};

