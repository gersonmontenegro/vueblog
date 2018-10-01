<template>
  <transition name="slide-fade" v-on:after-leave="afterLeave">
    <b-col v-if="showItem" md="6" class="border">
        <ButtonBar v-if="edit" @onOpenModal="onOpenModal" @onChangeViewW="onChangeViewW" enableButtonBar />
        <div >
            <h3>{{title}}</h3>
            <span v-if="show == 1" v-html="initText"></span>
        </div >
        <wysiwyg class="wygiwys-style" v-if="show == 2" v-model="textFromProp" />
        <ViewMoreButton v-if="show == 1" :cutSize="cutSize" @onClickViewMore="onClickViewMore" />
    </b-col>
  </transition>
</template>

<script>
import Vue from "vue";
import ButtonBar from "./ButtonBar";
import ViewMoreButton from "./ViewMoreButton";
import wysiwyg from "vue-wysiwyg";
import EditPost from "./../../providers/EditPost";
import Helper from "./../../providers/Helper";

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
      textFromProp: this.mainText,
      cutSize: 100,
      showItem: true,
      postList: [],
      removeIndex: -1
    };
  },
  props: {
    mainText: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    idPost: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    edit: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {
    ButtonBar,
    ViewMoreButton
  },
  computed: {
    initText() {
      if (this.textFromProp != null) {
        if (this.textFromProp.length >= this.cutSize) {
          return this.textFromProp.substring(0, this.cutSize) + "...";
        } else {
          return this.textFromProp;
        }
      }
    }
  },
  methods: {
    onChangeViewW(value) {
      if (value == 1) {
        this.initEditPost();
      }
      this.show = value;
    },
    initEditPost() {
      let e = new EditPost();
      e.Edit(
        {
          _id: this.idPost,
          title: this.title,
          text: this.textFromProp,
          creator: localStorage.id
        },
        this.onEditPost,
        "posts/edit"
      );
    },
    onEditPost(data) {
      let h = new Helper();
      if (data.data != null) {
        h.openNotify("success", "Edit post", "Post edited.");
      } else {
        h.openNotify("danger", "Edit post", "The post was not edited.");
      }
    },
    onClickViewMore(value) {
      this.cutSize = value;
    },
    onOpenModal() {
      this.$emit("onOpenModal", this.idPost, this.title, this.index);
    },
    initRemove(postsList, index) {
      this.removeIndex = index;
      this.showItem = false;
    },
    afterLeave: function(el) {
      this.$emit("onFinishTransition", this.removeIndex);
    }
  }
};
</script>