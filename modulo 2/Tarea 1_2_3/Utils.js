const fs = require('fs').promises;

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
    CrearArchivoAsync,
    LeerArchivoAsync
}