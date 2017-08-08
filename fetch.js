import queryString from 'query-string'

// 工厂函数 可以生产出各种请求的函数
export const fetch_factory = ({method, Type, CORS}) => {

  return async (path, params) => {
    const fetch_option = {
      method: method,
      mode: CORS ? CORS : 'no-cors',
      headers: {},
      credentials: 'include'
    }

    params ? Object.assign(fetch_option.headers, params.headers) : ''

    Type === 'JSON' ? fetch_option.body = JSON.stringify(params) : path += `?${queryString.stringify(params)}`

    try {
      console.log(`%cpath ======> ${path}`, 'color: green')
      const resp = await fetch(path, fetch_option)
      return resp
    }
    catch (err) {
      console.error(err)
      return {
        code: 400,
        message: "网络请求错误"
      }
    }
  }
}

export const fetch_get = fetch_factory({method: 'GET', Type: 'QUERY'})
export const fetch_post = fetch_factory({method: 'POST',Type: 'JSON'})
export const fetch_put = fetch_factory({method: 'PUT',Type: 'JSON'})
