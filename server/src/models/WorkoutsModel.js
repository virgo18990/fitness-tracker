const conn = require('./mysql_connection');

const workoutsmodel = {

    async getworkouttype(input){
        
        const data = await conn.query("SELECT Level FROM Profile WHERE Email=?",input.Email);
        console.log({data: data});

        if(data.Level==='Weight Loss')
        {
            const x = await conn.query("SELECT distinct WorkoutType from Workouts_Beginner");
            return x;
        }
        else if(data.Level==='Build Muscle')
        {
            const x = await conn.query("SELECT distinct WorkoutType from Workouts_Intermediate");
            return x;
        }
        else
        {
            const x = await conn.query("SELECT distinct WorkoutType from Workouts_Advanced");
            return x;
        }
        //return { status: "success", msg: "Workout Type Retrieved" };

        
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
    }
};

module.exports = workoutsmodel;