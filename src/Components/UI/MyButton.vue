<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  border: 2px, solid, teal;
  background: none;
  color: teal;
}
</style>