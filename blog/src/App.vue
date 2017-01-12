<template>
  <div>
    <v-header>header</v-header>
    <div class="tab border-1px">
      <!--使用指令v-link进行导航-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path:'/home'}">home</a>-->
      <!--</div>-->
      <div class="tab-item">
        <a v-link="{path:'/blog'}">blog</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/project'}">project</a>
      </div>
    </div>
    <!--路由外链  当改变路由时，会刷新router-view改变视图 keep-alive保证切换路由时视图不重新加载-->
    <router-view keep-alive></router-view>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/mixin.styl'
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          font-weight:700
          color: #1a6d60
</style>
