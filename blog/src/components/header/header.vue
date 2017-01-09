<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="avatar">
        <img width="36" height="36" src="timg.jpg">
      </div>
      <div class="about" @click="showDetail">
        <span>about me</span>
      </div>
    </div>

    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="avatar">
            <img width="64" height="64" src="timg.jpg">
          </div>
          <div class="introduce">
            <span class="introduce-title">name:</span>
            <span class="introduce-text">quanhai wang</span>
          </div>
          <div class="introduce">
            <span class="introduce-title">sex: </span>
            <span class="introduce-text">male</span>
          </div>
          <div class="introduce">
            <span class="introduce-title">birthday:</span>
            <span class="introduce-text">1992-01-15</span>
          </div>
          <div class="introduce">
            <span class="introduce-title">position:</span>
            <span class="introduce-text">frond end development engineer</span>
          </div>
          <div class="introduce">
            <span class="introduce-title">motto:</span>
            <span class="introduce-text">Don't forget your original intention</span>
          </div>
          <div class="introduce">
            <span class="introduce-title">e-mail:</span>
            <span class="introduce-text">510208757@qq.com</span>
          </div>
        </div>
      </div>
      <div class="close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    width: 100%
    overflow:hidden
    background :rgba(176,220,213,0.8)
    .header-wrapper
      position :relative
      padding:24px 8px
      .avatar
        position: absolute
        top: 6px
        left: 10px
        img
          border-radius: 50%
      .about
        position: absolute
        top: 0
        right: 10px
        line-height: 48px
        color:#1a6d60
        font-size:14px
    .detail
      position:fixed
      z-index:1
      top:0
      left:0
      width:100%
      height:100%
      overflow:auto
      transition: all 0.5s
      backdrop: blur(10px)
      &.fade-transition
        opacity:1
        background : rgba(7,17,27,0.8)
      &.fade-enter, &.fade-leave
        opacity:0
        background :rgba(7,17,27,0.2)
      .detail-wrapper
        width:100%
        min-height:100%
        .detail-main
          margin-top : 64px
          padding-bottom: 64px
          .avatar
            width:64px
            margin:64px auto 20px auto
            img
              border-radius:50%
          .introduce
            display:flex
            padding:10px 20px
            line-height: 24px
            font-size: 14px
            color:#fff
            .introduce-title
             width:60px
            .introduce-text
              flex:1
      .close
        position : relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear:both
        font-size:32px
        color:#fff
</style>
