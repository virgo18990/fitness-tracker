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


     <h5><label for="WorkoutType">Workout Type</label>   </h5>  
    <select class="form-control" name="WorkoutType"  v-model='data.WorkoutType' @change="getworkoutsubtype(data.WorkoutType)">
    <option v-for="workouttype in workouttype" :key="workouttype.workouttype">{{workouttype.WorkoutType}} </option>
   </select>
    
    <div v-if="!isHidden"><br/>
   <h5><label for="WorkoutSubType">Workout Sub Type</label>   </h5>  
    <select class="form-control" name="WorkoutSubType"  v-model='data.WorkoutSubType'>
    <option v-for="workoutsubtype in workoutsubtype" :key="workoutsubtype.workoutsubtype">{{workoutsubtype.WorkoutSubType}} </option>
   </select>
    </div>





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
import Workouts from '../components/Workouts';
import { Globals } from "@/models/api.js";
import { GetWorkoutType, GetWorkoutSubType } from "@/models/workouts.js";
import toastr from 'toastr';
export default {
     data: ()=> ({
        Globals: Globals,        
        data: {},
        workouttype:[],
        workoutsubtype:[],
        isHidden : true
        
    }),
    async mounted(){
        this.workouttype = await GetWorkoutType();
        console.log({workouttype:this.workouttype});
    },
    methods: {
        async getworkoutsubtype(workouttype){
            try {
                console.log('Inside getworkoutsubtype');
               //console.log({searchemail: searchemail});--Testing
              const m = await GetWorkoutSubType(workouttype);
              //console.log({m:m});--Testing
              //console.log({pendingrequests: this.pendingrequests})--Testing
              this.workoutsubtype= m;
              console.log(this.workoutsubtype);
              //console.log({searchresults:this.searchresults[0].Email});--Testing
             
            //console.log({isHidden:this.isHidden})--Testing
                if(this.workoutsubtype[0].WorkoutSubType !== '')
                {
                    console.log('Inside workoutsubtype');
                    this.isHidden = false;
                }

              toastr.success("Found!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },
    },
    components: {
        Workouts
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

