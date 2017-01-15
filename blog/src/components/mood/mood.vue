<template>
  <div class="mood" transition="move" v-show="showFlag">
    <div class="header">
      <div class="back" @click="hide">
        <i class="icon-arrow_lift"></i>
      </div>
      <p class="title">人生</p>
      <div class="share">
        <span>share</span>
      </div>
    </div>
    <div class="mood-wrapper" v-el:mood-wrapper>
      <ul class="article-lists">
        <li v-for="articlelist in arts" class="article-item">
          <a :href="articlelist.url">
            <p class="title">{{articlelist.title}}</p>
            <p class="introduction">{{articlelist.introduction}}</p>
          </a>
          <split></split>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from 'components/split/split';
  import BScroll from 'better-scroll';
  const ERR_OK = 0;

  export default {
    props: {
      mood: {
        type: Object
      }
    },
    components: {
      split
    },
    data() {
      return {
        arts: {},
        showFlag: false
      };
    },
    created() {
      this.$http.get('./api/article').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.arts = response.data[1].moods;
          console.log(this.showFlag + 'out');
        }
      });
    },
    methods: {
      _initScroll() {
        this.articleScroll = new BScroll(this.$els.moodWrapper, {
          click: true
        });
      },
      show() {
        this.showFlag = true;
        this.$nextTick(() => {
          this._initScroll();
          console.log(this.showFlag + 'in');
        });
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mood
    position: fixed
    left: 0
    top: 0
    bottom: 0
    z-index: 300
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
    .mood-wrapper
      position: absolute
      top: 44px
      bottom: 0
      overflow: hidden
      width: 100%
      .article-lists
        width: 100%
        .article-item
          width: 100%
          overflow: hidden
          background: #fff
          color: rgb(7, 17, 27, 0.8)
          .title
            width: 96%
            height: 22px
            padding: 4px 8px
            line-height: 22px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-weight: 500
            font-size: 14px
          .introduction
            line-height: 18px
            padding: 4px 8px
            font-size: 12px
</style>
