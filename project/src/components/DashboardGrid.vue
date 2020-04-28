<template>
    <div class="container grid">
        <!-- <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Option 1"></b-menu-item>
                <b-menu-item icon="settings" :active="isActive" expanded>
                    <template slot="label" slot-scope="props">
                    Settings
                    <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                    </template>
                    <b-menu-item icon="account" label="Option 2"></b-menu-item>
                    <b-menu-item icon="cellphone-link" label="Option 3"></b-menu-item>
                    <b-menu-item icon="cash-multiple" label="Option 4"></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="Account">
                    <b-menu-item label="Option 5"></b-menu-item>
                    <b-menu-item label="Option 6"></b-menu-item>
                </b-menu-item>
                </b-menu-list>
                <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
        </b-menu> -->
        <section class="hero">
            <div class="container head">
                <p class="title is-3">
                    <i class="fas fa-user"></i>
                    Username
                </p>
            </div>
            <hr>
            <button v-on:click="toggleAll">
                <i class="fas fa-home"></i>
                Home
            </button>
            <hr>
            <button v-on:click="toggle1">Option 1</button>
            <div v-if="dropdown1" class="dropdown-list">
                <button>Sub Option 1</button>
                <button>Sub Option 2</button>
            </div>
            <hr>
            <button v-on:click="toggle2">Option 2</button>
            <div v-if="dropdown2" class="dropdown-list">
                <button>Sub Option 1</button>
                <button>Sub Option 2</button>
            </div>
            <hr>
            <button v-on:click="toggleAll">
                <i class="fas fa-cog"></i>
                Settings
            </button>
            <hr>
            <button v-on:click="logout">
                Log Out
            </button>
            <hr>
        </section>
    </div>
</template>
<style>
.head{
    padding-top:4rem;
    padding-bottom:3rem;
}
hr{
    margin:auto;
    background-color: rgba(46, 45, 45, 0.315);
    width: 100%;
}
.grid{
    height:100vh;
    background-color: #00BFA6;
}
button {
    background-color: #00BFA6;
    border-style: none;
    font-size:20px;
    padding:2rem;
    width:100%;
    outline:none;
    
}
.dropdown-list button{
    background-color: rgb(2, 165, 143);
}
button:hover {
    background-color: rgb(4, 143, 124);
}
button:focus {
    background-color: rgb(4, 143, 124);
}
</style>
<script>
export default {
  name: 'DashboardGrid',
  data() {
    return {
      isActive: true,
      dropdown1: false,
      dropdown2: true,
    }
  },
  methods: {
      toggle1() {
          this.dropdown1 = !this.dropdown1;
          this.dropdown2 = false;
      },
      toggle2() {
          this.dropdown2 = !this.dropdown2;
          this.dropdown1 = false;
      },
      toggleAll() {
          this.dropdown1 = false;
          this.dropdown2 = false;
      },
      logout() {
          this.$router.push("/");
      }
  }
}
</script>