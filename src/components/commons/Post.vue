<template>
    <b-col md="6" style="background-color: white">
        <ButtonBar />
        <div>
            <h3>Post title</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ....
        </div>
        <ViewMoreButton />
    </b-col>
</template>

<script>
import ButtonBar from "./ButtonBar";
import ViewMoreButton from "./ViewMoreButton";

export default {
  name: "Post",
  components: {
    ButtonBar,
    ViewMoreButton
  }
};
</script>