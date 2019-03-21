const conn = require('./mysql_connection');

const fruitexchangesmodel = {
    getAll(cb){
        conn.query("SELECT * FROM FruitExchanges", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM FruitExchanges WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    }
      
};

module.exports = fruitexchangesmodel;