<template>
  <div>
    <h1>Register</h1>

    <input type="email" name ="email" v-model="email" placeholder="email" />
    <br>
    <input type="password" name ="password" v-model="password" placeholder="password" />
    <br>
    <button @click="register"> Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default { 
  data () {
    return {
      email: '',
      password:''
    }
  },
  methods: {

    /*register () {
      console.log('register button was clicked', this.email, this.password)
    }*/
     async register() {
      
      try{
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch(error)
      {
        this.error = error.response.data.error
      }
      //console.log('register button was clicked', this.email, this.password)
      //console.log(response.data)
    }
  }
  /*watch: {
    email (value) {
      console.log('email has changed', value)
    }
  }/*,
  mounted () {
   setTimeout(() => {
      this.email = 'hello world'
    },2000)
  }*/
  
}
</script>

<style scoped>

</style>
