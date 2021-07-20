const colors = require('colors');
const { GenerarTabla } = require("../Funciones/common.js");


console.log("Inicio tarea 5".bgRed);

const num = 7;

console.log(`Tabla del ${num}`.bgRed);

const tabla = GenerarTabla(num);
console.log(tabla)

