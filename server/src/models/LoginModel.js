const conn = require('./mysql_connection');

const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

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
        //console.log(input.Id);
        console.log(input.Password);
        console.log(input.Email);

        const SALT_FACTOR = 8;
        const password = input.Password;
        //Adding for hashing password

        const salt = bcrypt.genSaltSync(SALT_FACTOR);
        const hash = bcrypt.hashSync(password, salt);

        conn.query("SELECT * FROM Users WHERE Email=?", input.Email, (err, data) => {

        
            console.log(data[0].Password);   
            console.log(hash);
            //if(data[0].Password === hash){    
            if(bcrypt.compareSync(data[0].Password, hash, salt)){             
                conn.query("UPDATE Users SET Last_Logged_In = ? WHERE Email = ?",[new Date,input.Email]);
                cb(err, data[0]);
            }else{
                cb(new Error("Wrong Password"));
            }
        });    
    }
};

module.exports = loginmodel;