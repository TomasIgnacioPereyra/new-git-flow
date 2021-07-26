const colors = require("colors");


function mostrarMenu() {

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
}

module.exports = mostrarMenu;