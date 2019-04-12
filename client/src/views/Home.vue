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
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

 <button type="submit" class="btn btn-primary btn-space">Login</button>
  <button type="submit" class="btn btn-primary btn-space" >Sign Up</button>

</form>


    
  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    
  }
}
</script>