<template lang="html">
	<div class="">
		<hr class="visible-xs-block">

		<h4>
			% of <a href="#" @click.prevent="openBudgetDoc">Departmental Budget</a>
			<small>
				(page {{ docPageNumber }})
			</small>
		</h4>

		<canvas @click.prevent="openBudgetDoc" :id="chartId" class="chart" width="100%" height="100%"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js'

export default {
	name: 'chart',
	props: ['service', 'percent', 'docPageNumber'],
	computed: {
		chartId () {
			return this.service.serviceHeading.replace(/[^0-9a-zA-Z]/g, '')
		}
	},
	methods: {
		openBudgetDoc () {
			if (this.docPageNumber) {
				$('#issuuModal').modal('show')
				window.IssuuReaders.get(this.$store.state.issuuConfigId).setPageNumber(this.docPageNumber)
			}
		},
		intiChart () {
			Chart.defaults.global.tooltips.enabled = false;

			var ctx = document.getElementById(`${this.chartId}`).getContext('2d');

			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: [`${this.percent}%`],
					datasets: [
						{
							data: [
								this.percent,
								(100-this.percent)
							],
							backgroundColor: [
								'rgba(245,149,117, 1)',
								'rgba(22,67,113, 0.7)'
							],
						}
					],
				},
				options: {
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false
						}],
					}
				},
			});
		}
	},
	mounted () {
		this.intiChart()
	}
}
</script>

<style lang="css">
.chart {
	cursor: pointer;
}
</style>
