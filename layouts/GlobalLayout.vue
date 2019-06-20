<template>
  <div id="global-layout">
    <NavBar />
    <DefaultGlobalLayout />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue';
import NavBar from "../components/NavBar"
export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    NavBar
  },
}
</script>