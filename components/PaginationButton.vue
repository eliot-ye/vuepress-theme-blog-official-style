<template>
  <div id="pagination">
    <button
      class="pagination-btn"
      v-if="prevMore"
      @click="$router.push($pagination._paginationPages[0].path)"
    >1</button>
    <div class="pagination-btn pagination-more" v-if="prevMore">...</div>
    <button
      class="pagination-btn"
      v-for="i in $pagination.length"
      :class="{'pagination-btn-active': $pagination.paginationIndex + 1 === i}"
      v-show="paginationBtnShow(i)"
      @click="$router.push($pagination._paginationPages[i - 1].path)"
    >{{i}}</button>
    <div class="pagination-btn pagination-more" v-if="nextMore">...</div>
    <button
      class="pagination-btn"
      v-if="nextMore"
      @click="$router.push($pagination._paginationPages[$pagination.length - 1].path)"
    >{{$pagination.length}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnShowNum: 9
    };
  },
  computed: {
    paginationNum() {
      return this.$pagination.paginationIndex + 1;
    },
    twoFlanksNum() {
      return (this.btnShowNum + 1) / 2;
    },
    prevMore() {
      return this.paginationNum > this.twoFlanksNum;
    },
    nextMore() {
      return (
        this.paginationNum < this.$pagination.length - this.twoFlanksNum + 1
      );
    }
  },
  beforeMount() {
    if (document.documentElement.clientWidth <= 419) this.btnShowNum = 5;
  },
  methods: {
    paginationBtnShow(i) {
      if (!this.prevMore) {
        return i <= this.btnShowNum;
      } else if (this.prevMore && this.nextMore) {
        return (
          (i > this.paginationNum - this.twoFlanksNum &&
            i <= this.paginationNum) ||
          (i < this.paginationNum + this.twoFlanksNum &&
            i >= this.paginationNum)
        );
      } else if (!this.nextMore) {
        return i > this.$pagination.length - this.btnShowNum;
      }
    }
  }
};
</script>


<style lang="stylus">
@import '../styles/config'

$borderRadius = 5px
#pagination
  display flex
  justify-content center
  padding-bottom 80px
  .pagination-btn
    background #fff
    color $accentColor
    font-weight 500
    border none
    outline none
    padding 5px
    min-width 30px
    cursor pointer
    border 1px solid $borderColor
    border-left none
    &:first-child
      border-left 1px solid $borderColor
      border-top-left-radius $borderRadius
      border-bottom-left-radius $borderRadius
    &:last-child
      border-top-right-radius $borderRadius
      border-bottom-right-radius $borderRadius
    &.pagination-more
      display flex
      justify-content center
      cursor default
      color $textColor
    &.pagination-btn-active
      background $accentColor
      color $activeTextColor
      cursor default
    &:disabled
      background $borderColor
      color #fff
      cursor default
</style>
