<template>
  <div>
    <is-loading></is-loading>
    <div class='title'> This is the user table page </div>
    <user-table :userData=_userData></user-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserTable from './UserTable'
import assign from 'object-assign'
export default {
  name: 'estest',
  data () {
    return {
      tableHeader: [
        'name',
        'website',
        'email'
      ]
    }
  },
  components: {
    'user-table': UserTable
  },
  methods: {
    ...mapActions([
      'sortName'
    ])
  },
  computed: {
    ...mapGetters([
      'totalUser',
      'isLoading'
    ]),
    _userData: {
      get () {
        const totalUser = this.totalUser
        const tableHeader = this.tableHeader
        return assign({}, totalUser, { tableHeader })
      }
    }
  },
  mounted () {
    this.sortName(true).then((res) => {
      this.$status(res)
    })
  }
}
</script>

<style scoped>
</style>
