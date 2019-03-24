const conn = require('./mysql_connection');

const workoutvideosmodel = {
    getAll(cb){
        conn.query("SELECT * FROM WorkoutVideos", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM WorkoutVideos WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    showVideoByWorkout(input,cb)
    {
        conn.query("SELECT * FROM WorkoutVideos WHERE WorkoutName=?",input.WorkoutName, (err, data) => {
            if(data.length!==0){               
                    cb(err, data);
            }
            else{
                cb(new Error("Could not show videos. Try Again!"));
            }
        });
    }
      
};

module.exports = workoutvideosmodel;