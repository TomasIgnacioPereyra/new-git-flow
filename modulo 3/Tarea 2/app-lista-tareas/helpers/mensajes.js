const colors = require("colors");




function mostrarMenu() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        console.log(
            `
        ===============================
             Seleccione una opción
        ===============================
        `.blue)

        console.log("¿Qué desea hacer?".bold)
        console.log("1.".blue.bold, "Crear tarea")
        console.log("2.".blue.bold, "Listar tareas")
        console.log("3.".blue.bold, "Listar tareas completadas")
        console.log("4.".blue.bold, "Listar tareas pendientes")
        console.log("5.".blue.bold, "Completar tarea(s)")
        console.log("6.".blue.bold, "Borrar tareas")
        console.log("0.".blue.bold, "Salir")


        rl.question("Seleccione una opción: ", (option) => {
            rl.close();
            console.log(option);
            if (isNaN(parseInt(option))) {
                reject("opcion invalido, tiene que ingresar un numero");
            }
            else if (option <= 6 && option >= 0) {
                resolve(option);
            } else {
                reject("opcion invalido, tiene que ser entre 0 y 6");
            }
        });
    });
}

function pausa() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Presione ENTER para continuar".blue, (_option) => {
            console.log("pausa", _option);
            rl.close();
            resolve();
        });
    });
};

module.exports = { mostrarMenu, pausa };