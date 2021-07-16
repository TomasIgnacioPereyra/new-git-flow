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
const fileName = "tabla.txt";

const CrearArchivoAsync = async (texto = "") => {
    try {
        await fs.writeFile(fileName, texto);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
const LeerArchivoAsync = async () => {
    try {
        return await fs.readFile(fileName, "utf8");
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    GetTabla,
    CrearArchivoAsync,
    LeerArchivoAsync
}