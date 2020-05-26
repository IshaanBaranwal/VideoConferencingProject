<template>
    <div class="login">
    <div class="login-triangle"></div>
    <h2 class="login-header">Log in</h2>
        <form class="login-container">
            <p><input id="name" type="text" name="name" placeholder="Your Name" required></p>
            <p><input type="email" name="email" placeholder="Your Email" required></p>
            <p><input type="password" name="password" placeholder="Password" required></p>
            <p><input type="password" name="confirm_password" placeholder="Confirm Password" required></p>
            <p><input type="submit" value="Sign Up"></p>
            <p v-on:click="login"><input type="submit" value="Already have an Acoount?"></p>
            <p v-on:click="home"><input type="submit" value="Go Back"></p>
        </form>
    </div>
</template>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);


.login {
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
}

/* Reset top and bottom margins from certain elements */
.login-header,
.login p {
  margin-top: 0;
  margin-bottom: 0;
}

/* The triangle form is achieved by a CSS hack */
.login-triangle {
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #00BFA6;
}

.login-header {
  background: #00BFA6;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.login-container {
  background: #ebebeb;
  padding: 12px;
}

/* Every row inside .login-container is defined with p tags */
.login p {
  padding: 12px;
}

.login input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login input[type="email"],
.login input[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login input[type="email"]:focus,
.login input[type="password"]:focus {
  border-color: #888;
}

.login input[type="submit"] {
  background: #00BFA6;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
}

.login input[type="submit"]:hover {
  background: #00BFA6;
}

/* Buttons' focus effect */
.login input[type="submit"]:focus {
  border-color: #00BFA6;
}
</style>
<script>
// import Navbar from './Navbar.vue'
// import Carousel from './carousel.vue'
// import Footer1 from './Footer.vue'
export default {
  name: 'Signup',
//   components: {
//     Navbar,Carousel,Footer1
//   }
    methods: {
      login() {
          this.$router.push('/Login')
      },
      home(){
          this.$router.push('/')
      }
    }
}
</script>