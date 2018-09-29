<template>
  <div>
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
      label: "OK"
    };
  },
  computed: {
    buttonText() {
      return this.label + " - " + this.value;
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onClickOK() {
      console.log(">>", this.value);
    }
  }
};
</script>
