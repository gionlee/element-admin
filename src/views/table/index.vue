<template>
  <div>
    <el-card>
      <div slot="header">
        <el-form v-bind:inline="true">
          <el-form-item label="订单类型">
            <el-select v-model="payType">
              <el-option
                v-for="(item,index) in typeList"
                :key="index"
                :value="item.value"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="下单时间">
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            <el-form-item>
              <el-button class="btn-search" type="primary">检索</el-button>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%" height="460">
        <el-table-column label="订单号" prop="orderNo"></el-table-column>
        <el-table-column label="日期" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.type == 'success'" size="success">已支付</el-tag>
            <el-tag v-if="scope.row.type == 'notpaid'" size="warning">待付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          class="pages"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </el-card>
    <el-dialog
      v-bind:title="'订单号：' + orderDetails.orderNo"
      :visible.sync="isEditOrder"
      width="450px"
    >
      <el-form v-model="orderDetails" :label-position="'top'">
        <el-form-item label="日期">
          <el-date-picker
            v-model="orderDetails.date"
            type="date"
            placeholder="选择日期"
            class="g-width-100"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="orderDetails.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="orderDetails.address"></el-input>
        </el-form-item>
        <el-form-item label="订单类型">
          <el-select v-model="orderDetails.type" class="g-width-100">
            <el-option
              v-for="(item,index) in typeList"
              :key="index"
              :value="item.value"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEditOrder = false">取 消</el-button>
        <el-button type="primary" @click="isEditOrder = true">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getCurrentMonthFirst, getCurrentMonthLast } from "@/libs/util";
@Component({})
export default class Table extends Vue {
  private payType = "all";
  private date = [getCurrentMonthFirst(), getCurrentMonthLast()];
  private typeList = [
    {
      value: "all",
      name: "全部"
    },
    {
      value: "success",
      name: "已支付"
    },
    {
      value: "notpaid",
      name: "代付款"
    }
  ];
  private currentPage4 = 2;
  private orderDetails = {};
  private isEditOrder = false;
  private tableData = [
    {
      orderNo: "g126036803257340376",
      date: "2016-05-02",
      type: "success",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      orderNo: "g126036803257340376",
      date: "2016-05-04",
      type: "success",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      orderNo: "g126036803257340376",
      date: "2016-05-01",
      type: "notpaid",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
    {
      orderNo: "g126036803257340376",
      date: "2016-05-03",
      type: "success",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ];
  mounted() {
    console.log(this.date);
  }
  handleEdit(index: number, row: any) {
    console.log(index, row);
    this.isEditOrder = true;
    this.orderDetails = row;
  }
  handleDelete(index: number, row?: any) {
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }
  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
  }
}
</script>
<style lang="scss">
.btn-search {
  margin-left: 10px !important;
}
.pages {
  text-align: right;
  margin-top: 15px;
}
.g-width-100 {
  width: 100% !important;
}
.el-dialog__body {
  padding: 0 20px;
}
</style>