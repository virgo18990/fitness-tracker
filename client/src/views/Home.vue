<template>
  <div class="home"> 
        
        <div class="container-fluid">  
  <div class="row content">
    <div class="col-lg-2 sidenav">
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
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
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/home3.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/home4.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
    <form> 

  <div class="form-group">
    <div>
      <h1> Get started by creating your profile!</h1>
    </div>
    <table class="table">
      
     
        <tr>
          
          <td>
            <label for="Age">Age</label>
    <input type="text" class="form-control" id="Age" v-model='data.Age' placeholder="Enter age">
    
          </td>
          <td>
            <label for="Weight">Weight</label>
           
            <input type="text" class="form-control" id="Weight"  v-model='data.Weight' placeholder="Enter weight">
            <small id="WeightHelp" class="form-text text-muted">Enter weight in kg</small>
          </td>
        </tr>
        <tr>
          
          <td>
            <label for="Height">Height</label>
            <input type="text" class="form-control" id="Height" v-model='data.Height' placeholder="Enter height">
            <small id="HeightHelp" class="form-text text-muted">Enter height in cms</small>
          </td>
          <td>
            <label for="Level">Level</label>
            <br>
             <div class="form-group">
               
               <select class="form-control" name="Level"  v-model='data.Level'>
                 <option disabled value="">SELECT</option>
                 <option>Weight Loss</option>
                 <option>Build Muscle</option>
                 <option>Stay Fit</option>
               </select>
             </div>
                
           </td>
        </tr>

        <tr> 
          <td>
             <label for="MealType">Meal Type</label>
            <br>
                <input type="radio" name="Vegetarian" id="Vegetarian" v-model='data.MealType' value="Vegetarian" checked>
                <label for="Vegetarian">Vegetarian &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;</label>
            
                <input type="radio" name="NonVegetarian" id="NonVegetarian" v-model='data.MealType' value="NonVegetarian">
                <label for="NonVegetarian">Non-Vegetarian</label>
          </td>
          <td>
            <label for="Gender">Gender</label>
            <br>
              
                <input type="radio" name="Male" id="Male" v-model='data.Gender'  value="Male" checked>
                <label for="Male">Male &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;</label>
             
                <input type="radio" name="Female" id="Female" v-model='data.Gender' value="Female">
                <label for="Female">Female</label>
           </td>
        </tr>
        <tr>
          <td>
           
            <label for="Address">Address</label>
            <input type="text" class="form-control" id="Address" v-model='data.Address' placeholder="Enter address">
            </td>
            <td>
               <br>
              &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; <button type="submit" class="btn btn-success" @click.prevent="submit">Create</button>
            </td>
        </tr>
   
    </table>
   
  </div>


</form>
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

<!--<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">-->
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>-->

 <script>
import { bootstrap } from "bootstrap";
import { js } from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { jquery } from "../../node_modules/jquery/dist/jquery.min.js";

import {  Globals } from "@/models/api.js";
import { CreateProfile } from "@/models/users";
import toastr from 'toastr';
//import 'toastr/build/toastr.css';

export default {

  data: ()=>({
        //user: null
        Globals: Globals,
        data: {},
        newUser: null
    }),
    methods: {
        
          async submit(){
            try {
              console.log(this.data);
              const m = await CreateProfile(this.data);
              //this.newUser = m.user;
              //this.$router.push(Globals.redirectRoute || { name: 'Home' })
              //Globals.user = m.user;
              //Globals.token = m.token;
              toastr.success("Profile created successfully")
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
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    .footer {
      background-color:#ffc107;
      color: white;
      padding: 15px;
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





