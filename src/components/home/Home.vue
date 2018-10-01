<template>
  <div>
      <TopBar @change-page="onChangePage" />
      <PostsContainer ref="pContainer" :page="currentPage" :posts="posts" />
      <Login :page="currentPage" @onChangePage="onChangePage" />
  </div>
</template>

<script>
import TopBar from "./TopBar";
import PostsContainer from "./../commons/PostsContainer";
import Login from "./../login/Login";
import EditPost from "./../../providers/EditPost";

export default {
  name: "Home",
  components: {
    TopBar,
    PostsContainer,
    Login
  },
  data() {
    return {
      currentPage: 1,
      posts: []
    };
  },
  methods: {
    onChangePage(idPage) {
      this.currentPage = idPage;
    },
    onLoadPost(data) {
      if (data.data.length != null) {
        this.posts = data.data;
        this.$refs.pContainer.setPosts(data.data);
      }
    }
  },
  mounted() {
    let e = new EditPost();
    e.Edit({}, this.onLoadPost, "posts/get/all");
  }
};
</script>
