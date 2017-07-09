<template lang="html">
  <header>
    <nav>
      <div class="navbar">
        <router-link to='/area'>Area Calulator</router-link>
        <router-link to='/lowescoupon'>Lowe's Coupon</router-link>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'navbar',
  data (){
    return {

    }
  }
}
</script>

<style lang="css">

  .navbar {
    padding: 10px 0;
    width: 320px;
    margin: 0 auto;
  }

  .navbar a {
    text-decoration: none;
    font-size: 120%;
    color: #ff0000;
    display: block;
    text-align: left;
  }

</style>
