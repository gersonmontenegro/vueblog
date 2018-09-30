<template>
    <b-button-toolbar v-if="enableButtonBar" class="button-bar">
        <b-button-group >
            <b-button size="sm" class="defaut-button" variant="success" v-on:click="onChangeViewW">{{buttonLabel}}</b-button>
            <b-button size="sm" class="defaut-button" variant="danger" v-on:click="onRemovePost">Remove</b-button>
        </b-button-group>
    </b-button-toolbar>
</template>

<script>
import "./css/ButtonBar.css";

export default {
  name: "ButtonBar",
  data() {
    return {
      show: 1,
      buttonLabel: "Edit"
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
      this.buttonLabel = this.show == 2 ? "Save" : "Edit";
    },
    onRemovePost() {
      this.$emit("onOpenModal");
    }
  }
};
</script>
