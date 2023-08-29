<template>
  <div>
    <form @submit.prevent action="">
      <h4>Create post</h4>
      <my-input
          v-model="post.title"
          placeholder="title"
      />
      <my-input
          v-model="post.body"
          placeholder="body"
      />
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



import MyInput from "@/Components/UI/MyInput.vue";

export default {
  components: {MyInput},
  data(){
    return {
      post: {
        title: '',
        body: '',
      },
      testInputVar:''
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
  },

}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>