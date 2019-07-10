<template>
  <div id="Statement" v-if="statement">
    <p>
      <span class="Statement-title">文章作者：</span>
      <span class="Statement-content">{{statement.author}}</span>
    </p>
    <p class="singleText">
      <span class="Statement-title">文章链接：</span>
      <span class="Statement-content">
        <a :href="path" target="_blank">{{path}}</a>
      </span>
    </p>
    <p>
      <span class="Statement-title">版权声明：</span>
      <span class="Statement-content">
        本博客所有文章除特别声明外，均采用《
        <a :href="statement.copyrightUrl" target="_blank">{{statement.copyright}}</a>
        》许可协议。转载请注明出处！
      </span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    statement() {
      return this.$themeConfig.statement;
    },
    path() {
      if (!this.statement) return "";
      /** @type {string} */
      const serveUrl = this.statement.serveUrl;
      /** @type {string} */
      const base = this.$site.base;
      let path = serveUrl;
      if (serveUrl.lastIndexOf("/") === serveUrl.length - 1) {
        path += base.substring(1);
      } else {
        path += base;
      }
      path += this.$page.path.substring(1);
      return path;
    }
  }
};
</script>


<style lang="stylus">
@import '../styles/config'

#Statement
  background-color $borderColor
  border-left .5rem solid $accentColor
  padding 20px 10px
  margin 30px 0
  .Statement-title
    color #000
  .Statement-content
    font-size 0.9rem
    color #666
</style>
