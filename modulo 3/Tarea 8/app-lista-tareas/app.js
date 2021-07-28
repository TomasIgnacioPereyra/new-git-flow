const { mostrarMenu, pausa,leerInput } = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');
const {guardarDB} = require('./helpers/guardarArchivo.js');

console.clear();

const main = async () => {
    console.log("Hola mundo")
    const tareas = new Tareas();
    let opt = '';
    do {
        opt = await mostrarMenu()


        switch (opt) {
            case 1:
            const txt = await leerInput("Descripción");
            tareas.crearTarea(txt);
                break;
            case 2:
                console.log(tareas.listadoArr);
                break;
        }
        
        guardarDB(tareas.listadoArr);

        await pausa();
    } while (opt !== '0');

};



main();