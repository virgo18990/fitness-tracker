const express   = require('express');
const path      = require('path');
const usercontroller = require('./controllers/UserController');
const profilecontroller = require('./controllers/ProfileController');
const logincontroller = require('./controllers/LoginController');
const myfriendscontroller = require('./controllers/MyFriendsController');
const dietchartcontroller = require('./controllers/DietChartController');

const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "../NoFramework")));
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/UserController', usercontroller);
app.use('/ProfileController', profilecontroller);
app.use('/LoginController', logincontroller);
app.use('/MyFriendsController', myfriendscontroller);
app.use('/DietChartController', dietchartcontroller)




app.listen(port, () => console.log(`Example app http://localhost:${port}`));