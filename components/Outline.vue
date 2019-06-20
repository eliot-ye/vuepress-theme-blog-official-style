<template>
  <div id="Outline" v-if="headers">
    <h4 class="Outline-title">目录</h4>
    <ul class="sidebar" ref="sidebar">
      <router-link v-for="(item, i) in headers" :to="`#${item.slug}`" class="sidebar-link">
        <li class="Outline-item">{{item.title}}</li>
      </router-link>
      <li style="height: 30px;"></li>
    </ul>
  </div>
</template>

<script>
import { AntiShake } from "../tools/utils.js";
let AntiShakeObj = new AntiShake(300);
let sidebarEl = null;
let sidebarObj = {
  clientHeight: 0,
  scrollHeight: 0
};
export default {
  name: "Outline",
  computed: {
    headers() {
      return (
        this.$page.headers &&
        this.$page.headers.filter(item => item.level === 2)
      );
    }
  },
  mounted() {
    sidebarEl = this.$refs.sidebar;
    sidebarObj.clientHeight = sidebarEl.clientHeight;
    sidebarObj.scrollHeight = sidebarEl.scrollHeight;
    if (sidebarObj.clientHeight < sidebarObj.scrollHeight) {
      window.addEventListener("scroll", this.onScroll);
      this.$once("hook:beforeDestroy", function() {
        window.removeEventListener("scroll", this.onScroll);
        AntiShakeObj = null;
        sidebarEl = null;
        sidebarObj = null;
      });
    }
  },
  methods: {
    onScroll() {
      AntiShakeObj.handle(() => {
        const activeLink =
          document.querySelector(
            "#Outline .sidebar .router-link-exact-active .Outline-item"
          ) || {};
        const scrollTop =
          activeLink.offsetTop - 60 - sidebarObj.clientHeight / 2;
        sidebarEl.scrollTop = scrollTop;
      });
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

$titleHeight = 60px
$OutlineTop = 25vh
#Outline
  width $sidebarWidth
  position fixed
  top $OutlineTop
  bottom 0
  left 50%
  transform translateX(145%)
  border-left 1px solid $borderColor
  .Outline-title
    margin 0
    height $titleHeight
    line-height $titleHeight
  .sidebar
    max-height s('calc(%s - %s)', 100vh - $OutlineTop, $titleHeight)
    margin 0
    padding 0
    list-style none
    overflow-y auto
    .Outline-item
      padding-left 20px
      position relative
      color $textColor
      border-left 5px solid #fff
    a.sidebar-link
      text-decoration none
    a.router-link-exact-active > .Outline-item
      color $accentColor
      background-color $borderColor
      border-left-color $accentColor
@media (max-width: $MQNarrow)
  #Outline
    display none
</style>
