<template>

<router-view :key="$route.fullPath" />

</template>
<script>
export default {
  data(){
    return{
show:"block"
    }
  },
  mounted(){
    this.$store.dispatch('FetchPosts')

  },beforeCreate(){

  }
}

</script>
<style>



#app {
  font-family: misans,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
