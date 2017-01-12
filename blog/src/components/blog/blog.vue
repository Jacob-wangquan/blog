<template>
  <div class="frontend">
    <a @click="tabToArticle">article</a>
    <a @click="tabToMood">mood</a>
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

</style>
