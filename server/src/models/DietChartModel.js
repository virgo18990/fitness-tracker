const conn = require('./mysql_connection');

const dietchartmodel = {

    async getAll(){
        return await conn.query("SELECT * FROM DietChart");   
    },


    async get(id){
        return await conn.query("SELECT * FROM DietChart WHERE Id=?", id);    
    },

    async showMealPlan(input)
    {
        const data = await conn.query("SELECT Level, MealType FROM Profile WHERE Email=?", input.Email);

        return await conn.query("SELECT d.Level, d.MealType, d.Day, d.Breakfast, d.Snack1, d.Lunch, d.Snack2, d.Dinner, d.Snack3 FROM"
        +" DietChart d"
        +" WHERE d.Level=? and d.MealType=? and d.Day=?", [data[0].Level, data[0].MealType, input.Day]);
    },

    async getDays(input){
        console.log('Inside getDays');
        return await conn.query("SELECT distinct Day from DietChart");
    }
      
};

module.exports = dietchartmodel;