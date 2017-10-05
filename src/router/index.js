import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from '@/store'

import Home from '@/components/Home'
import PanelShow from '@/components/PanelShow'

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/local-economy',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[0]
			},
			children: [{
				path: '/',
				name: 'LocalEconomy'
			}]
		},
		{
			path: '/public-safety',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[1]
			},
			children: [{
				path: '/',
				name: 'PublicSafety'
			}]
		},
		{
			path: '/life-enrichment',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[2]
			},
			children: [{
				path: '/',
				name: 'LifeEnrichment'
			}]
		},
		{
			path: '/individuals-families',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[3]
			},
			children: [{
				path: '/',
				name: 'IndividualsFamilies'
			}]
		},
		{
			path: '/community-assets',
			component: PanelShow,
			props: {
				panel: store.state.panels.index[4]
			},
			children: [{
				path: '/',
				name: 'CommunityAssets'
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
