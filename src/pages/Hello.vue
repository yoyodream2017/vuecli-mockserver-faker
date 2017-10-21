<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link to='/user'>Go to User</router-link>
    <router-link to='/tool'>Go to Tool</router-link>
    <router-link to='/dataview'>Go to DataView</router-link>
    <router-link to='/scrollbar'>Go to Scrollbar</router-link> 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to use vuecli-faker-mockserver'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
