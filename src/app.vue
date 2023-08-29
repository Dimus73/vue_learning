<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Seach..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create post
      </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible" >
      <PostForm
          @createPost="createPost"
      />
    </my-dialog>
    <PostList
        :posts="addSearchSortPost"
        @remove123 = "removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading.....</div>
    <div ref="observer" class="observer"></div>
<!--    <div class="page__wrap">-->
<!--      <div-->
<!--        v-for="page in this.totalPages"-->
<!--        class="page"-->
<!--        :class="{-->
<!--          'current_page': page == currentPage-->
<!--        }"-->
<!--        @click="selectPage(page)"-->
<!--      >-->
<!--        {{ page }}-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>


<script>
  // import * as events from "events";
  import PostForm from "./Components/PostForm.vue";
  import PostList from "@/Components/PostList.vue";
  import axios from "axios";
  import MyInput from "@/Components/UI/MyInput.vue";
  import MyButton from "@/Components/UI/MyButton.vue";
  import MySelect from "@/Components/UI/MySelect.vue";
  export default {
    components: {MySelect, MyButton, MyInput, PostForm, PostList},

    data () {
      return {
        posts : [],
        dialogVisible: false,
        test_input:'',
        isPostsLoading: false,
        selectedSort: "",
        searchQuery: "",
        currentPage:1,
        limitOnPage:10,
        totalPages:0,
        sortOptions: [
          { value: 'title', name: 'By title'},
          { value: 'body', name: 'By body' }
        ]
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
      // selectPage (pageN){
      //   this.currentPage = pageN;
      //   // this.fetchPost();
      // },
      async fetchPost () {
        try {
          if (this.currentPage === 1) this.isPostsLoading = true;
          setTimeout(async ()=>{
            const response = await axios.get ('https://jsonplaceholder.typicode.com/posts',{
              params:{
                _page:this.currentPage,
                _limit:this.limitOnPage,
              }
            });
            console.log('Axios:=>', response);
            // this.posts.length=0;
            this.posts.push (...response.data);
            this.totalPages = Math.ceil(response.headers['x-total-count']/this.limitOnPage );
            if (this.currentPage === 1) this.isPostsLoading = false;
            this.currentPage +=1;

          }, 200)
        } catch (e) {
          console.log('My Error', e);
        } finally {
        }
      },
    },
    mounted () {
      console.log('*******************');
      this.fetchPost();
      const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
          this.fetchPost();
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
    },
    computed: {
      sortPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
        })
      },
      addSearchSortPost () {
        return this.sortPosts.filter((item) =>
            item.body.toLowerCase().indexOf(this.searchQuery.toLowerCase()) != -1
            ||
            item.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) != -1
        )
      }
    },
    watch: {
      // selectedSort (newValue) {
      //   console.log("From search =>", newValue)
      //   this.posts.sort((post1, post2) => {
      //     return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      //   })
      // },
      // currentPage() {
      //   this.fetchPost();
      // }
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

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

}

.page__wrap {
  display: flex;
  width: 30%;
  margin-top: 15px;
  justify-content: space-between;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin: 5px, 5px;
}

.current_page {
  border: 4px double teal;
}

.observer{
  height: 30px;
  background: red ;
}
</style>