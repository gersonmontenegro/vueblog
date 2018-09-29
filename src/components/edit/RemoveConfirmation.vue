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
      title: '',
      idPost: 0
    }
  },
  methods: {
    openHideModal(action, id, title){
      this.idPost = id;
      this.title = title;
      if(action == 'open'){
        this.$refs.theModalR.show();
      }else{
        this.$refs.theModalR.hide();
      }
    },
    onConfirmRemove() {
      // this.$refs.myModalRef.show();
      console.log(">", this.$refs);
    },
    onCloseModal() {
      this.$refs.theModalR.hide();
    }
  }
};
</script>