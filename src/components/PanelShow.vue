<template>
	<div class="economic-development">

		<ul class="list-unstyled">
			<panel :panel="panel"></panel>
		</ul>

		<!--  -->
		<dept-section v-for="(department, index) in panel.departments" :key="index" :department="department"></dept-section>

		<!-- <router-view></router-view> -->

	</div>
</template>

<script>
import Panel from '@/components/Panel'
import DeptSection from '@/components/DepartmentSection'

export default {
	name: 'penel',
	props: ['panel'],
	components: {
		Panel,
		DeptSection
	}
}
</script>
