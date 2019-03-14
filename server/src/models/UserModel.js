const conn = require('./mysql_connection');

const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const usermodel = {
    getAll(cb){
        conn.query("SELECT * FROM Users", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Users WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    /*login(email, password, cb){
        conn.query("SELECT * FROM Users WHERE Id=?", email, (err, data) => {
            if(hash(data.Password) == hash(password)){
                cb(err, data[0]);
            }else{
                cb(new Error("Wrong Password"));
            }
        });    
    },*/
    add(input, cb){
      
        const SALT_FACTOR = 8;
       
        //Adding for hashing password
        
        const password = input.Password;

        var salt = bcrypt.genSaltSync(SALT_FACTOR);
        var hash = bcrypt.hashSync(password, salt);
        

        conn.query("SELECT * FROM Users WHERE Email=?",input.Email, (err, data) => {
            if(data.length === 0)
            {               
                conn.query( "INSERT INTO Users (FirstName,LastName,Birthday,Password,Email,Created_At,Updated_At) VALUES (?)",
                        [[input.FirstName, input.LastName, input.Birthday, hash,input.Email, new Date(), new Date()]],
                        (err, data) => {
                            if(err){
                                cb(err);
                                return;
                            }
                            usermodel.get(data.insertId, (err, data)=>{
                                //cb("Record Inserted");
                                cb(err, data);
                            })
                        }
                );
            }
            else{
                cb(new Error("User Id Exists"));
            }
        });

    }
};

module.exports = usermodel;