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
        <img src="../assets/share1.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/share2.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/share3.jpg" class="d-block w-100" alt="imghome">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/share4.jpg" class="d-block w-100" alt="imghome">
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
          <v-layout align-center>
    <v-item-group
      v-model="window"
      class="shrink mr-4"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
      >
        <div slot-scope="{ active, toggle }">
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-flex>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
        
      >
        <v-window-item
         v-for="sharedactivities in sharedactivities" :key="sharedactivities.Id"
        >
          <v-card flat >
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="pink" class="mr-3"></v-avatar>
                <strong class="title">Workout Name {{ sharedactivities.WorkoutName }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>

              <table border="2px" solid>
                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Workout Type</strong>
                  </td>
                  <td>
                    <strong class="title">{{ sharedactivities.WorkoutType }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Workout Sub Type</strong>
                  </td>
                  <td>
                    <strong class="title">{{ sharedactivities.WorkoutSubType }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Your Sets</strong>
                  </td>
                  <td>
                    <strong class="title">{{ sharedactivities.YourSets }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Your Reps</strong>
                  </td>
                  <td>
                    <strong class="title">{{ sharedactivities.YourReps }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Progress</strong>
                  </td>
                  <td>
                    <strong class="title">{{ sharedactivities.Progress }}%</strong>
                  </td>
                </tr>
              </table>

              <br/>

                 <strong class="title">Your Progress</strong>

           <div class="progress">
               <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: sharedactivities.Progress + '%'}"></div>
            </div>
              
              <br/><br/><br/><br/><br/><br/><br/>

            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-flex>
  </v-layout>
      </div>


</div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p></p>
      </div>
      <div class="well">
        <p></p>
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
import Workouts from '../components/Workouts';
import { GetSharedActivities } from "@/models/workouts.js";
import toastr from 'toastr';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {

    data: ()=> ({
        Globals: Globals,
        data: {},
        sharedactivities: [],
        length: [],
        window: 0
    }),
    async mounted(){
        this.sharedactivities = await GetSharedActivities();
        console.log({sharedactivities: this.sharedactivities});
        length = this.sharedactivities.length;
        console.log({length: length});
        this.length = length;
        console.log({thisLength:this.length});
        
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
      color: white;
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
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .carousel-item img{

      width:100%;
      height: 400px;

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