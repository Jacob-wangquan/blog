<template>
  <div class="articleList" v-show="showFlag" transition="move">
    <div class="header">
      <div class="back" @click="hide">
        <i class="icon-arrow_lift"></i>
      </div>
      <p class="title">title</p>
      <div class="share">
        <span>share</span>
      </div>
    </div>
    <p class="arctitle">{{articlelist.title}}</p>
    <p class="introduction">introduction:{{articlelist.introduction}}</p>
    <!--<div class="content" v-html="articlelist.text"></div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import markdown from 'markdown';
  export default {
    props: {
      articlelist: {
        type: Object
      }
    },
    components: {
      markdown
    },
    data() {
      return {
        showFlag: false,
        tep: ''
      };
    },
    methods: {
      show() {
        this.showFlag = true;
//        this.tep = markdown.markdown.toHTML('#hello');
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
    &.move-transition
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform: translate3d(100%, 0, 0)
    .header
      height: 44px
      .back
        position: absolute
        top: 0
        left: 0
        z-index: 10
        .icon-arrow_lift
          display: block
          padding: 12px
          font-size: 20px
          color: #1a6d60
      .title
        line-height: 44px
        text-align: center
        color: #1a6d60
        font-size: 16px
      .share
        position: absolute
        top: 0
        right: 0
        padding: 0 10px
        line-height: 44px
        font-size: 14px
        color: #1a6d60
    .arctitle
      line-height: 24px
      padding: 10px
      font-size: 16px
      color: #000000
    .introduction
      padding: 0 10px
      line-height: 18px
      font-size 12px
      text-align: justify
      color: #333
</style>
