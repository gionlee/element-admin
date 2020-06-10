<template>
  <div id="mountNode" ref="map-view"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MindData from "../../static/data/mindmap";
import { State, Mutation } from "vuex-class";
import G6 from "@antv/g6";
@Component({})
export default class MindMap extends Vue {
  @Mutation("setMenuList") public setMenuList: any;
  @State("navList") public navList: any;
  @Mutation("setNavList") public setNavList: any;
  public mounted() {
    console.log(this.navList);
  }
}
</script>