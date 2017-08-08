//  假数据
import * as MOCK from './mock'
//  真实数据
import * as REAL from './real'
let SERVER = {}
// 手动修改real的真假
const real = false
SERVER = real ? REAL : MOCK
export default SERVER
