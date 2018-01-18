<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import api from './api'
export default {
  name: 'app',
  created () {
    this.$http.get(api.host + '/note').then(res => {
      this.data = res.data
      this.$store.commit('SAVE_COMPUTED_NOTES', this.data)
    })
  },
  methods: {
    // computedNotes () {
    //   this.$store.commit('SAVE_COMPUTED_NOTES', this.notes)
    // }
  }
}
</script>

<style>
body{
  font-size: 0.26rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
