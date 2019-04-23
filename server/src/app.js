const express   = require('express');
const path      = require('path');
const usercontroller = require('./controllers/UserController');
const profilecontroller = require('./controllers/ProfileController');
////const logincontroller = require('./controllers/LoginController');
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
const sharedvideosscontroller = require('./controllers/SharedVideosController');

const usermodel     = require('./models/UserModel');

const app = express();
const port = 8081;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.use(function(req, res, next) {
    try {
      const token = (req.headers.authorization || "").split(' ')[1]
      req.user = usermodel.getFromToken(token);
    } catch (error) {
      console.log({thiserror: error});
      const openActions = ['POST/UserController', 'POST/UserController/Login', 'GET/Login', 'GET/MyFriends', 'POST/ProfileController', 'GET/ProfileController']
      //if(!openActions.includes(req.method + req.path)){ // check if login required
      if(req.method != "OPTIONS" && !openActions.includes(req.method + req.path)){ // check if login required
        next(Error("Login Required"));
      }
    }
    next();
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "../NoFramework")));
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/UserController', usercontroller);
app.use('/ProfileController', profilecontroller);
//app.use('/LoginController', logincontroller);
app.use('/MyFriendsController', myfriendscontroller);
app.use('/DietChartController', dietchartcontroller);
app.use('/MeatExchangesController', meatexchangescontroller);
app.use('/FruitExchangesController', fruitexchangescontroller);
app.use('/VegetableExchangesController', vegetableexchangescontroller);
app.use('/WorkoutsBeginnerController', workoutsbeginnercontroller);
app.use('/WorkoutsIntermediateController', workoutsintermediatecontroller);
app.use('/WorkoutsAdvancedController', workoutsadvancedcontroller);
app.use('/WorkoutVideosController', workoutvideoscontroller);
app.use('/WorkoutVideosCommentsController', workoutvideoscommentscontroller);
app.use('/SharedVideosController', sharedvideosscontroller)

app.get("*", (req, res)=> res.sendFile(path.join(__dirname, "../../client/dist/index.html")));

app.use(function (err, req, res, next) {
  console.error(err.stack)
  //res.status(500).send({msg: err.message });
  res.status(500).send({message: err.message });
})





app.listen(port, () => console.log(`Example app http://localhost:${port}`));