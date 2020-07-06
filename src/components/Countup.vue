<template>
  <span class="count-text count_to" v-bind:ref="countEl" id="count-up"></span>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { CountUp } from "countup.js";
@Component({})
export default class Countup extends Vue {
  // 元素
  @Prop({
    type: String,
    required: true,
    default: null
  })
  public countEl!: String;
  // 默认数据
  @Prop({
    type: Number,
    required: true,
    default: 0
  })
  public defaultCount!: number;

  // 新数据
  @Prop({
    type: Number,
    required: false,
    default: 0
  })
  public newCount!: number;

  // 自动更新
  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  public autoUpdate!: boolean;
  // 格式化数字
  @Prop({
    type: Boolean,
    required: false,
    default: true
  })
  public useGrouping!: boolean;
  // 是否执行延缓效果
  @Prop({
    type: Boolean,
    required: false,
    default: true
  })
  public useEasing!: boolean;

  // 执行秒数
  @Prop({
    type: Number,
    required: false,
    default: 2
  })
  public duration!: number;

  // 保留小数位
  @Prop({
    type: Number,
    required: false,
    default: 0
  })
  public decimal!: number;

  // 格式化符号
  @Prop({
    type: String,
    required: false,
    default: ","
  })
  public separator!: string;

  private countObj: any;
  mounted() {
    this.startCount();
  }
  startCount() {
    let that = this;
    that.countObj = new CountUp(
      that.$refs[that.countEl as any] as any,
      Number(that.defaultCount),
      {
        duration: that.duration,
        useGrouping: that.useGrouping,
        useEasing: that.useEasing,
        decimalPlaces: that.decimal,
        separator: that.separator
      }
    );
    that.countObj.start();
  }
  @Watch("newCount", { immediate: false, deep: true })
  autoUpdateCount() {
    let that = this;
    if (that.autoUpdate) {
      that.countObj.update(that.newCount);
    }
  }
  // 更新数据
  updateCount() {
    let that = this;
    that.countObj.update(that.newCount);
  }

  // 暂停数据
  pauseCount() {
    let that = this;
    that.countObj.pauseResume();
  }
  // 重新执行动画
  resetCount() {
    let that = this;
    that.countObj.reset();
  }

  // 重新渲染
  resetRender() {
    this.startCount();
  }
}
</script>