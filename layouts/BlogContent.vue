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
      <ClientOnly>
        <VssueComponent :title="$title" :options="VssueOptions"/>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import Outline from "../components/Outline.vue";
import { VssueComponent } from "vssue";
import "vssue/dist/vssue.css";
export default {
  components: {
    Outline,
    VssueComponent
  },
  data() {
    return {
      VssueOptions: {
        api: null,
        owner: "OWNER_OF_REPO",
        repo: "NAME_OF_REPO",
        clientId: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET"
      }
    };
  },
  created() {
    const comment = this.$themeConfig.comment;
    console.log(comment)
    if (!comment) return;
    if (comment.platform === "gitee") {
      this.VssueOptions.api = require("@vssue/api-gitee-v5");
    } else if (comment.platform === "github") {
      this.VssueOptions.api = require("@vssue/api-github-v3");
    }
    this.VssueOptions.owner = comment.owner;
    this.VssueOptions.repo = comment.repo;
    this.VssueOptions.clientId = comment.clientId;
    this.VssueOptions.clientSecret = comment.clientSecret;
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
