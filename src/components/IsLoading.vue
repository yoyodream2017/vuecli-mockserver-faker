<template>
    <div class='full-page' v-show='isLoading'>
      <img class='center' src="../../static/load.gif" height="60" width="60" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style scoped>
	.full-page {
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    opacity: 0.3;
    z-index:999;
  }
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
  }
</style>
