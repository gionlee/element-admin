<template>
    <h1>{{title}} 
        <el-input v-model="title"></el-input>
    </h1>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
@Component({})
export default class Main extends Vue {
    title = "首页"
}
</script>