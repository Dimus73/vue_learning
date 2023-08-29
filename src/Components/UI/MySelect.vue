<template>
  <select mode="modelValue" @change="changeOption">
    <option disabled selected value="">Chose select</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: ()=>[],
    },
  },
  methods:{
    changeOption (e) {
      console.log('In select', e)
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


