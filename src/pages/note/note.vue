<template>
  <div id="content">
    <Header />
    <div class="main" v-for="(item, index) in activeNote" :key="item.noteId">
      <div class="cover">
        <div class="gallery-cover">
          <div class="cube-carousel-container">
            <mt-swipe :auto="0" :show-indicators="false">
              <mt-swipe-item>
                <img class="note-img" src="//ci.xiaohongshu.com/a6fef920-b362-45cd-a554-b774a82e03e8@r_750w_750h_ss1.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img class="note-img" src="//ci.xiaohongshu.com/72a915bb-efea-4953-9475-045f85275e28@r_750w_750h_ss1.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img class="note-img" src="//ci.xiaohongshu.com/e19c69bf-e642-4899-90b3-275d8a73043c@r_750w_750h_ss1.jpg" alt="">
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
      <div class="author">
        <div class="author-msg">
          <div class="author-info">
            <a href="" class="user-header">
              <span>
                <img src="https://img.xiaohongshu.com/avatar/596c3338b46c5d50ccc1962c.jpg@80w_80h_90q_1e_1c_1x.jpg" alt="">
              </span>
            </a>
            <h3 class="username">
              <a href="">{{item.user[0].name}}</a>
              <img src="http://s4.xiaohongshu.com/static/throne/property/f8.png" alt="" class="level-icon">
            </h3>
          </div>
          <a href="#######3" class="focu-btn mint-button mint-button--danger mint-button--small is-plain" style="height:25px">
            关注
          </a>
        </div>
      </div>
      <div class="note">
        <h1 class="title">{{item.title}}</h1>
        <div class="note-content">
          <div class="note-text">
            <p data-v-583419bf="">每次看到好看的口红，总是不放心要自己亲自去试了才敢买<img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_r_tanqi.png?v=2" class="icon"></p>
            <p data-v-583419bf=""><img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_huoli.png?v=2" class="icon">而有些口红…NO！不需要试色，随便买！</p>
            <p data-v-583419bf=""><a data-v-583419bf="" href="" owl="mention/534bee48b4c4d63e1747d62a" class="mention" data-owl-imp="true">@Daisy和戴静</a> 的<a data-v-583419bf="" href="/tag/huati/56a62d2cd1d3b91b879dd9b1" owl="hash_tag/56a62d2cd1d3b91b879dd9b1" class="hash-tag topic" data-owl-imp="true">#阿玛尼红管500</a><a data-v-583419bf="" href="" owl="mention/55714a849eb57838fa5eaeab" class="mention" data-owl-imp="true">@hughken</a> 正在涂的<a data-v-583419bf="" href="/tag/huati/5a531514092b5b205884337c" owl="hash_tag/5a531514092b5b205884337c" class="hash-tag topic" data-owl-imp="true">#YSL黑管416</a>，还有 <a data-v-583419bf="" href="" owl="mention/56596a7de00dd85ca98fdbd9" class="mention" data-owl-imp="true">@Sesshoumaru 🌙</a> 的<a data-v-583419bf="" href="/tag/huati/5a5314fa81f6d12662c2ec32" owl="hash_tag/5a5314fa81f6d12662c2ec32" class="hash-tag topic" data-owl-imp="true">#YSL黑管409</a></p>
            <p data-v-583419bf="">每一个上嘴的颜色简直好看到想亲<img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_r_feiwen.png?v=2" class="icon"></p><p data-v-583419bf="">小红薯快拿出你们<a data-v-583419bf="" href="/tag/huati/5a5ebf49092b5b277f2a4a48" owl="hash_tag/5a5ebf49092b5b277f2a4a48" class="hash-tag topic" data-owl-imp="true">#不用试色可以直接买的口红</a></p><p data-v-583419bf="">盲买不是梦呀红薯盆友们！<img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_deyi.png?v=2" class="icon"></p>
            <p data-v-583419bf="">Tips：发笔记可以像本薯一样加上口红色号话题<img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_r_mengmengda.png?v=2" class="icon">搜不到的色号可以添加<a data-v-583419bf="" href="/tag/huati/5a5c9a53092b5b276e2a4a65" owl="hash_tag/5a5c9a53092b5b276e2a4a65" class="hash-tag topic" data-owl-imp="true">#最热口红色号</a>，发布最多的色号会被建成话题噢<img data-v-583419bf="" src="//ci.xiaohongshu.com/xy_emo_xihuan.png?v=2" class="icon"></p>
          </div>
        </div>
        <ul class="related-tags" >
          <li v-for="(item, index) in item.tagIds" :key="index">
            <a href="">{{item.tagId}}</a>
          </li>
        </ul>
        <div class="note-data">
          发布于 今天 11:52
        </div>
      </div>
      <div class="note-comment">
        <div class="com-top">
          <h3 class="com-title">笔记评论</h3>
        </div>
        <div class="com-content">
          <div class="comment">
            <div class="com-info">
              <div class="user">
                <a href="">
                  <span>
                    <img src="https://img.xiaohongshu.com/avatar/5909ac2f14de4120696fde02.jpg@80w_80h_90q_1e_1c_1x.jpg" alt="">
                  </span>
                </a>
              </div>
              <div class="user-name">
                <h4><a href="">calvin_5837DF74</a></h4>
                <span class="time">今天 16:10</span>
              </div>
            </div>
            <div class="stats">
              <span class="likes">👍
                <span>30</span>
              </span>
              <span>回复</span>
            </div>
            <p class="com-text">风水上说沙发靠墙是有靠山的说法风水上说沙发靠墙是有靠山的说法风水上说沙发靠墙是有靠山的说法风水上说沙发靠墙是有靠山的说法风水上说沙发靠墙是有靠山的说法</p>
          </div>
        </div>
        <div class="com-bottom">
          <a href="">
            <span>
              打开小红书看剩余评论
            </span>
          </a>
        </div>
      </div>
      <div class="related-notes">
        <h3>相关笔记</h3>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
export default {
  data () {
    return {
      activeNote: []
    }
  },
  components: {
    Header
  },
  created () {
    // console.log(this.$store.state.computedNotes)
    let noteId = this.$route.params.id
    // console.log(noteId)
    this.getNoteDetails(noteId)
  },
  methods: {
    getNoteDetails (noteId) {
      let Notes = this.$store.state.computedNotes
      for (let i = 0; i < Notes.length; i++) {
        if (Number(noteId) === Notes[i].noteId) {
          // console.log(Notes[i].details.length)
          // console.log(Notes[i].details)
          this.activeNote.push(Notes[i])
          console.log(this.activeNote)
        }
      }
    }
  },
  computed: {
    computedNotes () {
      return this.$store.state.computedNotes
    }
  }
}
</script>
<style> 
  .related-notes{
    margin-top: 0.1rem;
  }
  .related-notes h3{
    margin: 0;
    padding: .3rem;
    font-size: .3rem;
    font-weight: 500;
    background-color: #fff;
    margin-bottom: .2rem;
  }
  .cover{
    /* position: relative; */
    background: #fff
  }
  .note-img{
    clear: both; 
    display: block; 
    margin:auto; 
    max-height: 100%;
  }
  .cube-carousel-container .mint-swipe{
    height: 375px;
  }
  .author{
    height: 1.2rem;
    background-color: #fff;
    zoom: 1;
  }
  .author-msg{
    margin-left: .3rem;
    height: 1.2rem;
    position: relative;
    border: none;
  }
  .author-info{
    position: relative;
    float: left;
    display: block;
    height: 1.2rem;
    zoom: 1;
  }
  .author-info img{
    float: left;
    display: block;
    /* margin: .18rem 0; */
    width: .84rem;
    height: .84rem;
  }
  .author-info span{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  .author-info a{
    color: #333;
    font-weight: bold;
  }
  .author-info h3{
    max-width: 4.5rem;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 1.2rem;
    font-size: .3rem;
    line-height: 1.2rem;
    margin: 0 0 0 1.04rem;
    color: #333;
  }
  .user-header{
    float: left;
    margin: .18rem 0;
    width: .84rem;
    height: .84rem;
  }
  h3 .level-icon{
    width: .3rem;
    height: .3rem;
    margin-left: .1rem;
    vertical-align: -.04rem;
    float: right;
    position: relative;
    top: 40%;
  }
  .focu-btn{
    float: right;
    margin: .34rem .3rem .34rem 0;
  }
  .note{
    position: relative;
    background-color: #fff;
    padding: .2rem .3rem .3rem;
    overflow: hidden;
  }
  .title{
    margin: 0 0 .2rem;
    font-size: .36rem;
    line-height: .54rem;
    font-weight: bold;
  }
  .note-content{
    position: relative;
    overflow: hidden;
  }
  .note-text{
    position: relative;
    color: #333;
    font-size: .32rem;
    line-height: .48rem;
  }
  .note-text p{
    margin: 0 0 .2rem;
    word-break: break-all;
  }
  .icon{
    margin: 0 .04rem;
    vertical-align: -.02rem;
    width: .3rem;
    height: .3rem;
  }
  .note-text a{
    color: #5b92e1;
    margin: 0 .04rem;
    cursor: pointer;
  }
  .related-tags{
    display: block;
    position: relative;
    padding: 0;
    margin: .2rem 0 0;
    list-style: none;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .related-tags li{
    display: inline-block;
    margin: 0 .08rem;
    padding: 2px .12rem;
    font-size: .22rem;
    line-height: .3rem;
    border-radius: .08rem;
    background-color: transparent;
    border: .02rem solid #5b92e1;
  }
  .related-tags li a{
    color: #5b92e1;
    font-size: .26rem;
    text-decoration: none;
  }
  .note-data{
    margin-top: .2rem;
    color: #999;
    font-size: .26rem;
    line-height: .3rem;
  }
  .note-comment{
    position: relative;
    background-color: #fff;
    margin: .2rem 0;

  }
  .com-top{
    height: .98rem;
    margin-left: .3rem;
    zoom: 1;
    position: relative;
    border: none;
  }
  .com-title{
    padding: .32rem 0;
    font-size: .3rem;
    font-weight: 500;
    color: #333;
  }
  .comment{
    position: relative;
    padding: .3rem .3rem 3rem 0;
    margin-left: .3rem;    
    border-top: 1px solid #ccc;
  }
  .user{
    float: left;
  }
  .user>a{
    width: .64rem;
    height: .64rem;
    display: inline-block;
  }
  .user span{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0;
    border-radius: 50%;
  }
  .user img{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0;
    border-radius: 50%;
  }
  .user-name{
    float: left;
    margin-left: .2rem;
  }
  .user-name h4{
    margin: 0;
    font-size: .3rem;
    font-weight: 500;
    line-height: .34rem;
    color: #333;    
  }
  .user-name a{
    color: #333;
  }
  .stats{
    float: right;
    font-size: .26rem;
    line-height: .3rem;
    color: #666;
  }
  .stats>.likes{
    position: relative;
  }
  .com-text{
    position: relative;
    margin: .25rem 0 0 .8rem;
    font-size: .3rem;
    line-height: .45rem;
    float: left;
  }
  .com-bottom a{
    display: block;
    padding: .18rem 0;
    text-align: center;
    position: relative;
    border: none;
  }
  .com-bottom span{
    display: inline-block;
    padding: .1rem .3rem;
    border: .5px solid #5b92e1;
    border-radius: 2px;
    font-size: .26rem;
    color: #5b92e1;
  }
</style>
