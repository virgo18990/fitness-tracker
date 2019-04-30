<template>
  <div class="home"> 
        
        <div class="container-fluid">  
  <div class="row content">
    <div class="col-lg-2 sidenav">    
    </div>
    <div class="col-lg-8 text-left"> 
      
      <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/home1.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/home3.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/home4.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

<div>
    <br/>
 <h5><label for="Day">Select Day</label>   </h5>  
    <select class="form-control" name="Day"  v-model='data.Day' @change="showmealplan(data.Day)">
    <option v-for="day in day" :key="day.Id">{{day.Day}} </option>
   </select>
</div>

<div v-if="!isHidden"><br/>

   <center> <h4><label for="MealChart"> Your Meal Chart For Day {{data.Day}}</label></h4> </center>

    <table border="2px" solid> 
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Level"> Chosen Level </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="LevelData"> {{meals.Level}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="MealType"> Chosen Meal Type </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="MealTypeData"> {{meals.MealType}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Breakfast"> Breakfast </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="BreakfastData"> {{meals.Breakfast}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Snack1"> Snack 1 </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="Snack1Data"> {{meals.Snack1}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Lunch"> Lunch </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="LunchData"> {{meals.Lunch}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Snack2"> Snack 2 </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="LunchData"> {{meals.Snack2}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Dinner"> Dinner </label></h5>
            </td>
            <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="DinnerData"> {{meals.Dinner}} </label></h5>
            </td>
        </tr>
        <tr>
            <td bgcolor="#42b983">
                <h5><label for="Snack3"> Snack 3 </label></h5>
            </td>
           <td  v-for="meals in meals" :key="meals.Id">
                <h5><label for="Snack3Data"> {{meals.Snack3}} </label></h5>
            </td>
        </tr>
    </table>

   <!--<h4><label for="MealType">MealType</label>   </h4>  
    <select class="form-control" name="MealType"  v-model='data.MealType'>
    <option v-for="meals in meals" :key="meals.MealType">{{meals.MealType}} </option>
   </select>-->
   
   

</div>



</div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>
 </div>

</template>

<script>
import { bootstrap } from "bootstrap";
import { js } from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { jquery } from "../../node_modules/jquery/dist/jquery.min.js";
import { Globals } from "@/models/api.js";
import { GetDays, ShowMealPlan } from "@/models/meals.js";
import toastr from 'toastr';

export default {

    data: ()=> ({
        Globals: Globals,        
        data: {},
        day:[],
        meals: [],
        isHidden : true
      
    }),
    async mounted(){
        this.day = await GetDays();
        console.log({Days:this.day})
    },
     methods: {
        async showmealplan(day){
            try {
              const m = await ShowMealPlan(day);
              this.meals= m;
                console.log({Meals:this.meals});
                if(this.meals[0].length !== 0)
                {
                    this.isHidden = false;
                }
              
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        }
     }

}
 </script>
  
<style>

@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

.home{
  margin-top:1000px;
  
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height:1000px ;
    margin-right: 10px;
    background-color: #ffc107;
    
    }
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      color: black;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    .footer {
      background-color:#ffc107;
      color: black;
      padding: 15px;
    }

    table {
  border: 2px solid black;
  border-radius: 3px;
  background-color: #fff;
  color: black;
}

td {
    padding-left: 5px;
    padding-right: 5px
}
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 1024px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:100%;} 
    }
</style>