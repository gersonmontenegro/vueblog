<template>
    <div>
        <b-button v-on:click="onClickViewMore" class="defaut-button" variant="link">{{buttonLabel}}</b-button>
    </div>
</template>

<script>
export default {
  name: "ViewMoreButton",
  data() {
    return {
      buttonLabel: "View more >>"
    };
  },
  props: {
    cutSize: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClickViewMore() {
      if (this.buttonLabel == "View more >>") {
        this.buttonLabel = "View less <<";
        this.$emit("onClickViewMore", 10000);
      } else {
        this.buttonLabel = "View more >>";
        this.$emit("onClickViewMore", 100);
      }
    }
  }
};
</script>