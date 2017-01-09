<template>
  <div>
    <v-header>header</v-header>
    <div class="tab">
      <!--使用指令v-link进行导航-->
      <div class="tab-item">
        <a v-link="{path:'/home'}">首页</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/article'}">文章</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/project'}">项目</a>
      </div>
    </div>
    <!--路由外链  当改变路由时，会刷新router-view改变视图-->
    <router-view></router-view>

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
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
