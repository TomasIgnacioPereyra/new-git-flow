const Tarea = require("../../../Tarea 5/app-lista-tareas/models/tarea");

class Tareas {
    constructor() {
        this._listado={};
    }
    crearTarea(desc=""){
        const task = new Tarea(desc);
        this._listado[task.id]=task;
    }
}


module.exports = Tareas;