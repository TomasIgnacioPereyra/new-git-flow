

function ImprimirTabla(num = 0) {

    ValidarNumero(num);

    num = parseInt(num);
    const limit = 10;

    for (let i = 1; i <= limit; i++) {
        const template = `${num} x ${i} = ${i * num}`;
        console.log(template);
    }
}
function ValidarNumero(numero) {

    const result = parseFloat(numero);

    if (isNaN(result)) {
        throw new Error("La funcion espera un numero")
    }
}



ImprimirTabla(5);