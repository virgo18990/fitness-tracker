const conn = require('./mysql_connection');

const workoutvideosmodel = {
    getAll(cb){
        conn.query("SELECT * FROM WorkoutVideosComments", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM WorkoutVideosComments WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    postComments(input,cb)
    {
        conn.query("SELECT WorkoutName, VideoId FROM WorkoutVideos WHERE VideoLink=?",input.VideoLink, (err, data) => {
            
            if(data.length!==0){            
                
                conn.query( "INSERT INTO WorkoutVideosComments (WorkoutName, VideoId, Comment, CommentedBy, Commented_At) VALUES (?)",
                    [[data[0].WorkoutName, data[0].VideoId, input.Comment, input.Email, new Date()]]); 
                
                cb(err, data);
            }
            else{
                cb(new Error("Could not post your comments. Try Again!"));
            }
        });
    }
      
};

module.exports = workoutvideosmodel;