<template>
    <div>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="@/assets/tura.png" alt="Turaconnect">
                    <!-- <a style="background-color:none!important; font-weight:600;" class="is-primary" >TuraConnect</a> -->
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
                <b-navbar-item href="#">
                    Documentation
                </b-navbar-item>
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="#">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a v-on:click="login" class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a v-on:click="signin" class="button is-light">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>

        </b-navbar>
    </div>
</template>
<style>
    div{
        min-height: 5rem;
    }

</style>
<script>
export default {
  name: 'Navbar',
  methods: {
      login() {
          this.$router.push('/Dashboard')
      },
      signin() {
          this.$router.push('/Login')
      }
  }
}
</script>
