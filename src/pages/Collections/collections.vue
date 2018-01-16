<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="collections-item">
        <div class="bg-img">
          <h3>
          </h3>
          <div class="mask"></div>
        </div>
        <h2 class="collections-title">

        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header
  }
}
</script>
<style>
.collections-item{
  /* width: 345.5px; */
  height: 2.4rem;
  margin: 0 .3rem;
  color: #fff;
  -webkit-box-align: center;
}
.bg-img{
  position: absolute;
  width: 90%;
  height: 100%;
  overflow: hidden;
}
.bg-img img{
  width: 100%;
}
</style>


