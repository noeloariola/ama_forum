import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.use(Router, axios)
var router = new Router({
	mode: 'history',
	// base:  '/refresher',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
			meta: {
				auth: false
			}
		},
		{
			path: '/login',
			name: 'login',
			components: {
				default: () => import('./components/Login.vue'),
			},
			meta: {
				auth: false
			}
		},
		{
			path: '/admin',
			name: 'admin_page',
			components: {
				default: () => import('./components/AdminPage.vue'),
			},
			meta: {
				auth: false
			}
		},
	]
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.auth)) { 
// 		if(store.state.user) {
// 			if( authHelper.isAuthorize(store.state.user, to.meta.auth.roles)) {
//             	return next()
// 			}else {
// 				return next({
// 					name: 'login',
// 					query: {
// 						redirect: to.fullPath
// 					}
// 				})
// 			}
// 		}else {
// 			return next({
// 				path: '/login',
// 				query: {
// 					redirect: to.fullPath
// 				}
// 			})
// 		}
// 	}else {
// 		if(to.name == "login") {
// 			if(authHelper.isLogged(store.state.user)) {
// 				return next('/')
// 			}
// 		}
// 		return next();
// 	}
// })
export default router;
