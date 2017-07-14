<template lang="html">
	<div class="">

		<hr class="visible-xs-block">

		<h4>% of Departmental Budget</h4>

		<canvas @click.prevent="goToLink" id="myChart" width="100%" height="100%"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js'

export default {
	name: 'chart',
	props: ['percent', 'link'],
	methods: {
		intiChart () {

			Chart.defaults.global.tooltips.enabled = false;

			var ctx = document.getElementById("myChart").getContext('2d');

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
		},
		goToLink () {
			if (this.link) {
				window.open(this.link, '_blank')
			}
		}
	},
	mounted () {
		this.intiChart()
	}
}
</script>

<style lang="css">
#myChart {
	cursor: pointer;
}
</style>
