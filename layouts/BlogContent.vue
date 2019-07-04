<template>
  <div id="BlogContent" :class="{'hasHeaders':$page.headers}">
    <div class="theme-blog-content">
      <div id="last-updated" v-if="$page.lastUpdated">
        <span class="prefix">{{$themeConfig.lastUpdated || "最后更新："}}</span>
        <span class="time">{{$page.lastUpdated}}</span>
      </div>
      <Content />
      <Statement />
      <div id="BlogContent-tags">
        <router-link
          class="BlogContent-tag"
          v-for="tag in $frontmatter.tags"
          :key="tag"
          :to="$tag._metaMap[tag].path"
        ># {{tag}}</router-link>
      </div>
      <Vssue
        v-if="$themeConfig.comment && $frontmatter.comment !== false"
        :issueId="$frontmatter.issueId"
      />
    </div>
    <Outline />
  </div>
</template>

<script>
import Outline from "../components/Outline.vue";
import Statement from "../components/Statement.vue";
export default {
  components: {
    Outline,
    Statement
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

#last-updated
  padding-top 50px
  font-size 0.9em
  .time
    color #aaa
#BlogContent-tags
  display flex
  justify-content center
  a.BlogContent-tag
    margin 5px 10px
    font-size 0.8rem
#BlogContent
  a.vssue-header-comments-count
    cursor default
    text-decoration none
    font-size 20px
</style>
