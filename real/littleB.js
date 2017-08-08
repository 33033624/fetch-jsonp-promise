import {get} from '../ajax.js'
const host = ''

export const getActivityList = () => get(`${host}/activity/list`)

export const getActivityDetail = (id) => get(`${host}/activity/detail?id=${id}`)

export const getInfoList = ({uid, zzActivityId, pageNum, pageSize}) => get(`${host}/info/list?uid=${uid}&zzActivityId=${zzActivityId}&pageNum=${pageNum}&pageSize=${pageSize}`)

export const getBrandlist = () => get(`${host}/cate/brandlist`)

export const getModellist = (brandId) => get(`${host}/cate/modellist?brandId=${brandId}`)

export const getAttrlist = (modelId) => get(`${host}/cate/attrlist?modelId=${modelId}`)
