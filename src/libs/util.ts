/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list: any[], oldList?: any[]) => {
  const res = oldList || [];
  list.forEach((item: any) => {
    if (!item.meta) {
      if (item.children.length == 1) {
        const navTag = JSON.parse(JSON.stringify(item.children[0]));
        const fPath = item.path == "/" ? "" : item.path;
        const pathUrl = fPath + "/" + item.children[0].path;
        navTag.path = pathUrl;
        res.push(navTag);
      } else {
        getMenuByRouter(item.children, res);
      }
    } else {
      res.push(item);
    }
  });
  return res;
};
/**
 * 格式化日期
 * @param {String} fmt [日期类型 默认为年月日（yyyy-MM-dd）]
 */
export const getDateFormat = (fmt = "yyyy-MM-dd", date = new Date()) => {
  var times: any = {
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var key in times) {
    if (new RegExp("(" + key + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? times[key]
          : ("00" + times[key]).substr(("" + times[key]).length)
      );
    }
  }
  return fmt;
};
/**
 * 获取当前月的第一天
 * @param {String} fmt [日期类型 默认为年月日（yyyy-MM-dd）]
 */
export const getCurrentMonthFirst = (format = "yyyy-MM-dd") => {
  var date = new Date();
  return getDateFormat(
    format,
    new Date(date.getFullYear(), date.getMonth(), 1)
  );
};

/**
 * 获取当前月的最后一天
 * @param {String} fmt [日期类型 默认为年月日（yyyy-MM-dd）]
 */
export const getCurrentMonthLast = (format = "yyyy-MM-dd") => {
  var date = new Date();
  var currentMonth = date.getMonth();
  var nextMonth = ++currentMonth;
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1).getTime();
  var oneDay = 1000 * 60 * 60 * 24;
  return getDateFormat(format, new Date(nextMonthFirstDay - oneDay));
};
