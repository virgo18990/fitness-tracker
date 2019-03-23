const conn = require('./mysql_connection');

const workoutsadvancedmodel = {
    getAll(cb){
        conn.query("SELECT * FROM Workouts_Advanced", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Workouts_Advanced WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    }
      
};

module.exports = workoutsadvancedmodel;