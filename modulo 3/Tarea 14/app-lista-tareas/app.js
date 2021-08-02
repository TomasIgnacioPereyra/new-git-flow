const { mostrarMenu, pausa,mostrarListadoChecklist, leerInput, listadoTareasBorrar, confirmar } = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');

console.clear();

const main = async () => {
    console.log("Hola mundo")
    const tareas = new Tareas();

    const tasksDB = leerDB();
    tareas.cargarTareasFromArray(tasksDB);

    let opt = '';
    do {
        opt = await mostrarMenu()
        switch (opt) {
            case 1:
                const txt = await leerInput("Descripción");
                tareas.crearTarea(txt);
                break;
            case 2:

                const list = tareas.listadoCompleto()
                for (const item of list) {
                    const done = item.done ? "Completada".green : "Pendiente".red;
                    const num = `${list.indexOf(item) + 1}`.green;
                    console.log(num, item.desc, "::", done);
                }

                break;
            case 3:
                const completadas = tareas.listarPendientesCompletadas();
                for (const item of completadas) {
                    const num = `${completadas.indexOf(item) + 1}`.green;
                    console.log(num, item.desc, "::", "Completada".green);
                }
                break;

            case 4:
                const pendientes = tareas.listarPendientesCompletadas(false);

                for (const item of pendientes) {
                    const num = `${pendientes.indexOf(item) + 1}`.green;
                    console.log(num, item.desc, "::", "Pendiente".red);
                }
                break;
            case 5:

                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                
                tareas.toggleCompletadas(ids);

                break;

            case 6:

                const cancelar = new Tarea("Cancelar");
                const tareasParaBorrar = [cancelar, ...tareas.listadoArr];
                const id = await listadoTareasBorrar(tareasParaBorrar);

                if (cancelar.id == id)
                    break;

                const eliminar = await confirmar("¿Está seguro?")

                if (eliminar) 
                    tareas.borrarTarea(id);
                
                break;


        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt != '0');
};



main();