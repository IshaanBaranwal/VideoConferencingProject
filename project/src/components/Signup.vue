<template>
    <div class="sign">
        <form >
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="password" name="confirm_password" placeholder="Confirm Password" required>
            <input type="submit" value="Sign Up">
        </form>
    </div>
</template>
<script>
// import Navbar from './Navbar.vue'
// import Carousel from './carousel.vue'
// import Footer1 from './Footer.vue'
export default {
  name: 'Signup',
//   components: {
//     Navbar,Carousel,Footer1
//   }
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