<template>
  <div id="header">
    <nav>
      <div class="logo">
        <a href="#"><img src="./images/logo-be88e12.png" alt=""></a>
      </div>
      <div class="tools">
        <div class="list"><a href="">精选</a></div>
        <div class="search">
          <span><img src="./images/search.png" alt="" class="search-icon"></span>
          <form action="">
            <input type="serch" name="search" id="" :placeholder="word + hot">
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      hot: '',
      hotword: [],
      word: '大家都在搜：'
    }
  },
  created () {
    this.$http.get(api.host + '/data').then(res => {
      this.hotword = res.data.hotword
      this.hot = this.hotword[0]
    })
  }
}
</script>

<style scoped>
#header{
  width: 100%;
  height: 0.88rem;
  z-index: 99999;
  position: fixed;
  background-color: #fff;
}
.logo > a{
  display: inline-block;
  margin-left: 0.3rem;
  line-height: 0.88rem;
  height: 100%;
  width: 1.2rem;
}
.logo > a > img {
  height: 100%;
  width: 1.2rem;
  vertical-align: middle;
}
nav div{
  display: inline-block;
}
.tools{
  width: 5.8rem;
  height: 100%;
  text-align: right;
  line-height: .88rem;
}
.list{
  margin: 0 .2rem 0 0;
  padding: 0;
  height: 100%;
  line-height: .88rem;
  list-style: none;
  font-size: .28rem;
}
.list a{
  color: #666;
  margin: 0 .16rem;
  padding: .1rem 0;
  font-weight: bold;
}
.search{
  border-radius: .3rem;
  height: .6rem;
  line-height: .6rem;
  border: 0;
  background: #f5f5f5;
  width: 70%;
  vertical-align: middle;
  text-align: left;
}
.search form{
  display: inline-block;
  vertical-align: top;
  width: 3.4rem;
}
form input{
  background: 0 0;
  padding: 1px;
  height: .6rem;
  line-height: .6rem;
  border: none;
  font-size: 0.3rem;
}
.search-icon{
  width: .3rem;
  height: .3rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: .2rem;
}
</style>

