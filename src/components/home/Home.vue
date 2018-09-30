<template>
  <div>
      <TopBar @change-page="onChangePage" />
      <PostsContainer :page="currentPage" :posts="posts" />
      <Login :page="currentPage" @onChangePage="onChangePage" />
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
      currentPage: 1,
      posts: [
        {
          id: 1,
          text:
            "Listen for a custom event on the current vm. Events can be triggered by vm.$emit. The callback will receive all the additional arguments passed into these event-triggering methods.",
          title: "Usage methods"
        },
        {
          id: 2,
          text:
            "Breadcrumb navigation lets you jump to symbols and files in your workspace.",
          title: "Breadcrumbs"
        },
        {
          id: 3,
          text: "Apply code fixes while reviewing warnings and errors.",
          title: "Quick Fixes from Problems panel"
        },
        {
          id: 4,
          text: "Elevation no longer required during Windows setup.",
          title: "User setup on Windows"
        },
        {
          id: 5,
          text:
            "Alt+click to select blocks of text in the integrated terminal.",
          title: "Terminal column selection"
        }
      ]
    };
  },
  methods: {
    onChangePage(idPage) {
      this.currentPage = idPage;
    }
  }
};
</script>
