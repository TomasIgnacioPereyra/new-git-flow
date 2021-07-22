const colors = require("colors");
const contratarJugador = (contratado = false) => {

    return new Promise((resolve, reject) => {

        if (contratado) {
            resolve('El jugador se incorpora al equipo')
        } else {
            reject('El jugador y el equipo no llegaron a un acuerdo')
        }
    });
};

console.clear();

const thenMensaje = texto => console.log("Mensaje:", texto);
const catchMensaje = texto => console.log(texto.underline.red);

contratarJugador()
    .then(thenMensaje)
    .catch(catchMensaje);


contratarJugador(true)
    .then(thenMensaje)
    .catch(catchMensaje);