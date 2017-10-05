<template lang="html">
	<section>
		<div class="alert alert-danger">
			<h4 class="title">
				Service Provided
			</h4>

			<p>
				<strong v-text="service.serviceHeading"></strong>
			</p>

			<ul>
				<li v-for="service in service.services" v-html="service"></li>
			</ul>
		</div>

		<!--  -->

		<div class="row">
			<div class="col-sm-10 col-sm-offset-1">
				<div class="block-grid-xs-1 block-grid-sm-2">
					<div v-for="ss in service.serviceStats" class="text-center">
						<p class="h3">
							{{ ss.title }}
						</p>
						<p class="h2 text-primary" style="margin:0;">
							{{ ss.value }}
						</p>
						<small v-if="ss.note">
							{{ ss.note }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-xs-12" style="margin: 15px 0;">
				<ul class="list-unstyled text-center text-muted">
					<li v-for="note in service.serviceNotes" v-html="note"></li>
				</ul>
			</div>
		</div>

		<!--  -->

		<div class="alert alert-danger">
			<h4 class="title" style="margin:0;">Cost of Service</h4>
		</div>

		<!--  -->

		<dl class="dl-horizontal">
			<template v-for="sc in service.serviceCosts">
				<dt>
					{{ sc.title }}
					<small v-if="sc.note">
						<br>
						({{ sc.note }})
					</small>
				</dt>
				<dd class="h2 text-secondary" style="margin-top:0;">
					{{ sc.value }}
				</dd>
			</template>
		</dl>

		<!--  -->

		<div class="row">
			<div class="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4 text-center">

				<chart :service="service" :percent="service.totalBudgetPercent" :doc-page-number="service.budgetPageNumber"></chart>

			</div>
		</div>

		<!--  -->

		<footer v-if="service.footer" class="text-muted" style="margin-bottom:15px;">
			<hr>
			{{ service.footer }}
		</footer>

		<hr>
	</section>
</template>

<script>
import Chart from '@/components/Chart'

export default {
	name: 'department-service',
	props: ['service'],
	components: {
		Chart
	}
}
</script>

<style scoped>
@media (min-width: 768px) {
	.dl-horizontal dt {
		white-space: normal;
		width: 45%;
	}
	.dl-horizontal dd {
		margin-left: 50%;
	}
}
</style>
