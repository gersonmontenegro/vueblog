<template>
    <div>
        <b-container>
            <b-row>
                <Post />
                <Post />
                <Post />
                <Post />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "PostsContainer",
  components: {
    Post
  }
};
</script>