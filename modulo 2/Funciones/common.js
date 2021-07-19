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

module.exports = {
    GetTabla
};