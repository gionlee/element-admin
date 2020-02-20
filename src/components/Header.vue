<template>
    <div class="header">
        <div class="hd-icon-menu" v-on:click="setCollapse">
            <i class="el-icon-menu"></i>
        </div>
        <div class="hd-nav">
            <i class="el-icon-s-home"></i>
            首页
        </div>
        <div class="hd-user-ctrl">
                <el-dropdown class="user-menu">
                    <el-badge is-dot>
                        <img class="user-logo" src="./../assets/user-logo.jpg" alt="">
                    </el-badge>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
@Component({})
export default class Header extends Vue {
    isCollapse = false
    @Emit('isCollapse') send(isCollapse:Boolean) {}
    setCollapse () {
        this.isCollapse = !this.isCollapse
        this.send(this.isCollapse)
    }
}
</script>
<style lang="scss" scoped>
.header {
color: #333
}
.hd-icon-menu {
    margin-left: 20px;
    float: left;
    font-size: 24px;
    cursor: pointer;
}
.hd-nav {
    margin-left: 20px;
    float: left;
    font-size: 14px;
}
.hd-user-ctrl {
    float: right;
    margin-right: 50px;
}
.user-menu {
    width: 100px;
    text-align: center;
}
.el-badge {
    height: 42px;
    
}
.user-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
}
</style>