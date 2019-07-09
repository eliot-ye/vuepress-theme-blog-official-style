<template>
  <div class="tagsPage">
    <About v-if="AboutShow" />
    <TagList />
    <CatalogueList />
    <PaginationButton />
  </div>
</template>

<script>
import About from "../components/About.vue";
import TagList from "../components/TagList.vue";
import CatalogueList from "../components/CatalogueList";
import PaginationButton from "../components/PaginationButton";
import config from "../styles/config.json";
export default {
  name: "FrontmatterPagination",
  components: {
    About,
    TagList,
    CatalogueList,
    PaginationButton
  },
  data() {
    return {
      AboutShow: true
    };
  },
  beforeMount() {
    if (
      document.documentElement.clientWidth <= parseInt(config.$MQMobileNarrow)
    )
      this.AboutShow = false;
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

@media (min-width: $MQNarrow)
  .tagsPage
    padding-left 130px
    #catalogue-list
      margin-top ($navbarHeight / 2)
</style>

