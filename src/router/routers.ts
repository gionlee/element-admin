export const routes =  [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/Home.vue'),
      children: [
        {
          path:'/',
          name:'index',
          component: ()=> import('@/views/Index.vue'),
          meta: {
            title: '首页',
            inNav: false
          }
        },
        {
          path: '/docs',
          name: 'docs',
          component: ()=> import('@/views/Docs.vue'),
          meta: {
            title: '文档',
            inNav: false
          }
        },{
          path: '/upload',
          name: 'upload',
          component: ()=> import('@/views/Upload.vue'),
          meta: {
            title: '上传',
            inNav: false
          }
        }
      ]
    },
  ]