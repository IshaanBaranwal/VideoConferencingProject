<template>
    <div class="hero">
        <div class="columns">
            <div class="column is-2"><dashboard-grid /></div>
            <div class="column">
                <section class="hero is-medium is-light is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Dashboard
                            </h1>
                            <h2 class="subtitle">
                                User
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import DashboardGrid from './DashboardGrid.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardGrid
  }
}
</script>
<style>
.columns{
    height:100vh;
}
.column{
    margin:0;
    padding:0;
    border-radius: 5%;
}
#second{
    display:block;
    margin-top: 10%;
    padding: 10%;
    height: 90vh;
    background-color: rgb(250, 250, 250);
}
#second p{
    margin-top: 10%;
    color: #00BFA6;
    font-size: 200%;
    font-weight: 700;
}

#homesvg{
    display: block;
    margin-top: 3%;
    height: 80vh;
}
#homesvg svg{
    margin-top: 3%;
    position: relative!important;
    max-height: 400px;
}
h2{
    color: #00BFA6;
    font-weight: bold!important;
}
h1{
    font-size: 300%!important;
    font-weight: bold!important;
}
</style>