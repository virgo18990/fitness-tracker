const conn = require('./mysql_connection');

const workoutsbeginnermodel = {
    getAll(cb){
        conn.query("SELECT * FROM Workouts_Beginner", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Workouts_Beginner WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    }
      
};

module.exports = workoutsbeginnermodel;