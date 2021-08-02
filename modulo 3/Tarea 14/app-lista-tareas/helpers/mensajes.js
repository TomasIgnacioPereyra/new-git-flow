const colors = require("colors");
var inquirer = require('inquirer');

async function mostrarMenu() {
    console.clear()
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
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
        type:"list",
        name:"Lista Tareas",
        choices:preguntas
    };

  

    const response = await prompt(question);

    console.log(response);
    
    return response;
}

function pausa() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question("Presione ENTER para continuar".blue, (_option) => {
            rl.close();
            resolve();
        });
    });
};

module.exports = { mostrarMenu, pausa };