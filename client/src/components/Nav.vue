<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="/" >
            <img alt="Vue logo" src="../assets/fitnew1.jpg" height="30">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <router-link class="nav-link" to="/Home" active-class="active" exact>Home <span class="sr-only">(current)</span></router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link class="nav-link" to="/Workouts">Workouts</router-link>
                </li>-->
                <li class="nav-item">
                    <router-link class="nav-link" to="/Abs">Abs</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Arms">Arms</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Chest">Chest</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Core">Core</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Endurance">Endurance</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Lat">Lat</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ShouldersLat">Shoulders and Lat</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Legs">Legs</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/MealPlan">Meal Plan</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/TrackProgress">Track Progress</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/SharedActivities">Shared Activities</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/FriendsActivities">Friends Activities</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/MyFriends">My Friends</router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link class="nav-link" to="/about" active-class="active">About</router-link>
                </li>-->
                
                
            </ul>
            <form class="form-inline mt-2 mt-md-0">
            <!--<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
            <span class="navbar-text" v-if="Globals.user">Welcome {{Globals.user.FirstName}}</span>
            </form>
        </div>
    </nav>

    
        

</template>

<script>
//import { Globals } from "@/models/api.js";
import { Globals } from "../models/api.js";
export default {
    data: ()=>({
        user: null,
        Globals: Globals
       
    })

}
</script>

<style>

</style>
