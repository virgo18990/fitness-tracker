/*console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const usercontroller = require('./controllers/UserController')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/UserController', usercontroller)

app.post('/register', (req,res) => {
    console.log('register button was clicked')
    res.send({
        message: `Hello ${req.body.email}!Your user was registered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081)*/

const express   = require('express');
const path      = require('path');
const usercontroller = require('./controllers/UserController');

const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "../NoFramework")));
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/UserController', usercontroller);



app.listen(port, () => console.log(`Example app http://localhost:${port}`));