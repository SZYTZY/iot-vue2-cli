import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
Vue.use(Router)
const router = new Router({
	mode: 'hash',
	routes: [
		{
			path: '/home',
			component: () =>	import ( /* webpackChunkName: "home" */ '@/views/home.vue'),
			name: 'home',
			meta: {
				keepAlive: false
			},
			children: homeRouter
		},
		{
			path: '*',
			redirect: {
				path: '/home'
			}
		}
	]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router