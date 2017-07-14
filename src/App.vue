<template>
	<div id="app" class="container">

		<div class="page-header">
			<router-link :to="{ name: 'Home' }">
				<p>
					<img src="./assets/logo.png" class="img-responsive center-block">
				</p>
			</router-link>
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

	</div>
</template>

<script>
export default {
	name: 'app'
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
