<template>
  <el-container>
    <el-aside width="auto">
      <Aside :isCollapse="isCollapse"></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header @isCollapse="getCollapse"></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
import { routes } from "@/router/routers";
import { getMenuByRouter } from "@/libs/util";
import { State, Mutation } from "vuex-class";
@Component({
  components: {
    Header,
    Aside,
    Main
  }
})
export default class Home extends Vue {
  @Mutation("setMenuList") public setMenuList: any;
  @State("navList") public navList: any;
  @Mutation("setNavList") public setNavList: any;
  public isCollapse: Boolean = false;
  public created() {
    const that = this;
    const navList = getMenuByRouter(routes);
    navList.forEach((item: any) => {
      if (item.children) {
        item.children.forEach((citem: any) => {
          const navUrl = item.path + "/" + citem.path;
          citem.path = navUrl;
          if (navUrl == that.$route.path) {
            that.navList.push(citem);
          }
        });
      } else if (item.path == this.$route.path && item.path !== "/") {
        this.navList.push(item);
      }
    });
    this.setMenuList(navList);
    this.setNavList(this.navList);
  }
  public getCollapse(bol: boolean) {
    this.isCollapse = bol;
  }
}
</script>
<style lang="scss">
.el-header,
.el-footer {
  line-height: 60px;
}
.el-header {
  border-bottom: 1px solid #ccc;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-main {
  padding: 0 !important;
  background: #f0f2f5;
}
.el-container {
  height: 100%;
}
</style>
