const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { GenerarTabla } = require("../Funciones/common.js");

const arguments= yargs(hideBin(process.argv)).argv;
const { base } = arguments

console.log(arguments);

console.log("Inicio tarea 6")

if (base) {
    console.log(GenerarTabla(base));
} else {
    console.error("No se especifico el parametro base")
}

console.log("Fin tarea 6")
