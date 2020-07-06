<template>
  <div>
    <el-row v-bind:gutter="20">
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">自动渐变</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate'"
                :defaultCount="beginNum"
                :newCount="updateNum * 1"
                :autoUpdate="autoUpdate"
              ></Countup>
            </div>
            <el-form label-width="80px">
              <el-form-item label="渐变数字">
                <el-input v-model="updateNum" :disabled="!autoUpdate"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer">
            <el-checkbox v-model="autoUpdate">自动更新</el-checkbox>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">手动更新</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate1'"
                ref="autoupdate1"
                :defaultCount="beginNum1"
                :newCount="updateNum1 * 1"
                :autoUpdate="false"
              ></Countup>
            </div>
            <el-form label-width="80px">
              <el-form-item label="渐变数字">
                <el-input v-model="updateNum1"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer center">
            <el-button type="primary" v-on:click="updateCount" size="small">更新</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">暂停/继续</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate2'"
                ref="autoupdate2"
                :defaultCount="beginNum2"
                :newCount="updateNum2 * 1"
                :autoUpdate="false"
              ></Countup>
            </div>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="resetCount" type="danger" size="small">重置</el-button>
            <el-button v-on:click="pauseCount" type="primary" size="small">暂停/继续</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">设置秒数</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate3'"
                ref="autoupdate3"
                :defaultCount="beginNum3"
                :duration="duration *1"
              ></Countup>
            </div>
            <el-form label-width="80px">
              <el-form-item label="动画秒数">
                <el-input v-model="duration"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="setDuration" type="primary" size="small">执行</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">格式化符号</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate4'"
                ref="autoupdate4"
                :defaultCount="beginNum4"
                :separator="separator"
              ></Countup>
            </div>
            <el-form label-width="80px">
              <el-form-item label="符号">
                <el-input v-model="separator"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="setDuration1" type="primary" size="small">执行</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">保留小数位</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate5'"
                ref="autoupdate5"
                :defaultCount="beginNum5"
                :autoUpdate="false"
                :decimal="decimal * 1"
              ></Countup>
            </div>
            <el-form label-width="80px">
              <el-form-item label="位数">
                <el-input v-model="decimal"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="setDuration2" type="primary" size="small">执行</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">格式化</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate6'"
                ref="autoupdate6"
                :defaultCount="beginNum5"
                :useGrouping="useGrouping"
              ></Countup>
            </div>
            <el-checkbox v-model="useGrouping">是否格式化</el-checkbox>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="setDuration3" type="primary" size="small">执行</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col v-bind:span="6">
        <el-card class="card-box">
          <div slot="header" class="clearfix">延缓效果</div>
          <div class="card-body">
            <div class="count-body">
              <Countup
                v-bind:countEl="'autoupdate7'"
                ref="autoupdate7"
                :defaultCount="beginNum5"
                :useEasing="useEasing"
              ></Countup>
            </div>
            <el-checkbox v-model="useEasing">延缓效果</el-checkbox>
          </div>
          <div class="card-footer center">
            <el-button v-on:click="setDuration4" type="primary" size="small">执行</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class CountTo extends Vue {
  private beginNum = 10000;
  private updateNum = 10000;
  private beginNum1 = 10000;
  private updateNum1 = 30000;
  private beginNum2 = 10000;
  private updateNum2 = 30000;
  private beginNum3 = 10000;
  private beginNum4 = 10000;
  private beginNum5 = 10000;
  private autoUpdate = false;
  private autoUpdate1 = false;
  private duration = 3;
  private separator = "";
  private decimal = 0;
  private useEasing = false;
  private useGrouping = false;
  updateCount() {
    (this.$refs.autoupdate1 as any).updateCount();
  }
  pauseCount() {
    (this.$refs.autoupdate2 as any).pauseCount();
  }
  resetCount() {
    (this.$refs.autoupdate2 as any).resetCount();
  }
  setDuration() {
    (this.$refs.autoupdate3 as any).resetRender();
  }
  setDuration1() {
    (this.$refs.autoupdate4 as any).resetRender();
  }
  setDuration2() {
    (this.$refs.autoupdate5 as any).resetRender();
  }
  setDuration3() {
    (this.$refs.autoupdate6 as any).resetRender();
  }
  setDuration4() {
    (this.$refs.autoupdate7 as any).resetRender();
  }
}
</script>
<style lang="css" scoped>
.card-box {
  height: 300px !important;
  margin-top: 15px;
}
.card-body {
  height: 160px !important;
}
.count-body {
  height: 120px;
  /* margin-bottom: 20px; */
}
.count-body >>> .count-text {
  font-size: 30px;
  color: #f56c6c;
}
.card-box >>> .el-input__inner {
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid #ccc !important;
}
.card-footer {
  padding: 10px 0;
  height: 40px;
  line-height: 40px;
}
.center {
  text-align: center;
}
</style>