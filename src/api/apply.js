import base from '@/api/api'
const domain = base.baseapi.api
import { iotAxios } from 'iot-axios2'
const axios = iotAxios
//退出
export const apiLogout = params => {
	return axios.post(`${domain}/developercenter-api/index/logout`, params)
}
