const { GetTabla, CrearArchivo } = require("./Utils.js")

const tablas5 = GetTabla(5);

CrearArchivo(tablas5)
    .then(() => console.log("To2 salio bien!!!"))
    .catch(err => console.error(err));
