<template>
	<div id="app" class="container">

		<div class="page-header">
			<a href="./">
				<p>
					<img src="./assets/logo.png" class="img-responsive center-block">
				</p>
			</a>
			<p class="text-center">
				{{ $store.state.pageSubheading }}
			</p>
		</div>

		<!-- <details><pre>{{ $store.state }}</pre></details> -->

		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<router-view></router-view>
			</div>
		</div>

		<modal></modal>

	</div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
	name: 'app',
	components: {
		'modal': Modal
	}
}
</script>

<style>
@import url("../node_modules/bootstrap-block-grid/dist/bootstrap3-block-grid.min.css");

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #231f20;
}

.text-primary {
	color: #f69471;
}
.text-secondary {
	color: #164371;
}

.alert-primary {
	background: #213B5E;
	color: #fff;
}

.alert-primary small {
	color: #fff;
}

.alert-danger {
	background: #FADDCB;
	color: #231f20;
}

.alert-danger .title {
	color: #213B5E;
}

</style>
