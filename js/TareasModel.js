class TareasModel {
    
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
        let obj = {
            id: this.contador++,
            descripcion: descripcion,
            fecha: new Date(),
            estado: "sin hacer",
        }
        this.lista.push(obj);
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
        this.lista.forEach(element => {
            if (element.id === id) {
                element.estado = "hecho";
            }
        });
    }

}
