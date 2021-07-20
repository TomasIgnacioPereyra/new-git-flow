const colors = require('colors');
const { GetTabla, CrearArchivoAsync } = require("../Funciones/common.js");

console.clear();

console.log("Inicio tarea 10".america);

const base = 2;

const title = colors.blue.underline.bold("Tabla del " + base);

console.log(`
====================================
######## ${title} ###############
====================================
`);

let tabla = GetTabla(base);

CrearArchivoAsync(tabla, `./Archivos/tabla-${base}.txt`).then(() => {
    tabla = tabla.trap.random;
    console.log(tabla);
    console.log("fin tarea 10".rainbow)
});



