const conn = require('./mysql_connection');

const myfriendsmodel = {
    
    async getAll(){
        return await conn.query("SELECT * FROM MyFriends");   
    },

    async get(id){
        return await conn.query("SELECT * FROM MyFriends WHERE Id=?", id);    
    },

    async GetFriends(input){
        console.log(input.Email);
        //This query fetches the accepted requests sent by user and also received by user; hence using UNION
        return await conn.query("select distinct u.FirstName, u.LastName from Users u inner join MyFriends m"
        +" on m.Request_From = u.Email where m.Request_Status ='Accepted' and m.Request_To=?"
        +" UNION"
        +" select distinct u.FirstName, u.LastName from Users u inner join MyFriends m"
        +" on m.Request_To = u.Email where m.Request_Status ='Accepted' and m.Request_From=?", [input.Email, input.Email]);
        
    },

    async addfriends(input){

        const data = await conn.query("SELECT * FROM Users WHERE Email=?",input.Request_To);

         //If the searched friend exists in Users, send request and add a record in MyFriends table
         if(data.length !== 0){
             const x = await conn.query("INSERT INTO MyFriends (Request_From,Request_To,Request_Created_At,Request_Updated_At,Request_Status) VALUES (?)",
             [[input.Request_From, input.Request_To, new Date(), new Date(), 'New']]);

             return { status: "success", msg: "Request Sent" };
         }
         else{
            throw Error('Request could not be sent. Try Again!');
        }

    },
   
      async acceptfriendrequest(input){

        console.log({input: input});
        const data = await conn.query("UPDATE MyFriends SET Request_Status =?, Request_Updated_At=? WHERE Request_From=? AND Request_To=?",
        ['Accepted', new Date(), input.Request_From, input.Email]);

        return { status: "success", msg: "Request Accepted" };
      },

      async rejectfriendrequest(input){

        console.log({input: input});
        const data = await conn.query("DELETE FROM MyFriends WHERE Request_From=? AND Request_To=?",
        [input.Request_From, input.Email]);

        return { status: "success", msg: "Request Rejected" };
      },

      async pendingrequests(input){

        return await conn.query("select u.FirstName, u.LastName, u.Email FROM saxenap1_db.Users u inner join saxenap1_db.MyFriends m"
        +" on m.Request_From = u.Email"
        +" where m.Request_To=? and m.Request_Status='New'", input.Email);
        
      },

      async searchfriend(input){
        console.log(input);
        return await conn.query("select u.FirstName, u.LastName FROM saxenap1_db.Users u inner join saxenap1_db.MyFriends m"
        +" on m.Request_From = u.Email"
        +" where m.Request_To=? and m.Request_Status='New'", input.data.Search);
        
      }
};

module.exports = myfriendsmodel;