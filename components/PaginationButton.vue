<template>
  <div id="pagination">
    <button
      class="pagination-btn"
      :disabled="!$pagination.hasPrev"
      @click="$router.push($pagination.prevLink)"
    >上一页</button>
    <button
      class="pagination-btn"
      :disabled="!$pagination.hasNext"
      @click="$router.push($pagination.nextLink)"
    >下一页</button>
  </div>
</template>

<style lang="stylus">
#pagination
  display flex
  justify-content center
  .pagination-btn
    background $accentColor
    color #ffffff
    border none
    outline none
    border-radius 3px
    padding 5px
    margin 0 5px
    cursor pointer
    &:disabled
      background $borderColor
      cursor default
</style>
