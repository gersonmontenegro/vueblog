<template>
  <div>
    <b-modal ref="theModalR" hide-footer title="Remove post" size="sm">
      {{message}}
      <p class="font-weight-bold">{{title}}</p>
      <div v-if="!hideFoot">
        <b-button variant="primary" @click="onCloseModal">Ok</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "GenericModal",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    message: {
      type: String,
      required: true,
      default: ""
    },
    hideFoot: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openModal() {
      this.$refs.theModalR.show();
    },
    onCloseModal() {
      this.$refs.theModalR.hide();
    }
  }
};
</script>