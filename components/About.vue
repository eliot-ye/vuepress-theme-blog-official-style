<template>
  <div id="about" v-if="$themeConfig.about">
    <div class="portrait" v-if="about.portrait">
      <img :src="about.portrait" alt="portrait" class="portrait-img">
    </div>
    <div
      v-for="(msg,i) in msgList"
      :key="i"
      class="about-item"
      :class="{'is-link':msg.path, 'no-portrait':!about.portrait}"
      @click="go(msg.path)"
    >
      <img v-if="msg.img" :src="msg.img" class="about-msg about-img">
      <span v-if="msg.icon" :class="msg.icon" class="about-msg"></span>
      <span v-if="msg.text" class="about-msg">{{msg.text}}</span>
      <OutLinkIcon :path="msg.path"/>
    </div>
  </div>
</template>

<script>
import OutLinkIcon from "./OutLinkIcon";
export default {
  components: { OutLinkIcon },
  computed: {
    about() {
      return this.$themeConfig.about || {};
    },
    msgList() {
      return this.about.msgList;
    }
  },
  methods: {
    go(path) {
      if (path.indexOf("http") === 0) {
        window.open(path);
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

#about
  width 200px
  position fixed
  top $navbarHeight * 2
  left 50%
  transform translateX(-260%)
  border-radius 5px
  overflow hidden
  border 1px solid $arrowBgColor
  .portrait-img
    width @width
    display flex
  .about-item
    display flex
    align-items center
    justify-content center
    height 50px
    border-top 1px solid $arrowBgColor
    &.no-portrait:nth-of-type(1)
      border-top none
    .about-img
      height @height * 0.6
    &.is-link
      cursor pointer
  .about-msg
    margin 0 5px
@media (max-width: $MQNarrow)
  #about
    display none
</style>
