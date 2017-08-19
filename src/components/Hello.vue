<template>
  <div class="hello">
    <h1>{{ isLoading }}</h1>
    <div style='color:red'>{{totalProducts}}</div>
    <div style='color:blue'>{{totalUser}}</div>
    <div @click='send'>send</div>
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
    ]),
    test () {
      console.log('请求成功')
    },
    send () {
      this.fetchProducts().then((res) => {
        this.$status(res, function (that) {
          that.test()
        }, this)
      })
    }
  },
  computed: {
    ...mapGetters([
      'totalProducts',
      'totalUser',
      'isLoading'
    ])
  },
  mounted () {
    this.fetchUser().then((res) => {
      this.$status(res, function (that) {
        that.test()
      }, this)
    })
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
