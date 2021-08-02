const colors = require("colors");
var inquirer = require('inquirer');

async function mostrarMenu() {
    // console.clear()
    console.log(
        `
        ===============================
             Seleccione una opción
        ===============================
        `.blue)

    console.log("¿Qué desea hacer?".bold)

    var prompt = inquirer.createPromptModule();
    const preguntas = [
        { name: `${"1.".blue.bold} Crear tarea`, value: 1 },
        { name: `${"2.".blue.bold} Listar tareas`, value: 2 },
        { name: `${"3.".blue.bold} Listar tareas completadas`, value: 3 },
        { name: `${"4.".blue.bold} Listar tareas pendientes`, value: 4 },
        { name: `${"5.".blue.bold} Completar tarea(s)`, value: 5 },
        { name: `${"6.".blue.bold} Borrar tareas`, value: 6 },
        { name: `${"0.".blue.bold} Salir`, value: 0 }
    ];
    const nameList = "Lista Tareas";
    const question = {
        type: "list",
        name: nameList,
        choices: preguntas
    };



    const response = await prompt(question);

    return response[nameList];
}

async function pausa() {
    var prompt = inquirer.createPromptModule();
    const question = {
        type: "input",
        name: "pausa",
        message: "Presione ENTER para continuar".blue
    };

    const response = await prompt(question);
    console.log(response);
};
async function mostrarListadoChecklist(tareas = []) {
    var prompt = inquirer.createPromptModule();

    const preguntas = tareas.map(({ id, desc,completadoEn }, posicion) => {
        return {
            name: `${posicion.toString().green}. ${desc.bold}`,
            value: id,
            checked: completadoEn !== null
        };
    });
    const nameList = "Selecciones";
    const question = {
        type: "checkbox",
        name: nameList,
        checked: true,
        choices: preguntas
    };
    const response = await prompt(question);
    return response[nameList];
}
async function listadoTareasBorrar(tareas = []) {
    var prompt = inquirer.createPromptModule();

    const preguntas = tareas.map(({ id, desc }, posicion) => {
        return {
            name: `${posicion.toString().green}. ${desc.bold}`,
            value: id
        };
    });
    const nameList = "Borrar";
    const question = {
        type: "list",
        name: nameList,
        choices: preguntas
    };
    const response = await prompt(question);
    return response[nameList];
}
async function confirmar(message = "") {
    const prompt = inquirer.createPromptModule();
    const question = {
        type: "confirm",
        name: "ok",
        message
    };
    const response = await prompt(question);

    return response.ok;
}

async function leerInput(message = "") {
    const question = [{
        type: "input",
        name: "desc",
        message,
        validate(value) {
            if (value.length === 0) {
                return "Por favor ingrese un valor"
            }
            return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = { mostrarMenu, pausa, leerInput, listadoTareasBorrar, confirmar,mostrarListadoChecklist };