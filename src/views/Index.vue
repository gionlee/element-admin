<template>
  <div class="wrap">
    <el-row v-bind:gutter="20">
      <el-col v-for="(item,index) in tradeList" v-bind:key="index" v-bind:span="6">
        <div class="trade_card" shadow="hover">
          <div class="trade_icon" v-bind:style="{color:item.color}">
            <i v-bind:class="item.icon"></i>
          </div>
          <div class="trade_info">
            <div class="trade_num">{{item.count | formatCount}}</div>
            <div class="trade_title">{{item.title}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="line_charts" id="myEcharts"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import Echart from "echarts";
import http from "@/libs/request";
@Component({
  filters: {
    formatCount(value: any) {
      let [pre, decimal, s1, s2] = ["", "", "", ""];
      value = String(value);
      s1 = value
        .split(".")[0]
        .split("")
        .reverse()
        .join("");
      decimal = value.split(".")[1] || "";
      if (isNaN(Number(s1[s1.length - 1]))) {
        pre = s1[s1.length - 1];
        s1 = s1.substring(0, s1.length - 1);
      }
      for (var i = 0, n = s1.length; i < n; i++) {
        i % 3 == 0 && i > 0 && s1
          ? (s2 += "," + (s1[i] || ""))
          : (s2 += s1[i] || "");
      }
      return (
        pre +
        s2
          .split("")
          .reverse()
          .join("") +
        (decimal ? "." + decimal : "")
      );
    }
  }
})
export default class Main extends Vue {
  public title = "首页";
  public tradeList = [
    {
      icon: "el-icon-data-analysis",
      color: "#2d8cf0",
      count: 1000,
      title: "交易笔数"
    },
    {
      icon: "el-icon-money",
      color: "#f4516c",
      count: 1000.0,
      title: "交易金额"
    },
    {
      icon: "el-icon-document-add",
      color: "#19be6b",
      count: 999.99,
      title: "待入帐金额"
    },
    {
      icon: "el-icon-document-remove",
      color: "#ed3f14",
      count: 0.01,
      title: "退款金额"
    }
  ];
  public $echarts: any = Echart;
  private options: object = {
    title: {
      text: "折线图堆叠"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["交易笔数", "交易金额", "待入帐金额", "退款金额"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "交易笔数",
        type: "line",
        data: [400, 500, 600, 800, 1000, 1000, 600]
      },
      {
        name: "交易金额",
        type: "line",
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: "待入帐金额",
        type: "line",
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: "退款金额",
        type: "line",
        data: [320, 332, 301, 334, 390, 330, 320]
      }
    ]
  };

  public mounted() {
    let el = document.getElementById("myEcharts") as HTMLCanvasElement;
    el as any;
    this.$nextTick(() => {
      if (el) {
        const chart: any = Echart.init(el);
        chart.setOption(this.options);
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.trade_card {
  height: 100px;
  width: 100%;
  // border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
}

.trade_icon {
  width: 30%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  float: left;
}
.trade_info {
  float: left;
  width: 60%;
  padding: 20px 0;
  text-align: right;
}
.trade_num {
  font-size: 34px;
  color: #515a6e;
}
.trade_title {
  font-size: 14px;
  line-height: 20px;
  color: #666;
}
.line_charts {
  height: 400px;
  margin: 30px 0;
}
</style>