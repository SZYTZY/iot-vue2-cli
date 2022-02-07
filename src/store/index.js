import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		curPath: '', //当前路由地址
	},
	getters: {},
	mutations: {
		updateCurPath(state, path) {
			state.curPath = path
		}
	},
	modules: {
		user
	}
})
