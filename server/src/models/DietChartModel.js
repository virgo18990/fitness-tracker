const conn = require('./mysql_connection');

const dietchartmodel = {
    getAll(cb){
        conn.query("SELECT * FROM DietChart", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM DietChart WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    showMealPlan(input,cb)
    {
        conn.query("SELECT d.Level, d.MealType, d.Day, d.Breakfast, d.Snack1, d.Lunch, d.Dinner, d.Snack3 FROM DietChart d inner join Profile p on d.Level = p.Level and d.MealType = p.MealType WHERE p.Email=?",input.Email, (err, data) => {
            if(data.length!==0){               
                    cb(err, data);
            }
            else{
                cb(new Error("Could not show meal plan. Try Again!"));
            }
        });
    }
      
};

module.exports = dietchartmodel;