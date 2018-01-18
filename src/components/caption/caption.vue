<template>
  <div class="captionList">
    <div v-for="(item, index) in navList" :key="item.id" @click="changeData(index)" :class="{'active': activeCaption === index}">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      navList: [],
      changeNote: [],
      activeCaption: 0
    }
  },
  created () {
    this.$http.get(api.host + '/categories').then(res => {
      this.navList = res.data
    })
    this.$http.get(api.host + '/note').then(res => {
      this.notes = res.data
    })
  },
  methods: {
    changeData (index) {
      let id = this.navList[index].id
      this.changeNote = []
      for (let j = 0; j < this.notes.length; j++) {
        if (id === this.notes[j].categoryId) {
          // console.log(this.notes[j])
          this.changeNote.push(this.notes[j])
        }
      }
      this.activeCaption = index
      this.$store.commit('ACTIVE_COMPUTED_NOTES', this.changeNote)
      this.$store.commit('ACTIVE_COMPUTED_NOTESINDEX', index)
    }
  }
}
</script>
<style>
  .captionList{
    white-space: nowrap;
    color: #999;
    overflow-x: scroll;
    padding: .3rem .1rem;
  }
  .captionList > div{
    display: inline-block;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    padding: 0 .4rem;
    border: .01rem solid #e6e6e6;
    background: #fff;
    margin: 0 .1rem;
    border-radius: .24rem;
    text-align: center;
    cursor: pointer;
  }
  .active{
    font-weight: 800;
    color: #333;
  }

</style>

