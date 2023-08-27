<template>
  <div class="app">
    <h1>Posts page</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
          style="margin: 15px 0;"
      >
        Create post
      </my-button>
    </div>
    <my-dialog v-model:show="dialogVisible" >
      <PostForm
          @createPost="createPost"
      />
    </my-dialog>
    <PostList
        :posts="posts"
        @remove123 = "removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading.....</div>
  </div>
</template>


<script>
  // import * as events from "events";
  import PostForm from "./Components/PostForm.vue";
  import PostList from "@/Components/PostList.vue";
  import axios from "axios";
  import MyInput from "@/Components/UI/MyInput.vue";
  import MyButton from "@/Components/UI/MyButton.vue";
  export default {
    components: {MyButton, MyInput, PostForm, PostList},

    data () {
      return {
        posts : [],
        dialogVisible: false,
        test_input:'',
        isPostsLoading: false,
      }
    },
    methods: {
      createPost(newPost) {
        this.posts.push (newPost);
        this.dialogVisible = false;
      },
      removePost (post) {
        console.log('Post=>', post)
        this.posts = this.posts.filter ( v => v.id != post.id )
      },
      showDialog () {
        this.dialogVisible = true;
      },
      async fetchPost () {
        try {
          this.isPostsLoading = true;
          setTimeout(async ()=>{
            const response = await axios.get ('https://jsonplaceholder.typicode.com/posts?_limit=10');
            console.log('Axios:=>', response)
            this.posts.push (...response.data);
            this.isPostsLoading = false;

          }, 2000)
        } catch (e) {
          console.log('My Error', e);
        } finally {
        }
      },
    },
    mounted () {
      console.log('*******************');
      this.fetchPost();
    },


  }
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

</style>