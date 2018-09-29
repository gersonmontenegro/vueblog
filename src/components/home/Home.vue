<template>
  <div>
      <TopBar />
      <PostsContainer />
  </div>
</template>

<script>
import TopBar from "./TopBar";
import PostsContainer from "./../commons/PostsContainer";

export default {
  name: "Home",
  components: {
    TopBar,
    PostsContainer
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
