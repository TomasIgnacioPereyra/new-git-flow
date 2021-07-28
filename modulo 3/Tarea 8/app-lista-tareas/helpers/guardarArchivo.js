const fs = require('fs')

const tableName = "tasks";

const guardarDB = (list = []) => {

    const json = JSON.stringify(list);
    fs.writeFileSync(`./db/${tableName}.json`, json);
};


module.exports = { guardarDB };