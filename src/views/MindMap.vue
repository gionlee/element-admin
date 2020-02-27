<template>
    <div id="mountNode" ref="map-view"></div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import MindData from '../../static/data/mindmap';
import G6 from '@antv/g6';
@Component({})
export default class MindMap extends Vue {
    mounted() {
        let el = document.getElementsByClassName('el-main')[0]
        const graph = new G6.TreeGraph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: el.offsetWidth - 100,
            height: el.offsetHeight - 100,
            modes: {
                default: [
                {
                    type: 'collapse-expand',
                    onChange: function onChange(item, collapsed) {
                    const data = item.get('model').data;
                    data.collapsed = collapsed;
                    return true;
                    },
                },
                'drag-canvas',
                'zoom-canvas',
                ],
            },
            defaultNode: {
                size: 26,
                anchorPoints: [
                [0, 0.5],
                [1, 0.5],
                ],
                style: {
                fill: '#C6E5FF',
                stroke: '#5B8FF9',
                },
            },
            defaultEdge: {
                type: 'cubic-horizontal',
                style: {
                stroke: '#A3B1BF',
                },
            },
            layout: {
                type: 'mindmap',
                direction: 'H',
                getHeight: () => {
                return 16;
                },
                getWidth: () => {
                return 16;
                },
                getVGap: () => {
                return 10;
                },
                getHGap: () => {
                return 50;
                },
                getSide: () => {
                return 'right';
                },
            },
        });

        let centerX = 0;
        graph.node(function(node) {
        if (node.id === 'Modeling Methods') {
            centerX = node.x;
        }

        return {
            label: node.id,
            labelCfg: {
            position:
                node.children && node.children.length > 0
                ? 'left'
                : node.x > centerX
                ? 'right'
                : 'left',
            offset: 5,
            },
        };
        });

        graph.data(MindData);
        graph.render();
        graph.fitView();
    }
}
</script>