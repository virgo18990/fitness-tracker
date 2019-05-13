<template>
  <div class="home"> 
        
        <div class="container-fluid">  
  <div class="row content">
    <div class="col-lg-2 sidenav">
       <h6>Add Friends</h6>
        <br/>

     <div>
           <input for="Search" type="text" class="form-control" id="Search" name="Search" v-model='data.Search' placeholder="Search">
           <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" @click.prevent="search(data.Search)">Search</button>
           <br/>
       </div>

       <!-- <div>
           <input class="typeahead tt-query" spellcheck="false" autocomplete="off" name="typeahead" type="text" v-model='data.typeahead'/>
       </div>-->

        <br/>
        <div class="well">
          
       <v-expansion-panel v-if="!isHidden">
        <v-expansion-panel-content
        v-for="friend in searchresults" :key="friend.Email"
        expand-icon="mdi-menu-down"
        >
            <template v-slot:header>
                <div>{{friend.FirstName}} {{friend.LastName}}</div>
            </template>
      <v-card >
        <v-card-text class="grey lighten-3">
            <button type="submit" class="btn btn-primary" @click.prevent="sendrequest(friend.Email)">Send Request</button>
            
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
      </div>
       
     
      
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
        <img src="../assets/friends.jpg" class="d-block w-100" alt="imghome">
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
      
      <h2 class= "text-md-center" v-if="Globals.user"> <i class="fas fa-align-center">Friends of {{Globals.user.FirstName}} {{Globals.user.LastName}}</i></h2>

        <v-expansion-panel>
    <v-expansion-panel-content
      v-for="friend in friends" :key="friend.Request_From"
      expand-icon="mdi-menu-down"
    >
      <template v-slot:header>
        <div>{{friend.FirstName}} {{friend.LastName}}</div>
      </template>
      <v-card >
        <v-card-text class="grey lighten-3">
            <button type="submit" class="btn btn-primary" @click.prevent="removefriend(friend.Email)">Remove</button><br/><br/>
            
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

 
  </div>


</div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
          <h6>Pending Requests</h6><br/>
       <v-expansion-panel>
    <v-expansion-panel-content
      v-for="friend in pendingrequests" :key="friend.Email"
      expand-icon="mdi-menu-down"
    >
      <template v-slot:header>
        <div>{{friend.FirstName}} {{friend.LastName}}</div>
      </template>
      <v-card >
        <v-card-text class="grey lighten-3">
            <button type="submit" class="btn btn-primary" @click.prevent="submit(friend.Email)">Accept</button><br/><br/>
            <button type="submit" class="btn btn-primary" @click.prevent="reject(friend.Email)">Reject</button>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
//import { jquery } from "../../node_modules/jquery/dist/jquery.min.js";
import { typeahead } from "../../node_modules/jquery-typeahead/dist/jquery.typeahead.min.js";
import { Globals } from "@/models/api.js";
import { GetFriends, PendingRequests, AcceptFriendRequest, RejectFriendRequest, SearchFriend, SendRequest, RemoveFriend } from "@/models/users.js";
import toastr from 'toastr';

/*$(document).ready(function(){
$('data.typeahead').typeahead({
name: 'typeahead',
remote: 'http://localhost:8080/MyFriendsController/SearchFriend?key=%QUERY',
limit: 10
});
});*/

export default {
    
    data: ()=> ({
        Globals: Globals,
        friends: [],
        data: {},
        pendingrequests: [],
        searchresults: [],
        isHidden : true
    }),
    async mounted(){
        this.friends = await GetFriends();
        this.pendingrequests = await PendingRequests();
    },
     methods: {
        
          async submit(Email){
            try {
              const m = await AcceptFriendRequest(Email); 
              toastr.success("Request Accepted!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async reject(Email){
            try {
              const m = await RejectFriendRequest(Email); 
              toastr.success("Request Rejected!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async search(searchemail){
            try {
               //console.log({searchemail: searchemail});--Testing
              const m = await SearchFriend(searchemail);
              //console.log({m:m});--Testing
              //console.log({pendingrequests: this.pendingrequests})--Testing
              this.searchresults= m;
              //console.log({searchresults:this.searchresults[0].Email});--Testing
             
             if(this.searchresults[0].Email !== '')
             {
                 this.isHidden = false;
             }
            //console.log({isHidden:this.isHidden})--Testing
              toastr.success("Found!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async sendrequest(Request_To){
            try {
              const m = await SendRequest(Globals.user.Email,Request_To); 
              toastr.success("Request Sent!!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        },

        async removefriend(Email){
            try {
                console.log(Email);
              const m = await RemoveFriend(Globals.user.Email,Email); 
              toastr.success("Friend Removed From Your Friend List!")
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
      color: white;
      padding: 15px;
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





