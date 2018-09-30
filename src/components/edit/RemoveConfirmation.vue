<template>
  <div>
    <b-modal ref="theModalR" hide-footer title="Remove post" size="sm">
      ¿Are you sure about remove this post?
      <p class="font-weight-bold">{{title}}</p>
      <div>
        <b-button variant="danger" @click="onConfirmRemove">Remove</b-button>
        <b-button variant="primary" @click="onCloseModal">Cancel</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "RemoveConfirmation",
  data() {
    return {
      modalShow: this.open === "1" ? true : false,
      title: "",
      idPost: 0,
      kItem: 0,
      postsList: [],
      itemReference: null
    };
  },
  methods: {
    openHideModal(action, id, title, k, posts, itemReference) {
      this.idPost = id;
      this.title = title;
      this.kItem = k;
      this.postsList = posts;
      this.itemReference = itemReference;
      if (action == "open") {
        this.$refs.theModalR.show();
      } else {
        this.$refs.theModalR.hide();
      }
    },
    onConfirmRemove() {
      this.itemReference[0].initRemove(this.postsList, this.kItem);
    },
    onCloseModal() {
      this.$refs.theModalR.hide();
    },
    removeItemFromArray() {
      this.postsList.splice(this.kItem, 1);
      this.$refs.theModalR.hide();
    }
  }
};
</script>