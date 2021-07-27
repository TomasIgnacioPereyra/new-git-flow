const { mostrarMenu, pausa } = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

console.clear();

const main = async () => {
    console.log("Hola mundo")

    const tarea1 = new Tarea("Comprar azucar");
    const tarea2 = new Tarea("Comprar galletas");

    tarea2.completadoEn= new Date();

    const tareas = new Tareas();

    tareas[tarea1.id] = tarea1;
    tareas[tarea2.id] = tarea2;

    console.log(tareas);

};



main();