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
         v-for="myprogress in myprogress" :key="myprogress.Id"
        >
          <v-card flat >
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="pink" class="mr-3"></v-avatar>
                <strong class="title">Workout Name {{ myprogress.WorkoutName }}</strong>
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
                    <strong class="title">{{ myprogress.WorkoutType }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Workout Sub Type</strong>
                  </td>
                  <td>
                    <strong class="title">{{ myprogress.WorkoutSubType }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Your Sets</strong>
                  </td>
                  <td>
                    <strong class="title">{{ myprogress.YourSets }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Your Reps</strong>
                  </td>
                  <td>
                    <strong class="title">{{ myprogress.YourReps }}</strong>
                  </td>
                </tr>

                <tr>
                  <td bgcolor="pink">
                    <strong class="title">Progress</strong>
                  </td>
                  <td>
                    <strong class="title">{{ myprogress.Progress }}%</strong>
                  </td>
                </tr>
              </table>
              
              <br/>

                 <strong class="title">Your Progress</strong>

           <div class="progress">
               <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: myprogress.Progress + '%'}"></div>
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
import { TrackProgress } from "@/models/workouts.js";
import toastr from 'toastr';

export default {

   data: ()=> ({
        Globals: Globals,
        data: {},
        myprogress: [],
        progresspercentage: [],
        length: [],
        window: 0
    }),
    async mounted(){
        this.myprogress = await TrackProgress();
        console.log({myprogress: this.myprogress});
        length = this.myprogress.length;
        console.log({length: length});
        this.length = length;
        console.log({thisLength:this.length});
        this.progresspercentage = this.myprogress[0].Progress;
        console.log({progresspercentage: this.progresspercentage});
        
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
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 1024px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:100%;} 
    }
</style>





