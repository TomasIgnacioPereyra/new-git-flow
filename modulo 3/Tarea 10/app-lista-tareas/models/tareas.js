const Tarea = require("../../../Tarea 5/app-lista-tareas/models/tarea");

class Tareas {
    constructor() {
        this._listado = {};

    }
    crearTarea(desc = "") {
        const task = new Tarea(desc);
        this._listado[task.id] = task;
    }
    cargarTareasFromArray(tareas = []) {
        for (const tarea of tareas) {
            this._listado[tarea.id] = tarea;
        }
    }
    get listadoArr() {
        const values = Object.values(this._listado);
        return values;
    }

    listadoCompleto() {
        const list = this.listadoArr.map(x => {
            return { desc: x.desc, done: !!x.completadoEn };
        });

        const hechas = list.filter(x => x.done).sort();
        const pendientes = list.filter(x => !x.done).sort();

        return hechas.concat(pendientes);
    }
}


module.exports = Tareas;