<template>
  <div class="hello">
    <div class='header'>Original</div>
    <div class='content'>
      <div v-for='item in testArray'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>AddClass-hightlight</div>
    <div class='content'>
      <div v-for='item in addHighlightClass' :class='item.highlight?"hightlight":""'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>SortByName</div>
    <div class='content'>
      <div v-for='item in sortByName'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>SortByAge</div>
    <div class='content'>
      <div v-for='item in sortByAge'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>filterOnAge</div>
    <div class='content'>
      <div v-for='item in filterOnAge'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>findOneAge</div>
    <div class='content'>
      <div>{{findOneAge}}</div>
    </div>
    <div class='header'>modifyObject</div>
    <div class='content'>
      <div>{{modifyObject}}</div>
    </div>
    <div class='header'>testArray3</div>
    <div class='content'>
      <div v-for='item in testArray3'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>testArray4</div>
    <div class='content'>
      <div v-for='item in testArray4()'>{{item.name}}---{{item.age}}</div>
    </div>
    <div class='header'>concatArray</div>
    <div class='content'>
      <div v-for='item in concatArray'>{{item.name}}---{{item.age}}</div>
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
        { id: 3, name: 'a1', age: '19' },
        { id: 4, name: 'a01', age: '182' }
      ],
      highlightId: [1, 2],
      testArray2: [
        { min: '20', max: '30' },
        { min: '20' },
        { max: '30' },
        {}
      ],
      testArray3: [
        { id: 1, name: 'a3', age: '18' },
        { id: 2, name: 'a2', age: '20' },
        { id: 3, name: 'a1', age: '19' },
        { id: 4, name: 'a01', age: '182' }
      ],
      testArray4: () => [
        { id: 1, name: 'a3', age: '18' },
        { id: 2, name: 'a2', age: '20' },
        { id: 3, name: 'a1', age: '19' },
        { id: 4, name: 'a01', age: '182' }
      ]
    }
  },
  computed: {
    addHighlightClass () {
      // Use map and Object.assign to add a new attribute, first {} would copy a item.
      return this.testArray.map(item => Object.assign({}, item, {
        highlight: this.highlightId.includes(item.id)
      }))
    },
    sortByName () {
      // Sort would change the original testArray, use slice() to make a copy, you can test the behaviour when there is no slice function.
      return this.testArray.slice().sort((a, b) => a.name > b.name)
    },
    sortByAge () {
      // Notice: age is String type, not suitable for number-comparison. use + to change String to Number. use ''+ to change Number to String
      return this.testArray.slice().sort((a, b) => +a.age > +b.age)
    },
    filterOnAge () {
      return this.testArray.filter(item => item.age > 19)
    },
    findOneAge () {
      return this.testArray.find(item => item.age > 19)
    },
    modifyObject () {
      // Object.keys().length can be used to check when an object is {}.
      // reduce will not add any nonexsitent attribute while make change on value.
      return this.testArray2.filter(item => Object.keys(item).length)
      .map(item => Object.keys(item).reduce((hash, key) => {
        hash[key] = +item[key]
        return hash
      }, {}))
    },
    concatArray () {
      // look, sort will change the original testArray3 when computed, if one array is used serveral times in an app, to avoid this unintended change, it would be better to return an array from a function like testArray4().... can be used to cancat array.
      //数组三在计算属性时改变了原来的数组，因此如果数组在多处被使用，为了防止这种非故意的改变，最好采用一个函数返回数组的方式，就像数组四。...可以被用来拼接数组。
      return [...this.testArray3.sort((a, b) => a.name > b.name), ...this.testArray4().sort((a, b) => a.name > b.name)]
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

div.content {
  display: flex;
}

div.content div {
  margin-right: 10px;
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
