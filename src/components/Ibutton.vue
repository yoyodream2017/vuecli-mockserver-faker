<template>
    <button @click='console2'>hi</button>
</template>

<script>
export default {
  methods: {
    console2 () {
      console.log(this)
    }
  }
}
</script>
