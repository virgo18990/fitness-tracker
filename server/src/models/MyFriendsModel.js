const conn = require('./mysql_connection');

const myfriendsmodel = {
    getAll(cb){
        conn.query("SELECT * FROM MyFriends", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM MyFriends WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    /*GetFriends(input, cb){
        console.log('Inside GetFriends');
        
        //conn.query("SELECT Request_To FROM MyFriends WHERE Request_From=? and Request_Status=?", input.name, 'Accepted', (err, data) => {
            conn.query("SELECT * FROM MyFriends WHERE Request_From=?",input.Request_From, (err, data) => {
        console.log(data);
            cb(err, data);
        });    
    },*/

    async GetFriends(input){
        console.log(input.Email);
        return await conn.query("select distinct u.FirstName, u.LastName from Users u inner join MyFriends m"
        +" on m.Request_From = u.Email where m.Request_Status ='Accepted' and m.Request_To=?"
        +" UNION"
        +" select distinct u.FirstName, u.LastName from Users u inner join MyFriends m"
        +" on m.Request_To = u.Email where m.Request_Status ='Accepted' and m.Request_From=?", [input.Email, input.Email]);
        
    },

    addfriends(input, cb){
     
        conn.query("SELECT * FROM Users WHERE Email=?",input.Request_To, (err, data) => {
            //If the searched friend exists in Users, send request and add a record in MyFriends table
            if(data.length !== 0)
            {               
                //Assuming that the user uses a search option to search a friend and then send request
                conn.query( "INSERT INTO MyFriends (Request_From,Request_To,Request_Created_At,Request_Updated_At,Request_Status) VALUES (?)",
                        [[input.Request_From, input.Request_To, new Date(), new Date(), 'New']],
                        (err, data) => {
                            if(err){
                                cb(err);
                                return;
                            }
                            myfriendsmodel.get(data.insertId, (err, data)=>{
                                //cb("Record Inserted");
                                cb(err, data);
                            })
                        }
                );
            }
            else{
               // cb(new Error("User Id Exists"));
               console.log('Record cannot be inserted');
            }
        });

    },
    acceptfriendrequest(input, cb){
       
        conn.query("UPDATE MyFriends SET Request_Status =?, Request_Updated_At=? WHERE Request_From=? AND Request_To=?",
        ['Accepted', new Date(), input.Request_From, input.Request_To], (err, data) => {       
                cb(err, data);           
        });  
  
      }
};

module.exports = myfriendsmodel;