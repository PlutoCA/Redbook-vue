<template>
  <div class="not">
    <img src="//s4.xiaohongshu.com/static/img/v2/detail/error/404.jpg?s=1480565823" alt="">
    <!-- <img src="./404.gif" alt=""> -->
    <h1>404资源未找到</h1>
    <router-link to="/" tag="span">点此返回主页</router-link>
  </div>
</template>
<style>
.not img{
  width: 100%;
}
.not h1{
  font-size: 0.8rem;
  text-align: center;
}
.not span{
  display: block;
  text-align: center;
  color: red;
}
</style>

