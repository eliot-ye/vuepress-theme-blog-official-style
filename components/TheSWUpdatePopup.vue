<template>
  <SWUpdatePopup>
    <div slot-scope="{ enabled, reload, message, buttonText }" class="the-sw-update-popup">
      <span>{{ message }}</span>
      <button class="the-sw-update-btn" @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>

<style lang="stylus">
@import url('../styles/config')

.the-sw-update-popup
  position fixed
  bottom 20px
  right 20px
  background-color #fff
  font-size 20px
  padding 10px
  border 5px solid $accentColor
  display flex
  flex-direction columns
  justify-content center
  align-items center
  .the-sw-update-btn
    border none
    outline none
    background $accentColor
    color #fff
    cursor pointer
</style>