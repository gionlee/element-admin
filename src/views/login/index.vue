<template v-cloak>
  <div class="wrap">
    <div class="login">
      <div class="title">登录</div>
      <el-form status-icon :model="userInfo" ref="user" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userInfo.name" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userInfo.password"
            autocomplete="off"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped >
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("~@/assets/login-bg.jpg");
  background-size: 100% 100%;
}
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 100px;
  margin: auto;
  width: 320px;
  height: 230px;
  padding: 20px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.title {
  color: #fff;
  height: 42px;
  line-height: 42px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
}
.el-form-item__label {
  color: #fff !important;
  font-size: 16px !important;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import API from "@/data/mock-api";
import { Form } from "element-ui";
import http from "@/libs/request";
@Component({})
export default class Login extends Vue {
  public userInfo = {
    name: "admin",
    password: "123456"
  };
  public rules = {
    name: [{ required: true, message: "用户名不得为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不得为空", trigger: "blur" }]
  };
  private mounted() {
    API.Login;
  }
  private login() {
    const that = this;
    (this.$refs.user as Vue & { validate: (valid: any) => boolean }).validate(
      (valid: any) => {
        if (valid) {
          http({ url: "/user", method: "post", data: that.userInfo })
            .then((res: any) => {
              console.log(res);
              if (res.data.result) {
                that.$message({
                  message: "登录成功,请稍等！",
                  type: "success",
                  duration: 1500,
                  onClose: () => {
                    that.$router.push({
                      path: "/index"
                    });
                  }
                });
              } else {
                that.$message({
                  message: res.data.msg,
                  type: "error",
                  duration: 1500,
                  onClose: () => {}
                });
              }
            })
            .catch((error: any) => {
              console.log(error);
            });
        }
      }
    );
  }
}
</script>