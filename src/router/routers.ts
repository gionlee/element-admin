import Home from '@/views/Home.vue';
export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    children: [],
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/Index.vue'),
        meta: {
          title: '首页',
          show: false,
        },
      },
    ],
  },
  {
    path: '/docs',
    name: 'docs',
    component: Home,
    children: [{
      path: 'index',
      name: 'docsindex',
      component: () => import('@/views/Docs.vue'),
      meta: {
        title: '文档',
        show: true,
        icon: 'el-icon-document',
      },
    }],
  }, {
    path: '/upload',
    name: 'upload',
    component: Home,
    children: [{
      path: 'index',
      name: 'uploadindex',
      component: () => import('@/views/Upload.vue'),
      meta: {
        title: '上传',
        show: true,
        icon: 'el-icon-upload',
      },
    }],
  }, {
    path: '/map',
    name: 'map',
    component: Home,
    redirect: '/map/index',
    meta: {
      title: 'G6图示',
      show: true,
      icon: 'el-icon-s-marketing',
    },
    children: [ {
      path: 'index',
      name: 'tutorial',
      component: () => import('@/views/Tutorial.vue'),
      meta: {
        title: '辅导图',
        show: true,
        icon: 'el-icon-edit-outline',
      },
    },  {
      path: 'mindmap',
      name: 'mindmap',
      component: () => import('@/views/MindMap.vue'),
      meta: {
        title: '脑图',
        show: true,
        icon: 'el-icon-connection',
      },
    }],
  },
  {
    path: '/editor',
    name: 'editor',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'editor',
        component: () => import('@/views/Editor.vue'),
        meta: {
          title: '富文本编辑器',
          show: true,
        },
      },
    ],
  },
];
