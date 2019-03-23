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
    },
    showWorkoutByBodyPart(input,cb)
    {
        conn.query("SELECT bg.WorkoutType, bg.WorkoutSubType, bg.WorkoutName, bg.Reps, bg.Sets FROM Workouts_Beginner bg inner join Workouts_BodyParts bp on bg.WorkoutSubType = bp.WorkoutSubType WHERE BodyPart=?",input.BodyPart, (err, data) => {
            if(data.length!==0){               
                    cb(err, data);
            }
            else{
                cb(new Error("Could not show workouts. Try Again!"));
            }
        });
    }
      
};

module.exports = workoutsbeginnermodel;