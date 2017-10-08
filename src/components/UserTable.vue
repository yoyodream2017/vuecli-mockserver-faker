<template>
  <div class='user-table'>
    <div class="user-table__header">
      <div class='check-box' :class="allChecked?'check-box__checked':''" @click='selectAllUser'></div>
      <div class='user-table__column' v-for="item in _userData.tableHeader">
        <div v-if="item==='name'" :class="changeSort?'sortable__descending':'sortable__ascending'" @click='sortByName'> {{item}} </div>
        <div v-else>{{item}}</div>
      </div>
      <div class='last__column'>delete</div>
    </div>
    <div v-if="dataLength > 0">
      <div class="user-table__body">
        <div class='user-table__row' v-for="item in _userData.data">
          <div class='check-box' :class="item.checked?'check-box__checked':''" @click='selectUser(item.id)'>{{item.index}}</div>
          <div class='user-table__column'>{{item.name}}</div>
          <div class='user-table__column'>{{item.website}}</div>
          <div class='user-table__column'>{{item.email}}</div>
          <div class='delete last__column' @click='deleteUser'>delete</div>
        </div>
      </div>
    </div>
    <div v-else>There is no data.</div>
  </div> 
</template>

<script>
import assign from 'object-assign'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      selectedId: [],
      allChecked: false,
      changeSort: true
    }
  },
  props: {
    userData: {
      type: Object,
      default: () => {} // Invalid default value for prop "userData": Props with type Object/Array must use a factory function to return the default value.
    }
  },
  computed: {
    _userData () {
      return this.userData // change sort by name can not be set here, since data is down from parent component.
    },
    dataLength () {
      if (this.userData.data) {
        return this.userData.data.length
      }
    }
  },
  methods: {
    ...mapActions([
      'setUser',
      'sortName'
    ]),

    deleteUser () {
    },

    selectUser (id) {
      // possible realization for checkbox
      let selectedId = this.selectedId
      if (selectedId.includes(id)) {
        const index = selectedId.indexOf(id)
        selectedId.splice(index, 1)
      } else {
        selectedId.push(id)
      }

      if (selectedId.length === this._userData.data.length) {
        this.allChecked = true
      } else {
        this.allChecked = false
      }

      this.updateUserStore(selectedId)

      this.setUser(this._userData)
    },

    selectAllUser () {
      let selectedId = this.selectedId
      this.allChecked = !this.allChecked
      if (this.allChecked) {
        selectedId = this._userData.data.map(data => {
          return data.id
        })
      } else {
        selectedId = []
      }
      this.updateUserStore(selectedId)
    },

    updateUserStore (selectedId) {
      this._userData.data.map(data => {
        return assign(data, {
          checked: selectedId.includes(data.id)
        })
      })
    },

    sortByName () {
      this.changeSort = !this.changeSort
      this.sortName(this.changeSort)
    }
  }
}
</script>
<style>
.user-table {
  border: 2px solid yellow;
  padding: 5px 20px;
  min-width: 800px;
  
}
.user-table__header {
  display: flex;
  font-weight: 800;
}

.check-box {
  width: 10px;
  height: 10px;
  position: relative;
  align-self: center;
  cursor: pointer;
  margin-right: 20px;
}

.check-box:before, .check-box:after {
  content: '';
  position: absolute;
  box-sizing: border-box;
}

.check-box:before {
  width: 10px;
  height: 10px;
  border: 1px solid black;
}

/*This is an example for build a style for table component checkbox style*/
/* style one */
/**
.check-box__checked:after {
  position: absolute;
  top: 2px;
  left: 6px;
  width: 8px;
  height: 4px;
  border-bottom: 1px solid green;
  border-left: 1px solid green;
  transform: rotate(-45deg);
}
**/

/* style two */

.check-box__checked:after {
  position: absolute;
  width: 10px;
  height:10px;
  background-color: red;
}


.user-table__row {
  display: flex;
}

.user-table__column {
  text-transform: capitalize;
  text-align: left;
  flex: 1;
}

.delete {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.last__column {
  text-transform: capitalize;
  width: 60px;
}

.sortable__descending, .sortable__ascending {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.sortable__descending:after, .sortable__ascending:after {
  content: '';
  position: absolute;
  top: 10px;
  right: -12px;
  box-sizing: border-box;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}

.sortable__descending:after {
  border-top: 6px solid grey;
}

.sortable__ascending:after {
  border-bottom: 6px solid grey;
}

</style>
