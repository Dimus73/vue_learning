<template>
  <input v-bind:value="modelValue" @input="onInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue:{
      type: [String, Number],
    }
  },
  data () {
    return {
      testInput:''
    }
  },
  methods:{
    onInput (e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  border: 2px, solid, teal;
  margin-top: 15px;
}

</style>