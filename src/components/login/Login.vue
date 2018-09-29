<template>
    <b-container v-if="page == 2" >
        <b-row>
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
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
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
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      this.form.email = "";
      this.form.password = "";
      this.show = false;
    }
  }
};
</script>