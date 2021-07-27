const colors = require("colors");
var inquirer = require('inquirer');

async function mostrarMenu() {
    console.clear()
    console.log(
        `
        ===============================
             Seleccione una opción
        ===============================
        `.blue)

    console.log("¿Qué desea hacer?".bold)

    var prompt = inquirer.createPromptModule();
    const preguntas = [
        `${"1.".blue.bold} Crear tarea`,
        `${"2.".blue.bold} Listar tareas`,
        `${"3.".blue.bold} Listar tareas completadas`,
        `${"4.".blue.bold} Listar tareas pendientes`,
        `${"5.".blue.bold} Completar tarea(s)`,
        `${"6.".blue.bold} Borrar tareas`,
        `${"0.".blue.bold} Salir`
    ];
    const question = {
        type: "list",
        name: "Lista Tareas",
        choices: preguntas
    };



    const response = await prompt(question);

    console.log(response);

    return response;
}

async function pausa() {
    var prompt = inquirer.createPromptModule();
    const question = {
        type: "input",
        name: "Presione ENTER para continuar".blue
    };

    const response = await prompt(question);
    console.log(response);
};

module.exports = { mostrarMenu, pausa };