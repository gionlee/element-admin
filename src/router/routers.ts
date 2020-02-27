import Home from '@/views/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/Index.vue'),
        meta: {
          title: '首页',
          show: false
        }
      },
    ]
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
        icon: 'el-icon-document'
      },
    }]
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
        icon: 'el-icon-upload'
      },
    }]
  }, {
    path: '/tree',
    name: 'tree',
    component: Home,
    meta: {
      title: '图示',
      show: true,
      icon: 'el-icon-s-marketing'
    },
    children: [{
      path: 'index',
      name: 'list',
      component: () => import('@/views/Tree.vue'),
      meta: {
        title: '树形图',
        show: true,
        icon:'el-icon-s-operation'
      }
    }, {
      path: 'diagram',
      name: 'diagram',
      component: () => import('@/views/Diagram.vue'),
      meta: {
        title: '关系图',
        show: true,
        icon: 'el-icon-share'
      }
    }]
  }
]