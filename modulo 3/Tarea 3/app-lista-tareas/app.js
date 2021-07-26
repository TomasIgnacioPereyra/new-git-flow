const { mostrarMenu, pausa } = require('./helpers/mensajes.js');
console.clear();

const main = async () => {
    console.log("Hola mundo")

    let opt = '';
    do {
        opt = await mostrarMenu()
        await pausa();
    } while (opt !== '0');
};



main();