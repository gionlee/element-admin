<template>
  <div id="map-view"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import G6 from "@antv/g6";
@Component({})
export default class Demo extends Vue {
  public remoteData = {};
  public mounted() {
    this.init();
  }
  public init = async () => {
    const el = document.getElementsByClassName("el-main")[0];
    let width = 500;
    let height = 500;
    if (el instanceof HTMLElement) {
      width = el.offsetWidth - 100;
      height = el.offsetWidth - 100;
    }
    const graph = new G6.Graph({
      container: "map-view", // 指定挂载容器
      height, // 图的高度
      width, //  图的宽度

      fitView: false, // 是否将图适配到画布大小，可以防止超出画布或留白太多。默认 false
      fitViewPadding: [20, 40, 50, 20], // 画布上的四周留白宽度。 默认 0
      animate: true, // 是否启用图的动画。默认 false
      modes: {
        //  图上行为模式的集合。 默认 null  详见https://g6.antv.vision/zh/docs/manual/middle/states/mode
        default: ["drag-canvas", "zoom-canvas"]
      },
      defaultNode: {
        // 节点默认的属性，包括节点的一般属性和样式属性 默认为null
      },
      layout: {
        // Object，可选，布局的方法及其配置项，默认为 random 布局。
        center: [width / 2, height / 2],
        type: "random", //  经典力导向图 force  环形布局 circular  辐射状布局 radial  高维数据降维算法布局 MDS 层次布局 dagre   详见 https://g6.antv.vision/zh/docs/api/layout/Layout
        preventOverlap: true, // 防止节点重叠
        nodeSize: 30 // 节点大小，用于算法中防止节点重叠时的碰撞检测
      },
      defaultEdge: {
        // 边默认的属性，包括边的一般属性和样式属性。默认为null
        // 去掉全局配置的 style
        labelCfg: {
          // 边上的标签文本配置
          autoRotate: true // 边上的标签文本根据边的方向旋转
        }
      },
      nodeStateStyles: {
        // 节点在除默认状态外，其他状态下的样式属性。 默认为null
      }
    });
    const res = await fetch(
      "https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json"
    );
    this.remoteData = await res.json();
    graph.data(this.remoteData); // 加载数据
    graph.render(); // 渲染
  };
}
</script>