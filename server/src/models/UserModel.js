const conn = require('./mysql_connection');

const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
//const bcrypt = require('bcrypt-nodejs');

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

    },

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
            
                if(bcrypt.compareSync(input.Password, data[0].Password)){      
                    
                conn.query("UPDATE Users SET Last_Logged_In = ? WHERE Email = ?",[new Date(),input.Email]);
                cb(err, data[0]);
            }else{
                cb(new Error("Wrong Password"));
            }
        });    
    },

    changePassword(input,cb)
    {
        const SALT_FACTOR = 8;
        const password = input.Password;

        var salt = bcrypt.genSaltSync(SALT_FACTOR);
        var hash = bcrypt.hashSync(password, salt);
        conn.query("SELECT * FROM Users WHERE Email=?",input.Email, (err, data) => {
            if(data.length!==0){
                conn.query("UPDATE Users SET Password=?, Updated_At=? WHERE Email=?",[hash,new Date(), input.Email]);
                cb(err, data[0]);
            }
            else{
                cb(new Error("Could not change password. Try Again!"));
            }
        });
    },

    editUserDetails(input,cb)
    {
        conn.query("SELECT * FROM Users WHERE Email=?",input.Email, (err, data) => {
            if(data.length!==0){
                conn.query("UPDATE Users SET FirstName=?, LastName=?, Birthday=?, Updated_At=? WHERE Email=?",
                [input.FirstName,input.LastName, input.Birthday, new Date(), input.Email]);
                cb(err, data[0]);
            }
            else{
                cb(new Error("Could not edit details. Try Again!"));
            }
        });
    }
};

module.exports = usermodel;