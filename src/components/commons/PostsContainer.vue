<template>
    <div v-if="page == 1">
        <b-container>
            <b-row>
                <Post idPost="1" @onOpenModal="onOpenModal" title="Post 1" mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
                <Post idPost="2" @onOpenModal="onOpenModal" title="Post 2" mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
                <Post idPost="3" @onOpenModal="onOpenModal" title="Post 3" mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
                <Post idPost="4" @onOpenModal="onOpenModal" title="Post 4" mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
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