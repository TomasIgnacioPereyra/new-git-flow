const colors = require('colors');
const { GetTabla } = require("../Funciones/common.js");


console.log("Inicio tarea 5".bgRed);

const num = 7;

console.log(`Tabla del ${num}`.bgRed);

const tabla = GetTabla(num);
console.log(tabla)

