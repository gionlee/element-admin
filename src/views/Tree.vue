<template>
    <el-tree 
        :data="treeList" 
        show-checkbox  
        draggable 
        :props="defaultProps" 
    >
        <div slot-scope="{node}">
            <span>{{node.label}}</span>
        </div>
    </el-tree>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component({})
export default class Tree extends Vue {
    public treeList = [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1',
            }],
          }],
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1',
            }],
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1',
            }],
          }],
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1',
            }],
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1',
            }],
          }],
        }];
        public defaultProps = {
          children: 'children',
          label: 'label',
        };
}
</script>