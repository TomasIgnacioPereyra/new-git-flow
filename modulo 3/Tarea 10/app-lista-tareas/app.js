const { mostrarMenu, pausa, leerInput } = require('./helpers/inquirer.js');
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
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt != '0');
};



main();