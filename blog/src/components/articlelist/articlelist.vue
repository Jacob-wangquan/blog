<template>
  <div class="articleList" v-show="showFlag" v-el:articlelist>
    {{articlelist.title}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    articlelist: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .articleList
    position: fixed
    left: 0
    top: 0
    bottom: 0
    z-index: 30
    width: 100%
    background: #fff
</style>
