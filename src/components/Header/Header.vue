<template>
  <div id="header">
    <nav>
      <div class="logo">
        <a href="/"><img src=".\images\logo-be88e12.png" alt=""></a>
      </div>
      <div class="tools">
        <div class="list"><router-link tag="a" to="/collections">精选</router-link></div>
        <div class="search" style="display: inline-block" v-show="!searchActive">
          <span><img src="./images/search.png" alt="" class="search-icon"></span>
          <form action="">
            <input type="serch" name="search" id="" :placeholder="word + hot" @focus="changActive()">
          </form>
        </div>
        <div class="search-active" style="display: inline-block" v-show="searchActive">
          <form action="">
          <span><img src="./images/search.png" alt="" class="search-icon"></span>
            <input type="serch" name="search" id="" :placeholder="word + hot">
          </form>
          <span @click="changActive()">取消</span>
        </div>
      </div>
    </nav>
    <div class="search-page" v-show="searchActive">
      <div class="search-recommend">
        <div class="search-title">
          热门搜索
        </div>
        <div class="search-keywords">
          <span class="keywords" v-for="(item, index) in hotword" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      hot: '',
      hotword: [],
      word: '大家都在搜：',
      searchActive: false
    }
  },
  created () {
    this.$http.get(api.host + '/hotword').then(res => {
      this.hotword = res.data[0].data
      // console.log(res.data[0].data)
      this.hot = this.hotword[0]
    })
  },
  methods: {
    changActive () {
      this.searchActive = !this.searchActive
    }
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
nav{
  /* position: relative; */
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
.search-page{
  /* z-index: 9999999999999999999; */
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 1000px;
}
.search-active{
  width: 100%;
  position: absolute;
  left: 0;
  text-align: left;
  background-color: #fff;
}
.search-active form{
  background-color: #f5f5f5;
  width: 6rem;
  border-radius: .3rem;
  margin-left: .3rem;
  height: .7rem;
  line-height: .7rem;
  margin-top: .1rem;
  display: inline-block;
}
.search-active>span{
  cursor: pointer;
  position: absolute;
  right: .3rem;
  font-size: .32rem;
  text-align: center;
  color: #999;
}
.search-title{
  height: .8rem;
  line-height: .88rem;
  font-size: .26rem;
  background: #f5f8fa;
  width: 100%;
  padding: 0 .4rem;
  color: #999;
}
.search-keywords{
  width: 100%;
  padding: .3rem;
  color: #666;
  white-space: normal;
  font-size: .28rem;
}
.keywords{
  cursor: pointer;
  display: inline-block;
  padding: .2rem .3rem;
  margin: 0 .2rem .2rem 0;
  line-height: .3rem;
  background: #f5f8fa;
  border-radius: 4px;
}
</style>

