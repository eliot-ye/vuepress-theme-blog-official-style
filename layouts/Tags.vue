<template>
  <div class="tagsPage">
    <About/>
    <TagList />
  </div>
</template>

<script>
import About from "../components/About.vue";
import TagList from "../components/TagList.vue"
export default {
  name: "Tag",
  components: {
    About,
    TagList
  }
}
</script>

<style lang="stylus">
@import "../styles/config"
@media (min-width: $MQNarrow)
  .tagsPage
    padding-left 130px
</style>
