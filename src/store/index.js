import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import panels from './panels'

export default new Vuex.Store({
	modules: {
		panels
	},
	state: {
		pageTitle: 'Prosperity Report',
		pageDescription: 'The County has identified five strategic outcomes, illustrated below, that together will achieve the ultimate goal of building prosperity for individuals and the community, while providing stellar customer service and satisfaction that contribute to a positive quality of life.',
		pageSubheading: 'County Administrator’s Recommended Budget FY 18/19'
	}
})
