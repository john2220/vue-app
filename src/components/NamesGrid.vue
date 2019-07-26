<template>
	<div class="row">
		<app-name v-for="(name, index) in names" key="name.id">
			<div class="d-flex justify-content-between align-items-center">
				<p>Name:</p>
				<span>{{ name.name }}</span>	
			</div>
			<div class="d-flex justify-content-between align-items-center">
				<p>Hours:</p>
				<span>{{ name.hours }}</span>
			</div>
			<div class="d-flex justify-content-between align-items-center final-tip">
				<p>Tips:</p>
				<span>{{ name.final }} $</span>
			</div>
			<div class="d-flex justify-content-end mt-2">
				<button class="delete-btn d-flex justify-content-center" @click="deleteName(index)">
					<span> &#10005;</span>
				</button>
			</div>

		</app-name>
	</div>	
</template>


<script>
	import Name from './Name.vue';
	export default {
		props: ['names'],
		components: {
			appName: Name
		},
		methods: {
			deleteName(index) {
				this.$emit('nameDeleted', index);
			}
		}
	}

</script>


<style scoped>
p {
	margin: 6px 0;
	border-bottom: 2px solid green;
	padding: 6px;
}

.final-tip p {
	border-bottom: 2px solid red;
}

span {
	border-bottom: 2px solid green;
}

.final-tip span {
	border-bottom: 2px solid red;
}

.delete-btn {
	background: #00000080;
	width: 80px;
	height: 36px;
	border: none;
	margin-top: 1rem;
}

.delete-btn span {
	border: none;
	color: #fff;
	font-size: 16px;
}
</style>