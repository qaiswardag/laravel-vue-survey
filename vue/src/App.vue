<script>
import {mapState} from 'vuex'
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {HelloWorld},
  computed: {
    ...mapState(['user'])
  },


}

</script>

<template>
  <div>
    <div class="text-center border p-8">
      example 1: {{ user }}
    </div>

    <HelloWorld msg="this is a prop"></HelloWorld>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
