<template>
  <div class="tagsPage">
    <About v-if="AboutShow" />
    <TagList />
  </div>
</template>

<script>
import About from "../components/About.vue";
import TagList from "../components/TagList.vue";
import config from "../styles/config.json";
export default {
  name: "Tag",
  components: {
    About,
    TagList
  },
  data() {
    return {
      AboutShow: true
    };
  },
  beforeMount() {
    if (
      document.documentElement.clientWidth <= parseInt(config.$MQNarrow)
    )
      this.AboutShow = false;
  }
};
</script>
