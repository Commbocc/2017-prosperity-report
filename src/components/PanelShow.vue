<template>
	<div class="economic-development">

		<ul class="list-unstyled">
			<panel :panel="panel"></panel>
		</ul>

		<!--  -->

		<div class="alert alert-primary">
			<h3>
				{{ panel.heading }}<br>
				<small>
					{{ panel.subheading }}
				</small>
			</h3>
		</div>

		<!--  -->

		<div class="alert alert-danger">
			<h4 class="title">
				Service Provided
			</h4>

			<p>
				<strong v-text="panel.serviceHeading"></strong>
			</p>

			<ul>
				<li v-for="service in panel.services" v-html="service"></li>
			</ul>
		</div>

		<!--  -->

		<div class="row">
			<div class="col-sm-10 col-sm-offset-1">
				<div class="block-grid-sm-2">
					<div v-for="ss in panel.serviceStats" class="text-center">
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
					<li v-for="note in panel.serviceNotes" v-html="note"></li>
				</ul>
			</div>
		</div>

		<!--  -->

		<div class="alert alert-danger">
			<h4 class="title" style="margin:0;">Cost of Service</h4>
		</div>

		<!--  -->

		<dl class="dl-horizontal">
			<template v-for="sc in panel.serviceCosts">
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
			<div class="col-sm-8 text-center">
				<p class="h2">
					Total FY 18 Budget:
				</p>
				<p class="h1 text-secondary" style="margin-top: 5px;">
					{{ panel.totalBudget }}
				</p>
				<p v-if="panel.totalBudgetNote" v-html="panel.totalBudgetNote"></p>
			</div>

			<div class="col-sm-4 text-center">
				<chart :percent="panel.totalBudgetPercent"></chart>
			</div>
		</div>

		<!--  -->

		<footer v-if="panel.footer" class="text-muted" style="margin-bottom:15px;">
			<hr>
			{{ panel.footer }}
		</footer>

		<!--  -->

		<!-- <router-view></router-view> -->

	</div>
</template>

<script>
import Panel from '@/components/Panel'
import Chart from '@/components/Chart'

export default {
	name: 'economic-development',
	props: ['panel'],
	components: {
		'panel': Panel,
		'chart': Chart
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
