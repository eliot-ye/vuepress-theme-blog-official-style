<template>
  <div id="Layout">
    <About/>
    <CatalogueList/>
    <!-- <PaginationButton/> -->
  </div>
</template>

<script>
import About from "../components/About.vue";
import CatalogueList from "../components/CatalogueList";
// import PaginationButton from "../components/PaginationButton";
export default {
  name: "Layout",
  components: {
    About,
    CatalogueList
    // PaginationButton
  }
};
</script>


<style lang="stylus">
@import '../styles/config'

#Layout
  max-width $catalogueWidth
  margin 0 auto
  padding-top $navbarHeight
</style>
