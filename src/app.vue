<template>
  <div class="app">
    <PostForm
        @createPost="createPost"
    />
    <PostList :posts="posts"/>
  </div>
</template>


<script>
  // import * as events from "events";
  import PostForm from "./Components/PostForm.vue";
  import PostList from "@/Components/PostList.vue";
  export default {
    components: {PostForm, PostList},
    computed: {
      // events() {
      //   return events
      // }
      PostList,
      PostForm,
    },
    data () {
      return {
        posts : [
            {
              id:1,
              title: 'Java post',
              body: 'Java post body bla bla bla'
            },
            {
              id:3,
              title: 'Java post2',
              body: 'Java post body bla bla bla2'
            },
            {
              id:2,
              title: 'Java post3',
              body: 'Java post body bla bla bla3'
            },
        ],
      }
    },
    methods: {
      createPost(newPost) {
        this.posts.push (newPost);
      },
      //
      // inputTitle (e) {
      //   e.preventDefault();
      //   this.title = e.this.value;
      // },
      //
      // inputBody (e) {
      //   e.preventDefault();
      //   this.body = e.this.value;
      // },

    }

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


</style>