<template>
  <div class="home">
    
      <!--<h1>Welcome to my App</h1>-->
    <!--<table class="table">
        
        <tbody>
            <tr>
                
                <td><img src ="../assets/imghome.jpg" class="img-fluid"></td>
                <td>knkl</td>
            </tr>
            
        </tbody>
    </table>-->

    <div class="container">
  <img src="../assets/imghome.jpg"  style="width:100%">
  <div class="content">
    <h1>Meals, Workout and more....</h1>

<form @submit.prevent="submit"> 

  <div class="form-group">
    <label for="Email">Email</label>
    <input type="text" class="form-control" id="Email" v-model='data.Email' aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" v-model='data.Password' placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
  </div>

<!--<div v-if="!Globals.user">
 <button type="submit" class="btn btn-primary btn-space" @click.prevent="login">Login</button>
  <button type="submit" class="btn btn-primary btn-space">Sign Up</button>
</div>-->
<!--<span class="navbar-text" v-if="Globals.user">Welcome {{Globals.user.name}}</span>-->

<!--<div v-if="Globals.user">-->
  <div>
<!--<button type="submit" class="btn btn-primary btn-space" @click="login">Login</button>-->

<button type="submit" class="btn btn-primary" >Login</button>
</div>

</form>

  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import {  Globals } from "@/models/api.js";
import { Login } from "@/models/users"; //should it be users.js
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
        /*login(){
            //this.user = { name: "Easwaren" };
            //login();

            toastr.success("You've logged in successfully!");
        }*/

          async submit(){
            try {
              console.log(this.data);
              const m = await Login(this.data);
              //this.newUser = m.user;
              this.$router.push(Globals.redirectRoute || { name: 'Home' })
              //Globals.user = m.user;
              //Globals.token = m.token;
              toastr.success("You've logged in successfully!")
            } catch (error) {
              Globals.errors.push(error);
              toastr.error(error.message);
            }
        }
    }

}
</script>

<style>
</style>