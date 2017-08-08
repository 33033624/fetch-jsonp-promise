import * as FETCH from '../fetch.js'
const host = '//youpin.58.com'
export const getLogin = () => FETCH.fetch_get(`${host}/login`)
