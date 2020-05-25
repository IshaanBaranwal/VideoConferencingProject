<template>
    <div class="hero">
        <Navbar :fixed-top="true"/>
        <Carousel/>
        <div class="columns" id='Home'>
            <div class="column">
                <img src="@/assets/home.svg" alt="">
            </div>
            <div class="column" id="HomeText">
                <h2>Talk.Chat.Collaborate</h2>
                <h1>Communicate Easily</h1>
            </div>
        </div>
        <Footer1/>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Carousel from './carousel.vue'
import Footer1 from './Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,Carousel,Footer1
  }
}
</script>
<style>
#Home{
    padding: 5rem;
}
#HomeText{
    padding-top: 10rem;
}

</style>