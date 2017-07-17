<template lang="html">
	<aside class="modal fade" id="issuuModal" tabindex="-1" role="dialog" aria-labelledby="issuuModalLabel">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">

				<header class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="issuuModalLabel">
						{{modalTitle }}
					</h4>
				</header>

				<div class="embed-responsive embed-responsive-16by9">
					<div :data-configid="$store.state.issuuConfigId" allowfullscreen class="embed-responsive-item issuuembed"></div>
				</div>

				<footer class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</footer>

			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'modal',
	data () {
		return {
			modalTitle: "FY 18/19 Hillsborough County Administrator's Recommended Budget"
		}
	}
}
</script>
