<template>
  <div class="app">
    <form @submit.prevent action="">
      <h4>Create post</h4>
      <input
          v-bind:value="title"
          @input = "title = $event.target.value"
          class="input"
          placeholder="title"
      >
      <input
          v-bind:value="body"
          @input = "body = $event.target.value"
          class="input"
          placeholder="body"
      >
      <button class="btn" @click="createPost">== Add post ==</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Title:</strong>{{post.title}}</div>
      <div><strong>Body:</strong>{{post.body}}</div>
    </div>
  </div>
</template>


<script>
  import * as events from "events";

  export default {
    computed: {
      events() {
        return events
      }
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
        title: '',
        body: '',
      }
    },
    methods: {
      createPost() {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.title = '';
        this.body = '';
        this.posts.push (newPost);
      },

      inputTitle (e) {
        e.preventDefault();
        this.title = e.this.value;
      },

      inputBody (e) {
        e.preventDefault();
        this.body = e.this.value;
      },

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

form {
  display: flex;
  flex-direction: column;
}

.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  padding: 10px 15px;
  border: 2px, solid, teal;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px 15px;
  border: 2px, solid, teal;
  background: none;
  color: teal;
}

</style>