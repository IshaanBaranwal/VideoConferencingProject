<template>
    <div class="sign">
        <form v-on:submit.prevent="onSubmit">
            <input type="email" name="email" placeholder="Your Email" v-model="email" required>
            <input type="password" name="password" placeholder="Password" v-model="password" required>
            <input type="submit" value="Log In">
        </form>
    </div>
</template>
<script>
// import Navbar from './Navbar.vue'
// import Carousel from './carousel.vue'
// import Footer1 from './Footer.vue'
import axios from 'axios'
export default {
  name: 'Log',
//   components: {
//     Navbar,Carousel,Footer1
//   }
  data() {
      return{
        email: '',
        password: ''
      }
  },
  methods: {
      onSubmit() {
        axios
            .post("http://localhost:8000/users/create-session",{
                email: this.email,
                password: this.password,
            })
            .then(res => {
                // TEMPORARY LOGIC NEED TO CHANGE
                if (res.data==='Logged In'){
                    this.$router.push('/Dashboard')
                }
                else {
                    console.log('Invalid Information');
                }
            })
            .catch(err => console.log(err));
      }
  }
}
</script>
<style>
/* #Home{
    padding: 5rem;
}
#HomeText{
    padding-top: 10rem;
} */

</style>