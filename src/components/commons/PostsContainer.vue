<template>
    <div v-if="page == 1">
        <b-container>
            <b-row>
              <Post v-for="(post, index) in posts" :key="index" idPost="post.id" @onOpenModal="onOpenModal" :title="post.title" :mainText="post.text" />
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
  methods:{
    onOpenModal(id, title){
      this.$refs.ModalReference.openHideModal('open', id, title);
    }
  }
};
</script>