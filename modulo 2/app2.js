
const fs = require('fs');

function ImprimirTabla(num = 0) {

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

const tabla5 = ImprimirTabla(5);

const fileName = "tabla.txt";

fs.writeFile(fileName, tabla5, (err) => {
    if (err)
        console.log(err);
    else {
        console.log(fs.readFileSync(fileName, "utf8"));
    }
});