<template>
    <b-container v-if="page == 2" class="container" >
        <b-row v-if="show">
            <b-form @reset="onReset" @submit.prevent="onSubmit">
            <b-form-group id="emailGroup"
                            label="Email address:"
                            label-for="emailGroup"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="exampleInput1"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="passwordGroup"
                            label="Your Password:"
                            label-for="passwordGroup">
                <b-form-input id="exampleInput2"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
            <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-row>
        <b-row v-if="!show">
          <b-button @click="onLogout" variant="danger">Logout</b-button>
        </b-row>
    </b-container>
</template>

<script>
import FetchData from "./../../providers/FetchData";
import "./../../assets/css/Login.css";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "johndoe@gmail.com",
        password: "123456"
      },
      show: true
    };
  },
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    onSubmit(evt) {
      let f = new FetchData();
      f.Login(this.form).then(data => {
        if (typeof data.data.access_token == "string") {
          this.onOkLogin(data.data.access_token);
        } else {
          this.onKo();
        }
      });
    },
    onKo() {
      this.$notify({
        group: "foo",
        type: "error",
        title: "Login",
        text: "There was an error requesting data."
      });
    },
    onOkLogin(token) {
      localStorage.token = token;
      this.$notify({
        group: "foo",
        type: "success",
        title: "Login",
        text: "You had just logged!. From now, you can edit Posts."
      });
      this.show = false;
      this.loadUserData();
      this.$emit("onChangePage", 1);
    },
    loadUserData() {
      let f = new FetchData();
      f.UserRequest("user").then(data => {
        if (data.data != null) {
          localStorage.id = data.data.id;
          localStorage.name = data.data.name;
          localStorage.email = data.data.email;
        }
      });
    },
    onLogout() {
      let f = new FetchData();
      f.UserRequest("logout").then(data => {
        this.$notify({
          group: "foo",
          title: "Logout",
          text: data.data.message,
          type: "success"
        });
        localStorage.clear();
        this.show = true;
      });
    },
    onReset(evt) {
      this.form.email = "";
      this.form.password = "";
      this.show = false;
    }
  },
  updated() {
    if (localStorage.token != null && localStorage.token != "") {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 10px;
}
</style>