<template>
  <div id="content">
    <Header />
    <div class="main">
      <captionList />
      <div>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in bannar" :key="index">
            <img :src="item.bannarpic" alt="" class="bannar">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 笔记 -->
      <div class="notes-layout"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
        <!-- 左列表 -->
        <div class="left-layout">
          <!-- 笔记 -->
          <div class="note-item" v-for="(item, index) in notesL" :key="item.num">
            <!-- 笔记图片 -->
            <div class="note-pic">
              <a href="">
                <div>
                  <img alt="" :src="item.notePicl">
                </div>
              </a>
            </div>
            <!-- 笔记内容 -->
            <div class="content">
              <h3 class="note-title">{{item.title}}</h3>
              <p class="note-desc">{{item.details}}</p>
            </div>
            <!-- 笔记用户信息 -->
            <div class="note-info">
              <div class="note-author">
                <a href="" class="name">{{item.user[0].name}}</a>
              </div>
              <span class="likes"><img src="./images/love.png" alt="" class="love">{{item.num}}</span>
            </div>
          </div>
        </div>
        <div class="right-layout">
          <!-- 笔记 -->
          <div class="note-item" v-for="(item, index) in notesR" :key="item.user.userId">
            <!-- 笔记图片 -->
            <div class="note-pic">
              <a href="">
                <div>
                  <img :src="item.notePicm" alt="">
                </div>
              </a>
            </div>
            <!-- 笔记内容 -->
            <div class="content">
              <h3 class="note-title">{{item.title}}</h3>
              <p class="note-desc">{{item.details}}</p>
            </div>
            <!-- 笔记用户信息 -->
            <div class="note-info">
              <div class="note-author">
                <a href="" class="name">{{item.user[0].name}}</a>
              </div>
              <span class="likes"><img src="./images/love.png" alt="" class="love">{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Header from '../../components/Header/Header'
import captionList from '../../components/caption/caption'
import api from '@/api/index'
export default {
  data () {
    return {
      bannar: [],
      count: 0,
      notesL: [],
      notesR: [],
      notes: []
    }
  },
  methods: {
    treat (data) {
      if (this.activeNotesIndex === 0) {
        for (let i = 0; i < data.length; i++) {
          if (i % 2 === 0) {
            this.notesL.push(this.notes[i])
          } else {
            this.notesR.push(this.notes[i])
          }
        }
      } else {
        this.treat(this.$store.state.activeNotes)
      }
    },
    getNote (start) {
      if (this.count <= 120) {
        this.$http.get(api.host + '/note?_start=' + start + '&_limit=20').then(res => {
          this.notes = res.data
          this.treat(this.notes)
        })
      }
    },
    loadMore () {
      if (this.count >= 120) {
        this.loading = false
      } else {
        this.loading = true
      }
      setTimeout(() => {
        this.getNote(this.count)
        this.loading = false
      }, 2000)
      this.count += 20
    }
  },
  created () {
    this.$http.get(api.host + '/note?_start=0&_limit=20').then(res => {
      this.notes = res.data
      this.treat(this.notes)
    })
    this.$http.get(api.host + '/bannar').then(res => {
      this.bannar = res.data
    })
  },
  components: {
    Header,
    captionList
  },
  computed: {
    computedNotes () {
      return this.$store.state.computedNotes
    },
    activeNotes () {
      return this.$store.state.activeNotes
    },
    activeNotesIndex () {
      return this.$store.state.activeNotesIndex
    }
  },
  watch: {
    activeNotesIndex (newVal) {
      let activeNotes = this.activeNotes
      this.notesL = []
      this.notesR = []
      for (let i = 1; i < activeNotes.length; i++) {
        if (i % 2 === 0) {
          this.notesL.push(activeNotes[i])
        } else {
          this.notesR.push(activeNotes[i])
        }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
