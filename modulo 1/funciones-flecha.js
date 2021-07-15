const Restar = (a, b) => a - b;

const Sumar = (a, b) => a + b;

const Multiplicar = (a, b) => a * b;

const Dividir = (a, b) => a / b;

const EsPrimo = numero => {

    if (numero < 3)
        return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0)
            return false;
    }

    return true;
}

