<template>
    <b-col md="6" style="background-color: gray">
        <ButtonBar />
        <div>
            <h3>Post title</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ....
            <div>
                <b-button class="defaut-button" variant="link">View more >></b-button>
            </div>
        </div>
    </b-col>
</template>

<script>
import ButtonBar from "./ButtonBar";

export default {
  name: "Post",
  components: {
    ButtonBar
  }
};
</script>