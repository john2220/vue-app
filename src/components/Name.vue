<template>
	<div class="col-sm-6 col-md-4 col-lg-3 my-2">
		<div class="panel panel-default">
			<div class="panel-body name">
				<slot></slot>
			</div>
		</div>
	</div>	
</template>


<script>
	export default {
		props: ['names']
	}
</script>


<style scope>
	.panel-body {
        font-size: 24px;
        color: #6e6e6e;
        border: 1px solid lightgrey;
        padding:10px;
    }

</style>