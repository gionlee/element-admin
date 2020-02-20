
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list: any[],oldList?: any[]) => {
    let res = oldList || []
    list.forEach( (item: any) => {
        if(item.children && item.children.length > 0) {
            getMenuByRouter(item.children,res)
        } else {
            res.push(item)
        }
    });
    return res
}
  