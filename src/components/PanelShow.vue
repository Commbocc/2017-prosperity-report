<template>
	<div class="economic-development">

		<ul class="list-unstyled">
			<panel :panel="panel"></panel>
		</ul>

		<router-view></router-view>

	</div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
	name: 'economic-development',
	props: ['panel'],
	components: {
		'panel': Panel
	}
}
</script>
