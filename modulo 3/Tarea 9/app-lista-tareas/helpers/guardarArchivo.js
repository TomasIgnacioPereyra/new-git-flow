const fs = require('fs')

const path = "./db/tasks.json";

const guardarDB = (list = []) => {

    const json = JSON.stringify(list);
    fs.writeFileSync(path, json);
};

const leerDB = () => {

    if (!fs.existsSync(path))
        return [];

    const json = fs.readFileSync(path, { encoding: 'utf-8' });
    const tasks = JSON.parse(json);

    return tasks instanceof Array ? tasks : [];
};


module.exports = { guardarDB, leerDB };