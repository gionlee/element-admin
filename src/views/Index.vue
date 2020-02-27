<template>
    <h1>{{title}} 
        <el-input v-model="title"></el-input>
    </h1>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
import {Login , User} from '@/data/user';
import http from '@/libs/request'
@Component({})
export default class Main extends Vue {
    title = "首页"
    mounted() {
        Login
        User
        http({ url:'/user',method: 'post',data: {name:'admin',password:'123456'}
        }).then( (res:any) => {
            console.log(res)
        }).catch( (error: any) => {
            console.log(error)
        })
    }
}
</script>