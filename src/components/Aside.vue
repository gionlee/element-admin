<template>
    <el-menu
      class="aside"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      ref="menu"
      :default-active="$route.path"
    >
    
      <el-menu-item class="logo-con">
            <img v-bind:src="isCollapse ? require('./../assets/mini-logo.jpg')  : require('./../assets/logo.jpg')">
      </el-menu-item>
      <template v-for="(item,i) in menuList">
          <el-submenu v-if="item.children" :key="i" :index="item.path">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.meta.title}}</span>
                </template>
            <el-menu-item-group  :key="item.name" >
                <el-menu-item v-for="(citem,index) in item.children" :key="index" :index="item.path + citem.path" v-on:click="menuNav(citem,item.path)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{citem.meta.title}}</span>
                </el-menu-item>
            </el-menu-item-group>
    </el-submenu>
      
      <el-menu-item   v-else-if="item.meta.show" :key="i" :index="item.path" v-on:click="menuNav(item)"  >
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
      </template>
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
        default: false,
    })
    public isCollapse!: Boolean
    @State('menuList') menuList: any
    @Mutation('setMenuList') setMenuList: any
    @State('navList') navList: any
    @Mutation('setNavList') setNavList: any
    logoUrl = require('./../assets/logo.jpg')
    mounted() {
        console.log(this.menuList);
    }
    handleOpen() {
    }
    handleClose() {
    }
    menuNav(tag: any,parentPath?: any) {       
        if(tag.path !== this.$route.path || tag.path + parentPath !== this.$route.path) {
            let index = this.navList.findIndex( (item: any)=> {
                if(parentPath) {
                    return item.path == parentPath + tag.path
                } else {
                return item.path ==tag.path
                }
            })
            if(index === -1) {
                if (parentPath) {
                    let data = JSON.parse(JSON.stringify(tag))
                    data.path = parentPath +  data.path
                    tag = data
                }
                this.navList.push(tag)
            } 
            this.setMenuList(this.menuList)
            this.setNavList(this.navList)
            this.$forceUpdate()
            this.$nextTick( ()=> {
                this.$router.push(tag)
            })
            console.log('navList',this.navList)
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
    color: #fff ;
}
.el-submenu__title *{
    color: #fff !important;
}
.el-menu-item-group {
    background: #515a6e;
}
</style>