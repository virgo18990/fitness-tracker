const conn = require('./mysql_connection');

const profilemodel = {
    getAll(cb){
        conn.query("SELECT * FROM Profile", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Profile WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        /*if(input.Password.length() < 8){
            cb(Error('A longer Password is Required'));
            return;
        }*/
        conn.query( "INSERT INTO Profile (Age,Weight,Height,Gender,UserId,Created_At,Updated_At) VALUES (?)",
                    [[input.Age, input.Weight, input.Height, input.Gender, input.UserId, new Date(), new Date()]],
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

module.exports = profilemodel;