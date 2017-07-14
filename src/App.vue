<template>
	<div id="app" class="container">

		<div class="page-header">
			<router-link :to="{ name: 'Home' }">
				<img src="./assets/logo.png" class="img-responsive center-block">
			</router-link>
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #231f20;
}

.text-primary {
	color: #f69471;
}
</style>
