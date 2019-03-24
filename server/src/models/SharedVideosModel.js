const conn = require('./mysql_connection');

const workoutvideosmodel = {
    getAll(cb){
        conn.query("SELECT * FROM SharedVideos", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM SharedVideos WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    share(input,cb)
    {
        conn.query("SELECT WorkoutName, VideoId FROM WorkoutVideos WHERE VideoLink=?",input.VideoLink, (err, data) => {
            
            if(data.length!==0){            
                
                conn.query( "INSERT INTO SharedVideos (WorkoutName, VideoId, VideoLink, SharedBy, SharedTo, Shared_At) VALUES (?)",
                    [[data[0].WorkoutName, data[0].VideoId, input.VideoLink, input.Email, input.SharedTo, new Date()]]); 
                
                cb(err, data);
            }
            else{
                cb(new Error("Could not share your video. Try Again!"));
            }
        });
    }
      
};

module.exports = workoutvideosmodel;