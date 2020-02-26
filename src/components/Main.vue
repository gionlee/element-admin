<template>
    <div>
        <div class="router-nav">
            <el-tag
                v-for="(tag,index) in navList"
                :key="index"
                v-bind:closable = "tag.name !== 'index' ? true : false"
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
            <!-- <keep-alive><keep-alive> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Emit} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
@Component({})
export default class Main extends Vue{
    @State('menuList') menuList: any
    @Mutation('setMenuList') setMenuList: any
    @State('navList') navList: any
    @Mutation('setNavList') setNavList: any
    /**
     * 删除标签页
     */
    updateTag(tag: any) {
        let index = this.navList.findIndex( (item: any) => {
            return item.path == tag.path
        })
        this.navList.splice(index,1)
        this.setNavList(this.navList)
         this.$router.push(this.navList[this.navList.length - 1])
    }
    changTag(tag: any) {
        this.$router.push(tag)
    }
}
</script>
<style lang="scss" scoped>
.router-nav {
    height: 40px;
    background-color: #f0f0f0;
    border-bottom:1px solid #ccc;
    line-height: 38px;
    padding: 0 20px;
}
.el-tag {
    margin:0 2px;
    cursor: pointer;
}
.point {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background:#e8eaec; 
    display: inline-block;
}
.active {
    background: #2d8cf0;
}
.main {
    padding: 20px;
}
</style>