const conn = require('./mysql_connection');

const profilemodel = {
   
    async getAll(){
        return await conn.query("SELECT * FROM Profile");   
    },

    async get(id){
        return await conn.query("SELECT * FROM Profile WHERE Id=?", id);    
    },

    async add(input){
        /*console.log('Inside add function');
        console.log({input: input});
        console.log(input.data.Age);
        console.log(input.email);*/
        const data = await conn.query("SELECT * FROM Profile WHERE Email=?",input.email);
        console.log({data: data});

        //Update only if Profile already exists else create or insert a new Profile
        if(data.length !== 0){
            const x = await conn.query("UPDATE Profile SET Age =?,Weight=?,Height=?,Gender=?,Updated_At=?,MealType=?,Level=?,Address=? WHERE Email=?",
            [input.data.Age, input.data.Weight, input.data.Height, input.data.Gender, new Date(),input.data.MealType, input.data.Level, input.data.Address, input.email]);

            return { status: "success", msg: "Profile updated successfully!" };
        }else {
            const x = await conn.query("INSERT INTO Profile (Age,Weight,Height,Gender,Email,Created_At,Updated_At, MealType,Level,Address) VALUES (?)",
            [[input.data.Age, input.data.Weight, input.data.Height, input.data.Gender, input.email, new Date(), new Date(),input.data.MealType, input.data.Level, input.data.Address]]);

            return { status: "success", msg: "Profile created successfully!" };
        }
    }
    
};

module.exports = profilemodel;