const {CrearArchivoAsync, LeerArchivoAsync } = require("./Utils.js");
const {GetTabla} = require("../Funciones/common.js");
 
const tablaDel5 = GetTabla(5);

CrearArchivoAsync(tablaDel5)
    .then(() => console.log("To2 salio bien!!!"))
    .catch(err => console.error(err));

LeerArchivoAsync()
    .then(x => console.log(x))
    .catch(err => console.error(err));