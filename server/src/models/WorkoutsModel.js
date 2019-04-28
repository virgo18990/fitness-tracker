const conn = require('./mysql_connection');

const workoutsmodel = {

    async getworkouttype(input){
        
        console.log({input:input});
        const data = await conn.query("SELECT Level FROM Profile WHERE Email=?",input.Email);
        console.log({data: data});

        if(data.Level==='Weight Loss')
        {
            const x = await conn.query("SELECT distinct b.WorkoutType from Workouts_Beginner b inner join Workouts_BodyParts bp"
            +" on b.WorkoutSubType = bp.WorkoutSubType"
            +" where bp.BodyPart = ?", input.BodyPart);
            return x;
        }
        else if(data.Level==='Build Muscle')
        {
            const x = await conn.query("SELECT distinct b.WorkoutType from Workouts_Intermediate b inner join Workouts_BodyParts bp"
            +" on b.WorkoutSubType = bp.WorkoutSubType"
            +" where bp.BodyPart = ?", input.BodyPart);
            return x;
        }
        else
        {
            const x = await conn.query("SELECT distinct b.WorkoutType from Workouts_Advanced b inner join Workouts_BodyParts bp"
            +" on b.WorkoutSubType = bp.WorkoutSubType"
            +" where bp.BodyPart = ?", input.BodyPart);
            return x;
        }
       
    },

    async getworkoutsubtype(input){
        console.log({input:input});
        const data = await conn.query("SELECT Level FROM Profile WHERE Email=?",input.Email);
        console.log({data: data});

        if(data.Level==='Weight Loss')
        {
            const x = await conn.query("SELECT distinct WorkoutSubType from Workouts_Beginner WHERE WorkoutType=?", input.WorkoutType);
            return x;
        }
        else if(data.Level==='Build Muscle')
        {
            const x = await conn.query("SELECT distinct WorkoutSubType from Workouts_Intermediate WHERE WorkoutType=?", input.WorkoutType);
            return x;
        }
        else
        {
            const x = await conn.query("SELECT distinct WorkoutSubType from Workouts_Advanced  WHERE WorkoutType=?", input.WorkoutType);
            return x;
        }
    },

    async getworkoutname(input){
        console.log({input:input});
        const data = await conn.query("SELECT Level FROM Profile WHERE Email=?",input.Email);
        console.log({data: data});

        if(data.Level==='Weight Loss')
        {
            const x = await conn.query("SELECT distinct WorkoutName from Workouts_Beginner WHERE WorkoutType=? and WorkoutSubType=?", [input.WorkoutType, input.WorkoutSubType]);
            return x;
        }
        else if(data.Level==='Build Muscle')
        {
            const x = await conn.query("SELECT distinct WorkoutName from Workouts_Intermediate WHERE WorkoutType=? and WorkoutSubType=?", [input.WorkoutType, input.WorkoutSubType]);
            return x;
        }
        else
        {
            const x = await conn.query("SELECT distinct WorkoutName from Workouts_Advanced  WHERE WorkoutType=? and WorkoutSubType=?", [input.WorkoutType, input.WorkoutSubType]);
            return x;
        }
    },

    async getsetsreps(input){
        console.log({getsetsreps:input});
        const data = await conn.query("SELECT Level FROM Profile WHERE Email=?",input.Email);
        console.log({data: data});

        if(data.Level==='Weight Loss')
        {
            const x = await conn.query("SELECT distinct Reps, Sets from Workouts_Beginner WHERE WorkoutName=?", input.WorkoutName);
            return x;
        }
        else if(data.Level==='Build Muscle')
        {
            const x = await conn.query("SELECT distinct Reps, Sets  from Workouts_Intermediate WHERE WorkoutName=?", input.WorkoutName);
            return x;
        }
        else
        {
            const x = await conn.query("SELECT distinct Reps, Sets from Workouts_Advanced  WHERE WorkoutName=?", input.WorkoutName);
            return x;
        }
    }
};

module.exports = workoutsmodel;