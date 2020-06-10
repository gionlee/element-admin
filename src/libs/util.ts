
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list: any[], oldList?: any[]) => {
    const res = oldList || [];
    list.forEach( (item: any) => {
        if (!item.meta) {
            if (item.children.length == 1) {
                const navTag = JSON.parse(JSON.stringify(item.children[0]));
                const fPath =   item.path == '/' ? '' : item.path;
                const pathUrl = fPath + '/' + item.children[0].path;
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

