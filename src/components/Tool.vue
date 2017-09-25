<template>
  <div class="hello">
    <div class='header'>Original</div>
    <div style='display: flex;'>
      <div style='margin-right: 10px;' v-for='item in testArray'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>AddClass-hightlight</div>
    <div style='display: flex;'>
      <div style='margin-right: 10px;' v-for='item in addHighlightClass' :class='item.highlight?"hightlight":""'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>SortByName</div>
    <div style='display: flex;'>
      <div style='margin-right: 10px;' v-for='item in sortByName'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>filterOnAge</div>
    <div style='display: flex;'>
      <div style='margin-right: 10px;' v-for='item in filterOnAge'>{{item.name}}---{{item.age}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testArray: [
        { id: 1, name: 'a3', age: '18' },
        { id: 2, name: 'a2', age: '20' },
        { id: 3, name: 'a1', age: '19' }
      ],
      highlightId: [1, 2]
    }
  },
  computed: {
    addHighlightClass () {
      // use map and Object.assign to add a new attribute
      return this.testArray.map(item => Object.assign(item, {
        highlight: this.highlightId.includes(item.id)
      }))
    },
    sortByName () {
      // sort would change the original testArray, use slice() to make a copy, you can test the behaviour when there is no slice function.
      return this.testArray.slice().sort((a, b) => a.name > b.name)
    },
    filterOnAge () {
      return this.testArray.filter(item => item.age > 19)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

div.header {
  text-align: left;
  margin-top: 10px;
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

.hightlight {
  color: blue;
}
</style>
