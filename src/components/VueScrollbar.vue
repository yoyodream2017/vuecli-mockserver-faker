<template>
  <div>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
      <div class="scroll-me">
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="clearfix"></div>
      </div>
    </vue-scrollbar>
  </div>
</template>

<script>

  import VueScrollbar from 'vue2-scrollbar'
  require('../assets/vue2-scrollbar.css')
  require('../assets/app.css')

  export default {
    components: { VueScrollbar }
  }

</script>
