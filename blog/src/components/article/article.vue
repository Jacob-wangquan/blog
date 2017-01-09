<template>
  <div class="article-wrapper">
    <split></split>
    <ul class="article-lists">
      <li v-for="article in articles" class="article-item">
        <p class="title">{{article.title}}</p>
        <p class="introduction">{{article.introduction}}</p>
        <split></split>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  //  import Vue from 'vue';
  import split from 'components/split/split';
  const ERR_OK = 0;

  export default {
    data() {
      return {
        articles: []
      };
    },
    created() {
      this.$http.get('./api/article').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.articles = response.data[0].articles;
          console.log(this.articles);
        }
      });
    },
    components: {
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-wrapper
    width: 100%
    .article-lists
      width:100%
      .article-item
        width:100%
        overflow: hidden
        background: #fff
        color:rgb(7,17,27,0.8)
        .title
          width:96%
          height: 22px
          padding:4px 8px
          line-height :22px
          overflow:hidden
          text-overflow : ellipsis
          white-space : nowrap
          font-weight:500
          font-size:14px
        .introduction
          line-height :18px
          padding:4px 8px
          font-size:12px
</style>
