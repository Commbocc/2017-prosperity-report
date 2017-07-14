<template>
	<div id="home">

		<h1 class="text-primary">
			{{ $store.state.pageTitle }}
		</h1>

		<div class="lead">
			{{ $store.state.pageDescription }}
		</div>

		<ol class="list-unstyled">
			<panel v-for="(panel, index) in $store.state.panels.index" :panel="panel" :key="index"></panel>
		</ol>

	</div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
	name: 'home',
	components: {
		'panel': Panel
	}
}
</script>
