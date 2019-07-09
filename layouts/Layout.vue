<template>
  <div id="Layout">
    <About v-if="AboutShow" />
    <CatalogueList />
    <PaginationButton />
  </div>
</template>

<script>
import About from "../components/About.vue";
import CatalogueList from "../components/CatalogueList";
import PaginationButton from "../components/PaginationButton";
import config from "../styles/config.json";
export default {
  name: "Layout",
  components: {
    About,
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
      document.documentElement.clientWidth <= parseInt(config.$MQNarrow)
    )
      this.AboutShow = false;
  }
};
</script>


<style lang="stylus">
@import '../styles/config'

#Layout
  max-width $catalogueWidth
  margin 0 auto
  padding-top $navbarHeight
@media (min-width: $MQNarrow)
  #Layout
    padding-left 130px
</style>
