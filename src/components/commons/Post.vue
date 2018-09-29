<template>
    <b-col md="6" style="background-color: white">
        <ButtonBar @onChangeViewW="onChangeViewW" enableButtonBar />
        <div >
            <h3>Post title</h3>
            <span v-if="show == 1" v-html="textFromProp"></span>
        </div >
        <wysiwyg class="wygiwys-style" v-if="show == 2" v-model="textFromProp" />
        <ViewMoreButton />
    </b-col>
</template>

<script>
import Vue from "vue";
import ButtonBar from "./ButtonBar";
import ViewMoreButton from "./ViewMoreButton";
import wysiwyg from "vue-wysiwyg";

import "vue-wysiwyg/dist/vueWysiwyg.css";
import "./css/Post.css";

Vue.use(wysiwyg, {
  hideModules: {
    image: true,
    table: true,
    separator: true
  }
});

export default {
  name: "Post",
  data() {
    return {
      show: 1,
      textFromProp: this.mainText
    };
  },
  props: {
    mainText: {
      type: String,
      required: true
    }
  },
  components: {
    ButtonBar,
    ViewMoreButton
  },
  methods: {
    onChangeViewW(value) {
      this.show = value;
    }
  }
};
</script>