<template>
  <div class="project">
    <split></split>
    <ul class="project-list">
      <li v-for="item in projects" class="project-item">
        <a :href="item.url" class="box">
          <div class="icon">
            <img width="72" height="48" :src="item.avatar">
          </div>
          <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="url">{{item.url}}</p>
          </div>
        </a>
        <split></split>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from 'components/split/split';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        projects: []
      };
    },
    created() {
      this.$http.get('./api/project').then((response) => {
        response = response.body;
        if (ERR_OK === response.errno) {
          this.projects = response.data[0].projects;
        }
      });
    },
    components: {
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .project
    .project-list
      .project-item
        .box
          display:flex
          padding:4px 10px
          .icon
            flex: 0 0 72px
            margin-right:10px
          .content
            flex:1
            color:rgb(7,17,27)
            .title
              height: 28px
              line-height: 28px
              font-size:14px
            .url
              height: 20px
              width:95%
              line-height: 20px
              overflow:hidden
              text-overflow : ellipsis
              white-space : nowrap
              font-size:12px
</style>
