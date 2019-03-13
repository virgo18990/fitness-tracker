const conn = require('./mysql_connection');

const loginmodel = {
    /*getAll(cb){
        conn.query("SELECT * FROM Profile", (err, data) => {
            cb(err, data);
        });    
    },*/
    get(id, cb){
        conn.query("SELECT * FROM Login WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        /*if(input.Password.length() < 8){
            cb(Error('A longer Password is Required'));
            return;
        }*/
        
        //If login id does not exist in Login table and User is present in Users table means a registered user, then insert a new record 
        conn.query( "INSERT INTO Login (UserId, Password, Last_Logged_In) VALUES (?)",
                    [[input.UserId, input.Password, new Date()]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertId, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );    

        //Else if login id already exist, update the Last_Logged_In time as now()
    }
};

module.exports = loginmodel;