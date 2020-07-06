<template>
  <div>
    <editor
      api-key="no-api-key"
      :init="{
          language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
      language: 'zh_CN',//语言
      skin_url: '/tinymce/skins/ui/oxide',// skin路径
         height: 500,
         menubar: 'file edit insert view format table',
         plugins: [
           'lists image media table  code fullscreen preview'
         ],
         toolbar:'bold  italic underline strikethrough  | styleselect | fontselect | fontsizeselect | copy | cut |alignleft aligncenter alignright alignjustify | lists  |  image | media | table |  code | fullscreen | preview ',
       }"
    ></editor>
  </div>
</template>
<script lang="ts">
//样式
import "tinymce/skins/content/default/content.min.css";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default/icons";

import "tinymce/plugins/code"; //链接插件
import "tinymce/plugins/link"; //链接插件
import "tinymce/plugins/image"; //图片插件
import "tinymce/plugins/media"; //媒体插件
import "tinymce/plugins/table"; //表格插件
import "tinymce/plugins/lists"; //列表插件
import "tinymce/plugins/quickbars"; //快速栏插件
import "tinymce/plugins/fullscreen"; //全屏插件
import "tinymce/plugins/preview"; //全屏插件
import "tinymce/plugins/textcolor";
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import Editor from "@tinymce/tinymce-vue";
@Component({
  components: {
    Editor
  }
})
export default class EditorText extends Vue {
  @State("menuList") public menuList: any;
  @Mutation("setMenuList") public setMenuList: any;
  private mounted() {}
}
</script>