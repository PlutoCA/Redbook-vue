<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="collections-item" v-for="(item, index) in collections" :key="item.id">
        <div class="bg-img">
          <h3>
            <!-- <img src="//ci.xiaohongshu.com/03fb052f-aedb-40a9-8f29-ac25b973b889@r_750w_750h_ss1.jpg" alt=""> -->
            <img :src="item.hotpic" alt="">
          </h3>
          <div class="mask"></div>
        </div>
        <h2 class="collections-title">
          <a href="" @click="getId(index+1)">{{item.title}}</a>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
import api from '@/api'
export default {
  data () {
    return {
      collections: []
    }
  },
  components: {
    Header
  },
  methods: {
    getId (id) {
      console.log(id)
    }
  },
  created () {
    this.$http.get(api.host + '/collections').then(res => {
      this.collections = res.data
    })
  }
}
</script>
<style>
.collections-item{
  position: relative;
  height: 2.4rem;
  margin: 0 .3rem;
  color: #ccc;
  -webkit-box-align: center;
  overflow: hidden;
  z-index: 10;
  padding-top: 0.3rem;
}
.bg-img{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: .15rem;
  overflow: hidden;
}
.bg-img img{
  position: absolute;
  top: -100%;
  width: 100%;
  height: auto;
}
.mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.15);
}
.collections-title{
  width: 100%;
  text-align: center;
  font-size: .36rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
}
.collections-title a{
  color: #ffffff;
}
</style>


