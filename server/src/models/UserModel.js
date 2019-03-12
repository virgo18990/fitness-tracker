const conn = require('./mysql_connection');

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
        if(input.Password.length() < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO Users (FirstName,LastName,Birthday,Password,Created_At,Updated_At) VALUES (?)",
                    [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date(), new Date()]],
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
    }
};

module.exports = usermodel;