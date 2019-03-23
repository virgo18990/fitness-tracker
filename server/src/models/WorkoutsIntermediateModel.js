const conn = require('./mysql_connection');

const workoutsintermediatemodel = {
    getAll(cb){
        conn.query("SELECT * FROM Workouts_Intermediate", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Workouts_Intermediate WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    }
      
};

module.exports = workoutsintermediatemodel;