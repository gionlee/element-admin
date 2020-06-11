const Mock = require("mockjs");
const baseUrl = "http://mock.gionlee.com";
const API = {
  Login: Mock.mock(`${baseUrl}/user`, "post", (options: any) => {
    const data = JSON.parse(options.body);
    if (data.name == "admin" && data.password == "123456") {
      return Object.assign(
        { result: true },
        Mock.mock({
          name: "@name",
          "age|20-30": 50,
        })
      );
    } else {
      return {
        result: false,
        msg: "用户名或密码错误！",
      };
    }
  }),
  EchartsLineData: Mock.mock(`${baseUrl}/echarts/line`, "get", () => {
    return Object.assign(
      { result: true },
      Mock.mock({
        tradeInfo: {
          "tradeNum|10-1000": 10,
          "tradeMoney|5000-50000": 5000,
          "refundMoney|10-200": 10,
        },
      })
    );
  }),
};
export default API;
