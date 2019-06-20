<template>
  <div class="content tagsList">
    <router-link :to="tag.path" v-for="tag in $tag.list" :key="tag.name">
      <span class="tag" :class="{'active':$route.path === tag.path}">{{ tag.name }}</span>
    </router-link>
  </div>
</template>

<style lang="stylus">
.tagsList.content
  padding 0 10px
  .tag
    font-size 1rem
    padding 5px 10px
    margin-right 10px
    margin-bottom 10px
    &:not(.active)
      background #ffffff
      color $accentColor
      box-shadow 0 0 3px $accentColor
</style>
