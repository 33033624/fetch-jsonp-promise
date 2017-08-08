// 假数据promise 为了与真实请求保持一致  写法保持一致
const mock = (resp) => {
  return new Promise((resolve, reject) => {
    resolve(resp)
  })
}
export default mock
