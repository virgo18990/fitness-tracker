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
    },
    showWorkoutByBodyPart(input,cb)
    {
        conn.query("SELECT bg.WorkoutType, bg.WorkoutSubType, bg.WorkoutName, bg.Reps, bg.Sets FROM Workouts_Advanced bg inner join Workouts_BodyParts bp on bg.WorkoutSubType = bp.WorkoutSubType WHERE BodyPart=?",input.BodyPart, (err, data) => {
            if(data.length!==0){               
                    cb(err, data);
            }
            else{
                cb(new Error("Could not show workouts. Try Again!"));
            }
        });
    }
      
};

module.exports = workoutsadvancedmodel;