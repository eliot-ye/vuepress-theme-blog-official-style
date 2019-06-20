<template>
  <header id="navbar">
    <div class="sidebar-button" @click="slideBarShow = !slideBarShow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        viewBox="0 0 448 512"
        class="icon"
      >
        <path
          fill="currentColor"
          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
        ></path>
      </svg>
    </div>
    <router-link class="site-title" to="/">{{$siteTitle}}</router-link>
    <div class="links">
      <nav class="nav">
        <div class="nav-item" v-for="(navbar, i) in navbarList" :key="i">
          <router-link
            v-if="navbar.path.indexOf('http') !== 0"
            :class="{'router-active': id === navbar.id}"
            :to="navbar.path ? navbar.path : `/${navbar.id}/`"
          >{{navbar.title}}</router-link>
          <a v-else :href="navbar.path" target="_blank">
            {{navbar.title}}
            <OutLinkIcon :path="navbar.path"/>
          </a>
        </div>
        <div class="nav-item">
          <router-link :class="{'router-active': path.indexOf('/tag/') > -1 }" to="/tag/">Tags</router-link>
        </div>
      </nav>
      <SearchBox/>
    </div>
    <div id="slideBar-semitransparent" v-show="slideBarShow" @click="slideBarShow = false"></div>
    <div id="slideBar" :class="{'slideBarShow':slideBarShow}">
      <About/>
      <div class="nav-item" @click="slideBarShow = false">
        <router-link :class="{'router-active': path.indexOf('/tag/') > -1 }" to="/tag/">Tags</router-link>
      </div>
      <div class="nav-item" v-for="(navbar, i) in navbarList" :key="i">
        <router-link
          v-if="navbar.path.indexOf('http') !== 0"
          :class="{'router-active': id === navbar.id}"
          :to="navbar.path ? navbar.path : `/${navbar.id}/`"
          @click.native="slideBarShow = false"
        >{{navbar.title}}</router-link>
        <a v-else :href="navbar.path" target="_blank">
          {{navbar.title}}
          <OutLinkIcon :path="navbar.path"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import OutLinkIcon from "./OutLinkIcon";
import About from "./About";
export default {
  name: "navbar",
  components: {
    SearchBox,
    OutLinkIcon,
    About
  },
  data() {
    return {
      slideBarShow: false
    };
  },
  computed: {
    id() {
      return this.$route.meta.id || this.$page.id;
    },
    path() {
      return this.$route.path;
    },
    navbarList() {
      return this.$themeConfig.navbar;
    }
  }
};
</script>


<style lang="stylus">
@import '../styles/config'

#navbar
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid $borderColor
  box-shadow 0 2px 8px $borderColor
  padding 0.7rem 1.5rem
  line-height 2.2rem
  .site-title
    font-size 1.3rem
    font-weight 600
    color $textColor !important
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color #fff
    white-space nowrap
    font-size 0.9rem
    position absolute
    right 1.5rem
    top 0.7rem
    display flex
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
    a:not(.router-active)
      color $textColor
    .OutLinkIcon
      position relative
      top 3px
      left 3px
  .search-box
    margin-left 1rem
    margin-right 0
  .sidebar-button
    cursor pointer
    display none
    width 1.25rem
    height 1.25rem
    position absolute
    padding 0.6rem
    top 0.6rem
    left 1rem
    .icon
      width 1.25rem
      height 1.25rem
      display block
@media (min-width: $MQNarrow)
  #slideBar, #slideBar-semitransparent
    display none !important
@media (max-width: $MQNarrow)
  #navbar
    padding-left 4rem
    .sidebar-button
      display block !important
    .nav
      display none
  #slideBar-semitransparent
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, 0.7)
    z-index $slideBarZIndex - 1
    cursor pointer
  #slideBar
    width 260px
    position fixed
    top 0
    bottom 0
    left 0
    background #fff
    z-index $slideBarZIndex
    transform translateX(-100%)
    transition transform 0.2s ease
    overflow-y auto
    &.slideBarShow
      transform none
    #about
      display block
      position relative
      transform none
      top 0
      left 0
      width @width
      border-radius 0
      border none
      border-bottom 1px solid $arrowBgColor
      .portrait
        width @width
        height @width * 0.6
        display flex
        align-items center
        justify-content center
        .portrait-img
          width (@width / 2)
          height @width
          border 1px solid $arrowBgColor
          border-radius 5px
      .about-item
        border none
    .nav-item
      display flex
      align-items center
      justify-content center
      height 50px
      margin-left 0
</style>
