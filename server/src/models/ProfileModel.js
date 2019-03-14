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
       
        conn.query("SELECT * FROM Profile WHERE Email=?", input.Email, (err, data) => {
            //Update only if Profile already exists else create or insert a new Profile
            if(data.length !== 0){
                conn.query( "UPDATE Profile SET Age =?,Weight=?,Height=?,Gender=?,Updated_At=? WHERE Email=?",
                [input.Age, input.Weight, input.Height, input.Gender, new Date(),input.Email]);
                cb(err, data[0]);
                
            }
            else {
                conn.query( "INSERT INTO Profile (Age,Weight,Height,Gender,Email,Created_At,Updated_At) VALUES (?)",
                    [[input.Age, input.Weight, input.Height, input.Gender, input.Email, new Date(), new Date()]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        profilemodel.get(data.insertId, (err, data)=>{
                            cb(err, data);
                        })
                    }
                ); 
            }
        });

    }
    
};

module.exports = profilemodel;