<template>
  <div id="BlogContent" :class="{'hasHeaders':$page.headers}">
    <div class="theme-blog-content">
      <Content/>
      <Outline/>
      <footer id="BlogContent-footer">
        <div id="last-updated" v-if="$page.lastUpdated">
          <span class="prefix">{{$themeConfig.lastUpdated || "上次更新："}}</span>
          <span class="time">{{$page.lastUpdated}}</span>
        </div>
        <div style="clear: both"></div>
      </footer>
    </div>
  </div>
</template>

<script>
import Outline from "../components/Outline.vue";
export default {
  components: {
    Outline
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

#BlogContent.hasHeaders
  padding-right $sidebarWidth * 0.8
#BlogContent-footer
  padding-top 50px
  padding-bottom 20px
#last-updated
  float right
  font-size 0.9em
  .time
    color #aaa
@media (max-width: $MQNarrow)
  #BlogContent.hasHeaders
    padding-right 0
</style>
