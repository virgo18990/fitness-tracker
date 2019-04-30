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
    <!--<h1>Meals, Workout and more....</h1>-->

<table>
<tr>

  <td>
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
  


  <div>
<button type="submit" class="btn btn-primary" >Login</button>
</div>

</form>
  </td>
</tr>



<tr>
  <td>
    <form @submit.prevent="register"> 

  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" v-model='data.FirstName' aria-describedby="FirstNameHelp" placeholder="Enter First Name">
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="LastName" class="form-control" id="LastName" v-model='data.LastName' placeholder="Enter Last Name">
  </div>
  <div class="form-group">
    <label for="Birthday">Birthday</label>
    <input type="text" class="form-control" id="Birthday" v-model='data.Birthday' aria-describedby="BirthdayHelp" placeholder="mm/dd/yyyy">
    <small id="BirthdayHelp" class="form-text text-muted">mm/dd/yyyy</small>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="RegPassword" v-model='data.RegPassword' placeholder="Password">
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="text" class="form-control" id="RegEmail" v-model='data.RegEmail' placeholder="Enter Email">
  </div>
  </div>
  <div>
<button type="submit" class="btn btn-primary" >Sign Up</button>
</div>

</form>

  </td>
</tr>



</table>



  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import {  Globals } from "@/models/api.js";
import { Login, Register } from "@/models/users"; //should it be users.js
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
        },

        async register(){
            try {
              console.log(this.data);
              const m = await Register(this.data);
              
              toastr.success("You've registered successfully!")
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