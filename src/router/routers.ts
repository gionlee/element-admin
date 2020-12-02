import Home from "@/views/Home.vue";
export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    children: [],
  },
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "login",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          show: false,
        },
      },
    ],
  },
  {
    path: "/docs",
    name: "docs",
    component: Home,
    children: [
      {
        path: "index",
        name: "docsindex",
        component: () => import("@/views/docs/index.vue"),
        meta: {
          title: "文档",
          show: true,
          icon: "el-icon-document",
        },
      },
    ],
  },
  {
    path: "/upload",
    name: "upload",
    component: Home,
    children: [
      {
        path: "index",
        name: "uploadindex",
        component: () => import("@/views/upload/index.vue"),
        meta: {
          title: "上传",
          show: true,
          icon: "el-icon-upload",
        },
      },
    ],
  },
  {
    path: "/table",
    name: "table",
    component: Home,
    children: [
      {
        path: "index",
        name: "tableindex",
        component: () => import("@/views/table/index.vue"),
        meta: {
          title: "表格",
          show: true,
          icon: "el-icon-postcard",
        },
      },
    ],
  },
  {
    path: "/module",
    name: "module",
    component: Home,
    meta: {
      title: "模块",
      show: true,
      icon: "el-icon-s-grid",
    },
    children: [
      {
        path: "count_to",
        name: "countto",
        component: () => import("@/views/module/count_to.vue"),
        meta: {
          title: "数字渐变",
          show: true,
          icon: "el-icon-s-marketing",
        },
      },
      {
        path: "editor_text",
        name: "editortext",
        component: () => import("@/views/module/editor_text.vue"),
        meta: {
          title: "富文本编辑器",
          show: true,
          icon: "el-icon-edit-outline",
        },
      },
    ],
  },
];
