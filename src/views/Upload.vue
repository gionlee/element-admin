<template>
    <h1>文件上传
    </h1>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
@Component({})
export default class Main extends Vue {
    @State('navTagList') navTagList: any
    @Mutation('setNavTagList') setNavTagList: any
    created() {
        let num: Number =  this.navTagList.findIndex( (data: any)=> {
            return data.path == this.$route.path
        })
        if(num === -1) {
            this.navTagList.push({
                path:'/upload',
                name:'upload',
                title: '文件上传'
            })
            this.setNavTagList(this.navTagList)
        }
    }
}
</script>