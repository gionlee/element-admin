<template>
    <el-menu
      class="aside"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      ref="menu"
      router
      :default-active="$route.path"
    >
      <el-menu-item class="logo-con">
            <img v-bind:src="isCollapse ? require('./../assets/mini-logo.jpg')  : require('./../assets/logo.jpg')">
      </el-menu-item>
      <el-menu-item  v-for="(item,i) in navTagList" :key="i" :index="item.path"  >
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </el-menu>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
@Component({})
export default class Aside extends Vue {
    @Prop({
        type: Boolean,
        required: true,
        default: false
    })
    public isCollapse!: Boolean
    @State('navTagList') navTagList: any
    logoUrl = require('./../assets/logo.jpg')
    handleOpen() {
        console.log('it‘s open !');
    }
    handleClose() {
        console.log('it‘s closed !');
    }
    menuNav(tag: any) {       
        if(tag.path !== this.$route.path) {
            this.$router.push(tag)
        }
        
    }
    
}
</script>
<style lang="scss" scoped>
.aside{    
    border-right: 1px solid #ccc;
    background-color: #515a6e;
    height: 100%;
    text-align: left;
    color: #fff;
}
.aside:not(.el-menu--collapse)  {
width: 200px;
}
.logo-con{
  height: 100px;
  padding: 20px;
}
.logo-con:hover {
    background: none !important;
}
.logo-con:not(.el-menu--collapse) {
    padding-left: 12px !important;
}
.logo-con img {
  max-width: 160px;
}
.el-menu-item:not(.is-active) {
    color: #fff;
}
.el-menu-item i {
    color: #fff;
}
</style>