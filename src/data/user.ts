const Mock = require('mockjs');
const baseUrl = 'http://mock.gionlee.com';
const User = Mock.mock(`${baseUrl}/user`, 'get', {
    'name': '@name',
    'age|20-30': 50,
})
const Login = Mock.mock(`${baseUrl}/user`, 'post', (options: any) => {
    let data = JSON.parse(options.body)
    if (data.name == 'admin' && data.password == '123456') {
        return  Object.assign({result: true},Mock.mock({
            'name': '@name',
            'age|20-30': 50,
        }))
    } else {
        return {
            result: false,
            msg:'用户名或密码错误！'
        }
    }
})
export default { Login, User }
