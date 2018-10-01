<template>
    <div v-if="page == 1">
        <AddPost @setPosts="setPosts" v-if="edit" />
        <b-container>
            <b-row>
              <Post :edit="edit" @onFinishTransition="onFinishTransition" :ref="'post_' + index" v-for="(post, index) in postsFromProp" :key="index" :index="index" idPost="post.id" @onOpenModal="onOpenModal" :title="post.title" :mainText="post.text != null ? post.text : ''" />
            </b-row>
        </b-container>
        <RemoveConfirmation ref="ModalReference" />
    </div>
</template>

<script>
import Post from "./Post";
import RemoveConfirmation from "./../edit/RemoveConfirmation";
import FetchData from "./../../providers/FetchData";
import AddPost from "./../edit/AddPost";

export default {
  name: "PostsContainer",
  data() {
    return {
      postsFromProp: this.posts,
      edit: false
    };
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    Post,
    RemoveConfirmation,
    AddPost
  },
  methods: {
    onOpenModal(id, title, k) {
      this.$refs.ModalReference.openHideModal(
        "open",
        id,
        title,
        k,
        this.postsFromProp,
        this.$refs["post_" + k]
      );
    },
    onFinishTransition(index) {
      this.$refs.ModalReference.onCloseModal();
    },
    setPosts(data) {
      this.postsFromProp = data;
    },
    loadData() {
      if (localStorage.token != null && localStorage.token != "") {
        this.edit = true;
      } else {
        this.edit = false;
      }
    }
  },
  mounted() {
    // this.loadData();
  },
  updated() {
    // console.log("lili???");
    this.loadData();
  }
};
</script>