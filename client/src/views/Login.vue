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

<form> 

  <div class="form-group">
    <label for="Email">Email</label>
    <input type="text" class="form-control" id="Email" aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
  </div>

<div v-if="!Globals.user">
 <button type="submit" class="btn btn-primary btn-space" @click.prevent="login">Login</button>
  <button type="submit" class="btn btn-primary btn-space">Sign Up</button>
</div>
<!--<span class="navbar-text" v-if="Globals.user">Welcome {{Globals.user.name}}</span>-->

<div v-if="Globals.user">
<button type="submit" class="btn btn-primary btn-space" @click="login">Login</button>
</div>

</form>

  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import { login, Globals } from "@/models/api.js";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export default {
  data: ()=>({
        //user: null
        Globals: Globals
    }),
    methods: {
        login(){
            //this.user = { name: "Easwaren" };
            //login();

            toastr.success("You've logged in successfully!");
        }
    }

}
</script>