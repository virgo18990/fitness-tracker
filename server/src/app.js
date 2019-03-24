const express   = require('express');
const path      = require('path');
const usercontroller = require('./controllers/UserController');
const profilecontroller = require('./controllers/ProfileController');
const logincontroller = require('./controllers/LoginController');
const myfriendscontroller = require('./controllers/MyFriendsController');
const dietchartcontroller = require('./controllers/DietChartController');
const meatexchangescontroller = require('./controllers/MeatExchangesController');
const fruitexchangescontroller = require('./controllers/FruitExchangesController');
const vegetableexchangescontroller = require('./controllers/VegetableExchangesController');
const workoutsbeginnercontroller = require('./controllers/WorkoutsBeginnerController');
const workoutsintermediatecontroller = require('./controllers/WorkoutsIntermediateController');
const workoutsadvancedcontroller = require('./controllers/WorkoutsAdvancedController');
const workoutvideoscontroller = require('./controllers/WorkoutVideosController');
const workoutvideoscommentscontroller = require('./controllers/WorkoutVideosCommentsController');

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
app.use('/DietChartController', dietchartcontroller);
app.use('/MeatExchangesController', meatexchangescontroller);
app.use('/FruitExchangesController', fruitexchangescontroller);
app.use('/VegetableExchangesController', vegetableexchangescontroller);
app.use('/WorkoutsBeginnerController', workoutsbeginnercontroller);
app.use('/WorkoutsIntermediateController', workoutsintermediatecontroller);
app.use('/WorkoutsAdvancedController', workoutsadvancedcontroller);
app.use('/WorkoutVideosController', workoutvideoscontroller);
app.use('/WorkoutVideosCommentsController', workoutvideoscommentscontroller)








app.listen(port, () => console.log(`Example app http://localhost:${port}`));