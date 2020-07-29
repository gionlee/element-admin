<template>
  <div>
    <h1>文档说明</h1>
    <el-input v-model="text"></el-input>
    <button v-on:click="load">刷新</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({})
export default class Main extends Vue {
  @State("menuList") public menuList: any;
  @Mutation("setMenuList") public setMenuList: any;
  @Inject("reload") reload: any;
  private text = "";
  private load() {
    this.reload;
  }
}
</script>