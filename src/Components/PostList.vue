<template>
  <div v-if="posts.length > 0">
    <h3>Users list:</h3>
    <transition-group name="posts-list">
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove123', post)"
      />
    </transition-group>
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

  .posts-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .posts-list-enter-active,
  .posts-list-leave-active {
    transition: all 0.4s ease;
  }
  .posts-list-enter-from,
  .posts-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }

  .posts-list-move {
    transition: transform 0.4s ease;
  }

</style>