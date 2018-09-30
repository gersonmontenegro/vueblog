<template>
    <div v-if="page == 1">
        <b-container>
            <b-row>
              <Post @onFinishTransition="onFinishTransition" :ref="'post_' + index" v-for="(post, index) in postsFromProp" :key="index" :index="index" idPost="post.id" @onOpenModal="onOpenModal" :title="post.title" :mainText="post.text" />
            </b-row>
        </b-container>
        <RemoveConfirmation ref="ModalReference" />
    </div>
</template>

<script>
import Post from "./Post";
import RemoveConfirmation from "./../edit/RemoveConfirmation";

export default {
  name: "PostsContainer",
  data() {
    return {
      postsFromProp: this.posts
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
    RemoveConfirmation
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
    }
  }
};
</script>