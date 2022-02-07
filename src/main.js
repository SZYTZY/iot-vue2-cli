import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import base from '@/api/api'
import utils from '@/assets/js/utils.js'
import { iotAxios } from 'iot-axios2'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import Components from './components/base'
Vue.use(Components) //基础组件
window.loginDateCallback = function(){	//登录过期
	if (self != top) {
		parent.window.location.href = '/developercenter/static/develop.html#/system/login'
	} else {
		window.location.href = '/developercenter/static/develop.html#/system/login'
	}
}
Vue.prototype.$axios = iotAxios
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()
Vue.prototype.$envapi = base.baseapi.api //接口请求域名
Vue.prototype.$envweb = base.baseapi.web //项目地址域名
Vue.prototype.$utils = utils //js公共方法
Vue.prototype.$formRuleError = utils.formRuleError
Vue.prototype.$cookies = utils.cookies
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
