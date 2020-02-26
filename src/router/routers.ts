export const routes =  [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/Home.vue'),
      children: [
        {
          path:'',
          name:'index',
          component: ()=> import('@/views/Index.vue'),
          meta: {
            title: '首页',
            show: false
          }
        },
        {
          path: '/docs',
          name: 'docs',
          component: ()=> import('@/views/Docs.vue'),
          meta: {
            title: '文档',
            show: true
          }
        },{
          path: '/upload',
          name: 'upload',
          component: ()=> import('@/views/Upload.vue'),
          meta: {
            title: '上传',
            show: true
          }
        },{
          path:'/tree',
          name: 'tree',
          component: ()=> import('@/views/Tree-Panel.vue'),
          meta: {
            title: '树形',
            show: true
          },
          children:[{
            path:'',
          name: 'list',
            component: ()=> import('@/views/Tree.vue'),
            meta: {
              title: '树形图',
              show: true
          }
          },{
            path:'diagram',
          name: 'diagram',
            component: ()=> import('@/views/Diagram.vue'),
            meta: {
              title: '关系图',
              show: true
          }
          }]
        }
      ]
    },
  ]