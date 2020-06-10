<template>
<div>
    <GEditor api-key="no-api-key"></GEditor>
</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
 import GEditor from '@tinymce/tinymce-vue'
@Component({
    components:{
        GEditor
    }
})
export default class Editor extends Vue {
   
}
</script>