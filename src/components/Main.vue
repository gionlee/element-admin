<template>
  <div>
    <div class="router-nav">
      <el-tag
        v-for="(tag,index) in navList"
        :key="index"
        v-bind:closable="tag.name !== 'index' ? true : false"
        effect="plain"
        type="info"
        v-on:close="updateTag(tag)"
        v-on:click="changTag(tag)"
      >
        <span v-bind:class="tag.path == $route.path ? 'point active' : 'point' "></span>
        {{tag.meta.title}}
      </el-tag>
    </div>
    <div class="main">
      <keep-alive v-if="isload">
        <router-view></router-view>
      </keep-alive>
      <!-- 
      <router-view v-if="isload"></router-view>-->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Provide } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({})
export default class Main extends Vue {
  @State("menuList") public menuList: any;
  @Mutation("setMenuList") public setMenuList: any;
  @State("navList") public navList: any;
  @Mutation("setNavList") public setNavList: any;
  @Provide() reload = this.reloadRouter();
  private isload = true;
  /**
   * 删除、更新标签页
   */
  public updateTag(tag: any) {
    const index = this.navList.findIndex((item: any) => {
      return item.path == tag.path;
    });
    this.navList.splice(index, 1);
    this.setNavList(this.navList);
    this.$router.push(this.navList[this.navList.length - 1]);
  }
  /**
   * 路由跳转
   */
  public changTag(tag: any) {
    this.$router.push(tag);
  }
  /**
   * 重新加载页面
   */
  public reloadRouter() {
    console.log("重新加载...");
    this.isload = false;
    this.$nextTick(function() {
      this.isload = true;
    });
  }
}
</script>
<style lang="scss" scoped>
.router-nav {
  height: 40px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  line-height: 38px;
  padding: 0 20px;
}
.el-tag {
  margin: 0 2px;
  cursor: pointer;
}
.point {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e8eaec;
  display: inline-block;
}
.active {
  background: #2d8cf0;
}
.main {
  padding: 20px;
}
</style>