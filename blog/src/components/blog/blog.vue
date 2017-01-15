<template>
  <div class="frontend">
    <a @click="tabToArticle" class="tabToArticle">技术</a>
    <a @click="tabToMood" class="tabToMood">人生</a>
    <art v-ref:art></art>
    <mood v-ref:mood></mood>
  </div>
</template>

<script type="text/ecmascript-6">
  import art from 'components/article/article';
  import mood from 'components/mood/mood';
  export default {
    components: {
      art,
      mood
    },
    data() {
      return {
        tab: {}
      };
    },
    methods: {
      tabToArticle() {
        this.$refs.art.show();
      },
      tabToMood() {
        this.$refs.mood.show();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .frontend
    padding:10px
    .tabToArticle,.tabToMood
      display :block
      width:100%
      height:100%
      margin-bottom:10px
      border-radius:8px
      text-align:center
      line-height:188px
      background: url("tech.jpg") no-repeat
      background-size: cover
      color:#fff
    .tabToMood
      background :url("life.jpg") no-repeat
      background-size: cover
</style>
