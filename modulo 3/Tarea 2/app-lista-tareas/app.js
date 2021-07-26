const { mostrarMenu, pausa } = require('./helpers/mensajes.js');
console.clear();

const main = async () => {
    let option = 1

    while (option != 0) {
        option = await mostrarMenu();
        await pausa();
    }

};



main();