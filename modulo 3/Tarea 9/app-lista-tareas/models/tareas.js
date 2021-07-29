const Tarea = require("../../../Tarea 5/app-lista-tareas/models/tarea");

class Tareas {
    constructor() {
        this._listado={};

    }
    crearTarea(desc=""){
        const task = new Tarea(desc);
        this._listado[task.id]=task;
    }
    cargarTareas(tareas=[]){
        for(const tarea of tareas){
            const task = new Tarea(tarea.desc);
            task.id = tarea.id;
            task.completadoEn = tarea.completadoEn;

            this._listado[task.id] = task;
        }
    }
    get listadoArr(){
        const values = Object.values(this._listado);
        return values;
    }
}


module.exports = Tareas;