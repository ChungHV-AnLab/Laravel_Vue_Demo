<template>
  <div>
    <myheader></myheader>
      <router-view></router-view>
    <myfooter></myfooter>
    <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
  </div>
</template>

<script>
import Header from './Layouts/Header.vue'
import Footer from './Layouts/Footer.vue'
    export default{
        components: {
            'myheader' : Header,
            'myfooter' : Footer
        }
}
</script>
<style scoped>
/*--------------------------------------------------------------
  # Back to top button
  --------------------------------------------------------------*/
  .back-to-top {
    position: fixed;
    display: none;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
  }

  .back-to-top i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: #5fcf80;
    color: #fff;
    transition: all 0.4s;
  }

  .back-to-top i:hover {
    background: #3ac162;
    color: #fff;
  }

</style>
