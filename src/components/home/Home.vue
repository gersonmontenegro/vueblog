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
import FetchData from "./../../providers/FetchData";

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
    }
  },
  mounted() {
    let f = new FetchData();
    f.DataRequest({}, "posts/get/all").then(data => {
      if (data.data.length != null) {
        this.posts = data.data;
        this.$refs.pContainer.setPosts(data.data);
      }
    });
  }
};
</script>
