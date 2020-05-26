<template>
    <div class="sign">
        <form v-on:submit.prevent="onSubmit" >
            <input type="text" name="name" placeholder="Your Name" v-model="name" required>
            <input type="email" name="email" placeholder="Your Email" v-model="email" required>
            <input type="password" name="password" placeholder="Password" v-model="password" required>
            <input type="password" name="confirm_password" placeholder="Confirm Password" v-model="confirm_password" required>
            <input type="submit" value="Sign Up">
        </form>
    </div>
</template>
<script>
// import Navbar from './Navbar.vue'
// import Carousel from './carousel.vue'
// import Footer1 from './Footer.vue'
import axios from 'axios'
export default {
  name: 'Signup',
//   components: {
//     Navbar,Carousel,Footer1
//   }
  data() {
      return{
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      }
  },
  methods: {
      onSubmit() {
        axios
            .post("http://localhost:8000/users/create",{
                name: this.name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            })
            .then(res => {
                console.log(res);
                this.$router.push('/')
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