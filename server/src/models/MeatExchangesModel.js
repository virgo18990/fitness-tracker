const conn = require('./mysql_connection');

const meatexchangesmodel = {
    getAll(cb){
        conn.query("SELECT * FROM MeatExchanges", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM MeatExchanges WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    showMeatExchanges(input,cb)
    {
        conn.query("SELECT m.MeatType, m.Meat, m.Exchange, m.Level FROM MeatExchanges m inner join Profile p on m.Level=p.Level WHERE p.Email=?",input.Email, (err, data) => {
            if(data.length!==0){               
                    cb(err, data);
            }
            else{
                cb(new Error("Could not show meat exchanges. Try Again!"));
            }
        });
    }
      
};

module.exports = meatexchangesmodel;