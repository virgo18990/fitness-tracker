const conn = require('./mysql_connection');

const loginmodel = {
    /*getAll(cb){
        conn.query("SELECT * FROM Profile", (err, data) => {
            cb(err, data);
        });    
    },*/
    /*get(id, cb){
        conn.query("SELECT * FROM Login WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },*/
    
    login(input, cb){
        console.log(input.Id);
        console.log(input.Password);
        console.log(input.Email);
        conn.query("SELECT * FROM Users WHERE Email=?", input.Email, (err, data) => {
            console.log(data[0].Password);
            if(data[0].Password === input.Password){                
                conn.query("UPDATE Users SET Last_Logged_In = ? WHERE Email = ?",[new Date,input.Email]);
                cb(err, data[0]);
            }else{
                cb(new Error("Wrong Password"));
            }
        });    
    }
};

module.exports = loginmodel;