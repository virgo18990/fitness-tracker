const conn = require('./mysql_connection');

const Promise = require('bluebird');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 8;
const JWT_SECRET = process.env.JWT_SECRET || 'some long string..';

const usermodel = {
  
    async getAll(){
        return await conn.query("SELECT * FROM Users");   
    },


    async get(id){
        return await conn.query("SELECT * FROM Users WHERE Id=?", id);    
    },

    async add(input){

        console.log('Inside add');
        const SALT_FACTOR = 8;

        //Adding for hashing password
        
        const password = input.RegPassword;

        var salt = bcrypt.genSaltSync(SALT_FACTOR);
        var hash = bcrypt.hashSync(password, salt);

        const data = await conn.query("SELECT * FROM Users WHERE Email=?",input.RegEmail);

        if(data.length !== 0){
            throw Error('User Already Exists');
        }
        else if(data.length===0){
                const x = await conn.query("INSERT INTO Users (FirstName,LastName,Birthday,Password,Email,Created_At,Updated_At) VALUES (?)",
                [[input.FirstName, input.LastName, input.Birthday, hash,input.RegEmail, new Date(), new Date()]]);

                return { status: "success", msg: "User Succesfully Registered" };
        }
        else{
            throw Error('User could not be registered. Try Again!');
        }

    },

    getFromToken(token){
        return jwt.verify(token, JWT_SECRET);
    },

    async login(Email, Password){
        console.log({Email, Password});
        const data = await conn.query("SELECT * FROM Users WHERE Email=?", Email);
        
        if(data===0){
            throw Error('User Not Found');
        }
        else{
            const x = bcrypt.compare(Password, data[0].Password);

            if(x){
                const user = { ...data[0], Password: null };
            return { user, token: jwt.sign(user, JWT_SECRET) };
                //return data[0];
            }else{
                throw Error('Wrong Password');
            }
        }
        
    },
   

    async changePassword(email, newPassword){

        const data = await conn.query("SELECT * FROM Users WHERE Email=?",email);
        if(data.length == 0){
            throw Error('User Not Found')
        }
            
        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        await conn.query("UPDATE Users SET Password=?, Updated_At=? WHERE Email=?",[hashedPassword, new Date(), email]);
        
        //return { status: "success", msg: "Password Succesfully Changed" };
        return { status: "success", message: "Password Succesfully Changed" };

    },

    
    async editUserDetails(input)
    {
        const data = await conn.query("SELECT * FROM Users WHERE Email=?",input.Email);

        if(data.length!==0)
        {
            const x = conn.query("UPDATE Users SET FirstName=?, LastName=?, Birthday=?, Updated_At=? WHERE Email=?",
            [input.FirstName,input.LastName, input.Birthday, new Date(), input.Email]);

            return { status: "success", msg: "Profile edited successfully!" };
        }
        else
        { 
            throw Error("Could not edit profile. Try Again!");
        }
    }
};

module.exports = usermodel;