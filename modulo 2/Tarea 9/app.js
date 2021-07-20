const colors = require('colors');
const { GetTabla } = require("../Funciones/common.js");

console.clear();

console.log("Inicio tarea 9".america);

const num = 7;

const title = colors.blue.underline.bold("Tabla del " + num);

console.log(`
====================================
######## ${title} ###############
====================================
`);

const tabla = GetTabla(num).trap.random;
console.log(tabla);


console.log("fin tarea 9".rainbow)
