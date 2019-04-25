<template>
  <div class="home"> 
        
        <div class="container-fluid">  
  <div class="row content">
    <div class="col-lg-2 sidenav">
       <h6>Add/Remove Friends</h6>
        <br/>

       <h6> <router-link to="/">Add Friend</router-link></h6>
       <h6> <router-link to="/">Remove Friend</router-link></h6>
     
      
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
      
      <h2 class= "text-md-center" v-if="Globals.user"> <i class="fas fa-align-center">Friends of {{Globals.user.FirstName}} {{Globals.user.LastName}}</i></h2>

    <h3 class= "text-sm-left"> 
      <ol>
        <li v-for="friend in friends" :key="friend.Request_From">
            {{friend.FirstName}} {{friend.LastName}}
        </li>
     </ol>
    </h3>
    <slot></slot>
  </div>


</div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
          <h6>Pending Requests</h6><br/>
       <v-expansion-panel>
    <v-expansion-panel-content
      v-for="friend in pendingrequests" :key="friend.Request_From"
      expand-icon="mdi-menu-down"
    >
      <template v-slot:header>
        <div>{{friend.FirstName}} {{friend.LastName}}</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">
            <button type="submit" class="btn btn-primary">Accept</button><br/><br/>
            <button type="submit" class="btn btn-primary">Delete</button>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
import { GetFriends, PendingRequests } from "@/models/users.js";

export default {
    data: ()=> ({
        Globals: Globals,
        friends: [],
        pendingrequests: []
    }),
    async mounted(){
        this.friends = await GetFriends();
        this.pendingrequests = await PendingRequests();
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





