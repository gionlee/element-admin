<template v-loack>
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
      <el-col v-bind:span="24">
        <div class="line_charts" id="line_charts"></div>
      </el-col>
      <el-col v-bind:span="8">
        <div class="pie_charts" id="pie_charts"></div>
      </el-col>
      <el-col v-bind:span="8">
        <div class="radar_charts" id="radar_charts"></div>
      </el-col>
      <el-col v-bind:span="8">
        <div class="bar_charts" id="bar_charts"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import API from "@/data/mock-api";
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
  public nums = 1000;
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
  private line_options: object = {
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
  private pie_options: any = {
    title: {
      text: "交易统计",
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: 10,
      top: 20,
      bottom: 20,
      data: ["待入帐金额", "退款金额"]
    },
    series: [
      {
        name: "交易金额",
        type: "pie",
        radius: "50%",
        center: ["45%", "50%"],
        data: [
          {
            value: 0,
            name: "待入帐金额"
          },
          {
            value: 0,
            name: "退款金额"
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  private radar_options: object = {
    title: {
      text: "交易类型",
      left: "center"
    },
    grid: {
      // 控制图的大小，调整下面这些值就可以，
      x: 40,
      x2: 100,
      y2: 150 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
    },
    tooltip: {},
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: "#fff",
          backgroundColor: "#999",
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: "销售", max: 6500 },
        { name: "管理", max: 16000 },
        { name: "信息技术", max: 30000 },
        { name: "客服", max: 38000 },
        { name: "研发", max: 52000 },
        { name: "市场", max: 25000 }
      ],
      radius: "65%"
    },
    series: [
      {
        name: "预算 vs 开销",
        type: "radar",

        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: "预算分配"
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: "实际开销"
          }
        ]
      }
    ]
  };
  private bar_options: object = {
    title: {
      text: "订单数量",
      left: "center"
    },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar"
      }
    ]
  };
  public created() {
    API.EchartsLineData;
    this.fnGetLineData();
  }
  public mounted() {}
  private fnGetLineData() {
    http({ url: "/echarts/line", method: "get" }).then(res => {
      let tradeInfo = res.data.tradeInfo;
      this.tradeList[0].count = tradeInfo.tradeNum;
      this.tradeList[1].count = tradeInfo.tradeMoney;
      this.tradeList[2].count = tradeInfo.tradeMoney - tradeInfo.refundMoney;
      this.tradeList[3].count = tradeInfo.refundMoney;
      this.pie_options.series[0].data[0].value =
        tradeInfo.tradeMoney - tradeInfo.refundMoney;
      this.pie_options.series[0].data[1].value = tradeInfo.refundMoney;
      this.$forceUpdate();
      this.fnDrawCharts();
    });
  }
  private fnDrawCharts() {
    let line_el = document.getElementById("line_charts") as HTMLCanvasElement;
    let pie_el = document.getElementById("pie_charts") as HTMLCanvasElement;
    let radar_el = document.getElementById("radar_charts") as HTMLCanvasElement;
    let bar_el = document.getElementById("bar_charts") as HTMLCanvasElement;
    let line_charts: any = Echart.init(line_el);
    let pie_charts: any = Echart.init(pie_el);
    let radar_charts: any = Echart.init(radar_el);
    let bar_charts: any = Echart.init(bar_el);
    line_charts.setOption(this.line_options);
    pie_charts.setOption(this.pie_options, true);
    radar_charts.setOption(this.radar_options);
    bar_charts.setOption(this.bar_options);
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
.line_charts,
.pie_charts,
.radar_charts,
.bar_charts {
  height: 400px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
}
.line_charts {
  margin: 30px 0;
}
</style>