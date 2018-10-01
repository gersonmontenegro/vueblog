<template>
  <transition name="slide-fade">
    <b-col v-if="true" md="12" class="border">
        <b-btn size="sm" @click="onClickCreate">Create+</b-btn>
        <transition name="slide-fade">
            <div v-if="show_editor">
                <b-form-input v-model="title" type="text" placeholder="Post title"></b-form-input>
                <wysiwyg class="wygiwys-style" v-model="text" />
                <b-btn size="sm" @click="onClickSave" variant="success">Save</b-btn>
                <b-btn size="sm" @click="onClickCancel" variant="danger">Cancel</b-btn>
            </div>
        </transition>
    </b-col>
  </transition>
</template>

<script>
import Vue from "vue";
import wysiwyg from "vue-wysiwyg";
import FetchData from "./../../providers/FetchData";

import "vue-wysiwyg/dist/vueWysiwyg.css";

Vue.use(wysiwyg, {
  hideModules: {
    image: true,
    table: true,
    separator: true
  }
});

export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      text: "",
      show_editor: false
    };
  },
  methods: {
    onOpenModal() {
      console.log("1!!");
    },
    onChangeViewW() {
      console.log("2!!");
    },
    onClickCreate() {
      this.show_editor = !this.show_editor;
    },
    onClickSave() {
      let f = new FetchData();
      f.DataRequest(
        {
          title: this.title,
          text: this.text,
          creator: localStorage.id
        },
        "posts/add"
      ).then(this.onSavePost);
    },
    onSavePost(data) {
      if (data.data != null) {
        this.onClickCancel();
        this.showNotify("success", "Add post", "Post added");
        this.$emit("setPosts", data.data);
      } else {
        this.showNotify(
          "danger",
          "Add post",
          "There was an error adding el new post."
        );
      }
    },
    showNotify(type, title, text) {
      this.$notify({
        group: "foo",
        type: type,
        title: title,
        text: text
      });
    },
    onClickCancel() {
      this.title = "";
      this.text = "";
      this.show_editor = false;
    }
  }
};
</script>