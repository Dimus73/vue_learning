<template>
  <div>
    <form @submit.prevent action="">
      <h4>Create post</h4>
<!--      v-bind:value="post.title"-->
<!--      @input = "post.title = $event.target.value"-->
      <input
          v-model="post.title"
          class="input"
          placeholder="title"
      >
      <input
          v-model="post.body"
          class="input"
          placeholder="body"
      >
      <my-button
          style="align-self: flex-end; margin-top: 15px"
          @click="createPost"
      >
        == Add post ==
      </my-button>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit ('createPost', this.post);
      this.post = {
        title: '',
        body: '',
      }
    },

  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  padding: 10px 15px;
  border: 2px, solid, teal;
  margin-top: 15px;
}



</style>