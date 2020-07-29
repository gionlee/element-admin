<template>
  <div class="editor-body">
    <editor
      id="editor"
      v-if="editorRender"
      v-model="editorHtml"
      api-key="no-api-key"
      :init="editorConfig"
    ></editor>
    <div class="editor-upload-btn">
      <el-button type="primary" size="small"><i class="el-icon-upload"></i><span>upload</span></el-button>
    </div>
    <div class="prview" v-html="editorHtml"></div>
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
import "tinymce/plugins/preview"; //预览插件
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
  private editorConfig = {}
  private editorHtml = '<p style="text-align: center;">代码改变世界</p>'
  private editorRender = false
  private mounted() {
    this.initEditor()
    this.editorRender = true
  }
  private initEditor() {
    this.editorConfig = {
      selector:'editor',
      paste_data_images: true, // 允许粘贴图像
      language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
      language: 'zh_CN',//语言
      skin_url: '/tinymce/skins/ui/oxide',// skin路径
         height: 500,
         menubar: 'file edit insert view format table',
         plugins: [
           'lists image media table  code fullscreen preview'
         ],
         toolbar:'bold  italic underline strikethrough  | styleselect | fontselect | fontsizeselect | copy | cut |alignleft aligncenter alignright alignjustify | lists  |  image | media | table |  code | fullscreen | preview ',
       }
  }
  // 路由切换时会触发deactivated/activated 在此时重新渲染编辑器用来接触切换路由富文本编辑器无法编辑的问题
  private deactivated () {
    console.log(this.editorHtml)
    this.editorRender = false
  }
  private activated () {
    this.editorRender = true
    this.initEditor()
  }
}
</script>