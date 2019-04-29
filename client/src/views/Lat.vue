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


     <h4><label for="WorkoutType">Workout Type</label>   </h4>  
    <select class="form-control" name="WorkoutType"  v-model='data.WorkoutType' @change="getworkoutsubtype(data.WorkoutType)">
    <option v-for="workouttype in workouttype" :key="workouttype.workouttype">{{workouttype.WorkoutType}} </option>
   </select>
    
    <div v-if="!isHidden"><br/>
   <h4><label for="WorkoutSubType">Workout Sub Type</label>   </h4>  
    <select class="form-control" name="WorkoutSubType"  v-model='data.WorkoutSubType'  @change="getworkoutname(data.WorkoutType,data.WorkoutSubType)">
    <option v-for="workoutsubtype in workoutsubtype" :key="workoutsubtype.workoutsubtype">{{workoutsubtype.WorkoutSubType}} </option>
   </select>
    </div>

    <div v-if="!isHiddenWorkoutName"><br/>
   <h4><label for="WorkoutName">Workout Name</label>   </h4>  
    <select class="form-control" name="WorkoutName"  v-model='data.WorkoutName'  @change="getsetsreps(data.WorkoutName)">
    <option v-for="workoutname in workoutname" :key="workoutname.Id">{{workoutname.WorkoutName}} </option>
   </select>
    </div>

    <div v-if="!isHiddenSetsReps"><br/>
    <table>
      <tr>
        <td>
   <h4><label for="Sets"  name="Sets">Sets</label>
        
   <p v-for="setsreps in setsreps" :key="setsreps.Id">{{setsreps.Sets}}</p></h4>
        </td>

        <td>
   <h4>&nbsp;&nbsp;&nbsp;&nbsp;<label for="Reps"  name="Reps">Reps</label>  
   
   <p v-for="setsreps in setsreps" :key="setsreps.Id" >&nbsp;&nbsp;&nbsp;&nbsp;{{setsreps.Reps}}</p></h4> 
        </td>

    <td>
   
     <h4><label for="ShareProgress">Share Progress</label></h4>
           
              
                <input type="radio" name="Yes" id="Yes" v-model='data.ShareProgress'  value="Yes" checked>
                <label for="Yes">Yes &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;</label>
             
                <input type="radio" name="No" id="No" v-model='data.ShareProgress' value="No">
                <label for="No">No</label>

        </td>

      </tr>
    <!--</table>-->

    <!--<table>-->
      <tr>
        <td>
   <h4><label for="YourSets"  name="YourSets">Your Sets</label></h4>
    <input type="text" class="form-control" id="YourSets" v-model='data.YourSets' placeholder="Number of sets you did">
     
        </td>

        <td>
   <h4>&nbsp;&nbsp;&nbsp;&nbsp;<label for="YourReps"  name="YourReps">Your Reps</label> </h4> 
    <input type="text" class="form-control" id="YourReps" v-model='data.YourReps' placeholder="Number of reps you did">
        </td>

   <br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" @click.prevent="recordprogress">Record Progress</button>
    
      </tr>
    </table>

    
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
import { GetWorkoutType, GetWorkoutSubType, GetWorkoutName, GetSetsReps, RecordProgress } from "@/models/workouts.js";
import toastr from 'toastr';
export default {
     data: ()=> ({
        Globals: Globals,        
        data: {},
        workouttype:[],
        workoutsubtype:[],
        workoutname:[],
        setsreps:[],
        isHidden : true,
        isHiddenWorkoutName : true,
        isHiddenSetsReps : true
        
    }),
    async mounted(){
        const bodypart = 'Lat'
        this.workouttype = await GetWorkoutType(bodypart);
    },
    methods: {
        async getworkoutsubtype(workouttype){
            try {
              const m = await GetWorkoutSubType(workouttype);
              this.workoutsubtype= m;
            
                if(this.workoutsubtype[0].WorkoutSubType !== '')
                {
                    this.isHidden = false;
                }
              
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async getworkoutname(workouttype,workoutsubtype){
            try {
              const m = await GetWorkoutName(workouttype,workoutsubtype);
              this.workoutname= m;
            
                if(this.workoutname[0].WorkoutName !== '')
                {
                    this.isHiddenWorkoutName = false;
                }

            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async getsetsreps(workoutname){
            try {
              const m = await GetSetsReps(workoutname);
              this.setsreps= m;
            
                if(this.setsreps[0].Reps !== '' && this.setsreps[0].Sets !== '')
                {
                    this.isHiddenSetsReps = false;
                }

            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async recordprogress(){
          try {
            console.log({DataInVue:this.data});
            console.log({Reps:this.setsreps[0].Reps});
              const m = await RecordProgress(this.data, this.setsreps[0].Sets, this.setsreps[0].Reps);
              toastr.success('Progress Recorded!')

            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        }
 
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

    table {
  border: 2px solid black;
  border-radius: 3px;
  background-color: #fff;
  color: black;
 
}

td {
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
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

