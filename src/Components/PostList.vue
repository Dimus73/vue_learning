<template>
  <div>
    <h3>Users list:</h3>
    <PostItem
        :post="post"
        v-for="post in posts"
    />
  </div>
</template>

<script>
import PostItem from "@/Components/PostItem.vue";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style lang="scss" scoped>



</style>