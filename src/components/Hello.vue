<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style='color:red'>{{totalProducts}}</div>
    <div style='color:blue'>{{totalUser}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'fetchProducts',
      'fetchUser'
    ])
  },
  computed: {
    ...mapGetters([
      'totalProducts',
      'totalUser'
    ])
  },
  mounted () {
    this.fetchProducts()
    this.fetchUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
