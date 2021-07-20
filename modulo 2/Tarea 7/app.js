console.clear();

const { GenerarTabla } = require("../Funciones/common.js")
console.log("Inicion tarea 7")

const argv = require('yargs')
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true
    }).option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: false,
        default: false
    }).check((argv, options) => {
        const { listar, base } = argv;

        if (isNaN(base)) {
            throw "La base tiene que ser un numero";
        }
        else if (base < 1 || base > 20) {
            throw "Debes colocar un valor de base entre 1 y 20";
        } else {
            const tabla = GenerarTabla(base);
            if (listar)
                console.log(tabla);

        }
        return true;
    }).argv;


console.log("Fin tarea 7")
