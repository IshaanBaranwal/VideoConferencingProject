<template>
    <div class="hero">
        <Navbar/>
        <Carousel/>
        <div class="columns" id='Home'>
            <div class="column" id="HomeSvg">
                <img src="@/assets/home.svg" alt="">
            </div>
            <div class="column" id="HomeText">
                <h2>Talk.Chat.Collaborate.</h2>
                <h1>Communicate Easily</h1>
            </div>
        </div>
        <div class="row" id="count">
            <h1>Number of Users.</h1>
            <Counter/>
        </div>
        <Footer1/>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Carousel from './carousel.vue'
import Footer1 from './Footer.vue'
import Counter from './Counter.vue'
export default {
  name: 'Home',
  components: {
    Navbar,Carousel,Footer1,Counter
  }
}
</script>
<style>
.columns:not(:last-child){
    margin-bottom: 0%;
}
#HomeSvg{
    margin-top: 5rem;
    padding: 5rem;
}
#HomeSvg img{
    max-width: 35vw;
}
#HomeText{
    background-color: #00BFA6;
    padding-top: 10rem;
    margin: 0;
    width: 100%;
    border-radius: 0!important;
}
#HomeText h2{
    color: white;
    font-size: 2rem;
    margin-top: 6rem;
}
#HomeText h1{
    margin-top: 2rem;
    font-size: 3rem;
}
#count{
    margin: 0%;
    width: 100%;
    background-color: black;
}
#count h1{
    margin-top: 1rem;
    padding: 2rem;
    color: white;
}
</style>