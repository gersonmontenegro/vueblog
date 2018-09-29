<template>
    <b-button-toolbar v-if="enableButtonBar" class="button-bar">
        <b-button-group >
            <b-button class="defaut-button" variant="success" v-on:click="onChangeViewW">Edit</b-button>
            <b-button class="defaut-button" variant="danger">Remove</b-button>
        </b-button-group>
    </b-button-toolbar>
</template>

<script>
export default {
  name: "ButtonBar",
  data() {
    return {
      show: 1
    };
  },
  props: {
    enableButtonBar: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    showHide() {
      this.show = this.show == 1 ? 2 : 1;
      return this.show;
    },
    onChangeViewW() {
      this.$emit("onChangeViewW", this.showHide());
    }
  }
};
</script>

<style scoped>
.button-bar {
  margin-top: 5px;
}
</style>
