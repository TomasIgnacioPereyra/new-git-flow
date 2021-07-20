const fs = require('fs').promises;

const GetTabla = (num = 0) => {

    ValidarNumero(num);

    num = parseInt(num);
    const limit = 10;
    let template = "";
    for (let i = 1; i <= limit; i++) {
        template += `${num} x ${i} = ${i * num} \n`;
    }
    return template;
}

function ValidarNumero(numero) {

    const result = parseFloat(numero);

    if (isNaN(result)) {
        throw new Error("La funcion espera un numero")
    }
}
let fileName = "tabla-x.txt";
const CrearArchivoAsync = (texto = "",filename="") => {
    return fs.writeFile(filename || fileName, texto);
};
const GenerarTabla = (num=0) => {

    const tabla = GetTabla(num);
    fileName = fileName.replace("x", num);
    CrearArchivoAsync(tabla);

    return tabla;
};
module.exports = {
    GetTabla,
    GenerarTabla,
    CrearArchivoAsync
};