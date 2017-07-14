<template lang="html">
	<li class="panel">

		<div class="panel-heading" :style="`background: rgba(${panel.colorRGB}, 0.8)`">
			<router-link :to="panel.path" class="panel-title">

				<i class="triangle"></i>

				<div class="row">
					<div class="col-xs-12 col-sm-3 col-md-3 vertical-align li-number text-center">
						<span class="text-center">
							{{ panel.index }}
						</span>
					</div>
					<div class="col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 vertical-align li-title text-center-xs">
						<span>
							{{ panel.title }}
						</span>
					</div>
					<div class="col-sm-2 col-md-2 vertical-align li-graphic">
						<img :src="panel.icon" alt="" class="img-responsive center-block">
					</div>
				</div>

			</router-link>
		</div>

	</li>
</template>

<script>
export default {
	name: 'panel',
	props: ['panel']
}
</script>

<style scoped>

.panel-title {
	text-decoration: none !important;
	font-size: 20px;
	position: relative;
}

.li-number {
	font-size: 50px;
	color: #fff;
}

.li-number > span {
	display: block;
	position: relative;
}

.li-graphic img {
	width: 100%;
	max-width: 100%;
}

.li-title {
	color: #231f20 !important;
}

@media (max-width: 767px) {
	.text-center-xs {
		text-align: center;
	}
	.li-graphic img {
		max-width: 30%;
	}

	.li-number {
		position: relative;
		padding: 10px 0;
		margin: -10px 0 20px 0;
	}
	.li-number:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		border-left: 100px solid transparent;
		border-right: 100px solid transparent;
		border-top: 85px solid rgba(0,0,0,0.15);
		z-index: 0;
	}

}

@media (min-width: 768px) {
	.vertical-align {
		height: 120px;
		line-height: 120px;
	}
	.vertical-align > span {
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
	}
	.vertical-align > img {
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
	}

	.triangle {
		position: absolute;
		top: -10px;
		left: 150px;
		right: 0;
		border-top: 70px solid transparent;
		border-left: 35px solid rgba(0,0,0,0.15);
		border-bottom: 70px solid transparent;
	}
	.triangle:before {
		content: "";
		position: absolute;
		top: -70px;
		left: -185px;
		background: rgba(0,0,0,0.15);
		width: 150px;
		height: 140px;
	}
}

</style>
