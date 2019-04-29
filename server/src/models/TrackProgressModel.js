const conn = require('./mysql_connection');

const trackprogressmodel = {

    async recordprogress(input){
        console.log({input:input});
        const bodypart = await conn.query("select distinct BodyPart from saxenap1_db.Workouts_BodyParts"
        +" where WorkoutSubType=?", input.data.WorkoutSubType);

        console.log({data:bodypart[0].BodyPart});

        const x = await conn.query("INSERT INTO TrackProgress (Email, BodyPart, WorkoutType, WorkoutSubType, WorkoutName, Sets, Reps, YourSets, YourReps, Progress, Created_At, Updated_At) VALUES (?)",
            [[input.Email, bodypart[0].BodyPart, input.data.WorkoutType, input.data.WorkoutSubType, input.data.WorkoutName, input.sets, input.reps, input.data.YourSets, input.data.YourReps, 'In Progress', new Date(), new Date()]]);

            return { status: "success", msg: "Progress Recorded!" };

        
    }
};

module.exports = trackprogressmodel;
        