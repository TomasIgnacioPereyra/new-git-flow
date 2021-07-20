
const { GenerarTabla } = require("../Funciones/common.js");

console.log("Inicio tarea 4 \n");

const parametro = process.argv.filter((x, i) => i > 1 && x.indexOf("base") > -1)[0];

if (!parametro)
    throw new Error("Error al obtener el parametro");


const numero = parametro.split("=")[1];

const tabla = GenerarTabla(numero);

console.log(tabla);

console.log("Fin tarea 4")


