<template lang="html">
	<article>
		<div class="alert alert-primary">
			<h3>
				{{ department.heading }}<br>
				<small>
					{{ department.subheading }}
				</small>
			</h3>
		</div>

		<!--  -->
		<div class="text-center">
			<p class="h2">
				Total FY 18 Budget:
			</p>
			<p class="h1 text-secondary" style="margin-top: 5px;">
				{{ department.totalBudget }}
			</p>
			<p v-if="department.totalBudgetNote" v-html="department.totalBudgetNote"></p>
		</div>

		<!--  -->
		<dept-service v-for="(service, index) in department.services" :key="index" :service="service"></dept-service>

	</article>
</template>

<script>
import DeptService from '@/components/DepartmentService'

export default {
	name: 'department-section',
	props: ['department'],
	components: {
		DeptService
	}
}
</script>
