const conn = require('./mysql_connection');

const trackprogressmodel = {

    async recordprogress(input){
        console.log({input:input});
        const bodypart = await conn.query("select distinct BodyPart from saxenap1_db.Workouts_BodyParts"
        +" where WorkoutSubType=?", input.data.WorkoutSubType);

        const yoursets=parseInt(input.data.YourSets,10);
        console.log({YourSets: yoursets});

        /*Calculating Progress Percentage by dividing ((number of performed sets)*(number of performed reps) BY
          (number of expected sets)*(number of expected reps)) * 100  */

        // YourSets and YourReps are entered by the user AND Sets and Reps are expected number

        const progress = ((Number(input.data.YourSets) * Number(input.data.YourReps))/(Number(input.sets) * Number(input.reps)))*100;

        const x = await conn.query("INSERT INTO TrackProgress (Email, BodyPart, WorkoutType, WorkoutSubType, WorkoutName, Sets, Reps, YourSets, YourReps, Progress, ShareProgress, Created_At, Updated_At ) VALUES (?)",
            [[input.Email, bodypart[0].BodyPart, input.data.WorkoutType, input.data.WorkoutSubType, input.data.WorkoutName, input.sets, input.reps, input.data.YourSets, input.data.YourReps, progress, input.data.ShareProgress, new Date(), new Date()]]);

            return { status: "success", msg: "Progress Recorded!" };

        
    },

    async trackprogress(input){
        return await conn.query("SELECT distinct BodyPart, WorkoutType, WorkoutSubType, WorkoutName, Sets, Reps, YourSets, YourReps, Progress"
        +" FROM TrackProgress WHERE Email=?", input.Email);
    },

    async getsharedactivities(input){
        return await conn.query("SELECT distinct BodyPart, WorkoutType, WorkoutSubType, WorkoutName, Sets, Reps, YourSets, YourReps, Progress"
        +" FROM TrackProgress WHERE Email=? and ShareProgress='Yes'", input.Email);
    }
};

module.exports = trackprogressmodel;
        