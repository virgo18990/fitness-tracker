const conn = require('./mysql_connection');

const vegetableexchangesmodel = {
    getAll(cb){
        conn.query("SELECT * FROM VegetableExchanges", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM VegetableExchanges WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    }
      
};

module.exports = vegetableexchangesmodel;