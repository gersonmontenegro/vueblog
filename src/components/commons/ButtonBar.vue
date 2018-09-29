<template>
    <b-button-toolbar v-if="enableButtonBar" class="button-bar">
        <b-button-group >
            <b-button class="defaut-button" variant="success">Edit</b-button>
            <b-button class="defaut-button" variant="danger">Remove</b-button>
        </b-button-group>
    </b-button-toolbar>
</template>

<script>
export default {
  name: "ButtonBar",
  props: {
    enableButtonBar: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.button-bar {
  margin-top: 5px;
}
</style>
