<template>
    <h1>文档说明 
    </h1>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
@Component({})
export default class Main extends Vue {
    @State('menuList') menuList: any
    @Mutation('setMenuList') setMenuList: any
}
</script>