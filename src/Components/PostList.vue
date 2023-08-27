<template>
  <div v-if="posts.length > 0">
    <h3>Users list:</h3>
    <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove123', post)"
    />
  </div>
  <div v-else>
    <h2 style="color: red">Posts list are empty</h2>
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