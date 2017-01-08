import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import home from 'components/home/home';
import article from 'components/article/article';
import project from 'components/project/project';

import 'common/stylus/index.styl';

// 安装使用
Vue.use(VueRouter);

// 用router的话就不能使用new Vue的方式
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// });
// App这个参数就是挂载的组件
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'    // 配置这个元素
});

// map方法配置路由
router.map({
  '/home': {
    component: home
  },
  '/article': {
    component: article
  },
  '/project': {
    component: project
  }
});
// 调用start， 开始运行
router.start(app, '#app');

router.go('/home');
