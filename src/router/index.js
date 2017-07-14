import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from '@/store'

import Home from '@/components/Home'
import PanelShow from '@/components/PanelShow'

import EconDev from '@/components/pages/EconDev'
import FireRescue from '@/components/pages/FireRescue'
import Conservation from '@/components/pages/Conservation'
import Social from '@/components/pages/Social'
import PublicWorks from '@/components/pages/PublicWorks'


export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/economic-development',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[0]
			},
			children: [{
				path: '/',
				name: 'EconDev',
				component: EconDev,
			}]
		},
		{
			path: '/fire-rescue',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[1]
			},
			children: [{
				path: '/',
				name: 'FireRescue',
				component: FireRescue,
			}]
		},
		{
			path: '/conservation-environmental-land-management',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[2]
			},
			children: [{
				path: '/',
				name: 'Conservation',
				component: Conservation,
			}]
		},
		{
			path: '/social-services',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[3]
			},
			children: [{
				path: '/',
				name: 'Social',
				component: Social,
			}]
		},
		{
			path: '/public-works',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[4]
			},
			children: [{
				path: '/',
				name: 'PublicWorks',
				component: PublicWorks,
			}]
		},
		{
			path: '*',
			component: Home
		}
	],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
