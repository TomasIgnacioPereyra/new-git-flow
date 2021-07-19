console.clear();

const { GetTabla } = require("../Funciones/common.js")

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
    }).argv;

const { base, listar } = argv;

console.log("Inicion tarea 7")

if (isNaN(base)) {
    console.log("La base tiene que ser un numero");
}
else if (base < 1 || base > 20) {
    console.log("Debes colocar un valor de base entre 1 y 20");
} else if (listar) {
    const tabla = GetTabla(base);
    console.log(tabla);
}

console.log("Fin tarea 7")
