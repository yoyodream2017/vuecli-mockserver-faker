<template>
  <div>
    <router-link to='/'>Go to Index</router-link> 
    <i-button @click.native='console'></i-button>
  </div>
</template>

<script>
  export default {
    methods: {
      console () {
        console.log(this)
      }
    }
  }
</script>
