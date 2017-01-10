<template>
  <div class="article-wrapper" v-el:article-wrapper>
    <ul class="article-lists">
      <li v-for="articlelist in articles" class="article-item" @click="selectArt(articlelist, $event)">
        <p class="title">{{articlelist.title}}</p>
        <p class="introduction">{{articlelist.introduction}}</p>
        <split></split>
      </li>
    </ul>
  </div>
  <!--v-bind绑定动态 Props 到父组件的数据。每当父组件的data数据变化时，也会传导给子组件props接收-->
  <!--调用子组件的方法v-ref-->
  <articlelist :articlelist="selectedArticle" v-ref:articlelist></articlelist>
</template>

<script type="text/ecmascript-6">
  //  import Vue from 'vue';
  import split from 'components/split/split';
  import BScroll from 'better-scroll';
  import articlelist from 'components/articlelist/articlelist';
  const ERR_OK = 0;

  export default {
    data() {
      return {
        articles: [],
        selectedArticle: {}
      };
    },
    created() {
      this.$http.get('./api/article').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.articles = response.data.articles;
          console.log(this.articles);
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        this.articleScroll = new BScroll(this.$els.articleWrapper, {});
      },
      selectArt(article, event) {
        console.log('111');
        if (!event._constructed) {
          return;
        }
        console.log('123');
        this.selectedArticle = article;
//        拿到子组件的方法
        this.$refs.articlelist.show();
      }
    },
    components: {
      split,
      articlelist
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-wrapper
    position :absolute
    top: 88px
    bottom:0
    overflow :hidden
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
