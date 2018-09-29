<template>
  <div>
      <TopBar @change-page="onChangePage" />
      <PostsContainer :page="currentPage"  />
      <Login :page="currentPage" />
  </div>
</template>

<script>
import TopBar from "./TopBar";
import PostsContainer from "./../commons/PostsContainer";
import Login from "./../login/Login";

export default {
  name: "Home",
  components: {
    TopBar,
    PostsContainer,
    Login
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    onChangePage(idPage) {
      this.currentPage = idPage;
    }
  }
};
</script>
