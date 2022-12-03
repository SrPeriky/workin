<template>
	<div class="card">
		<div class="card-body">
	
			<h1>{{title}}</h1>
			<slot></slot>
			<div class="d-grid gap-2">
				<button
					v-for="btn in btns"
					:key="btn.txt"
					class="btn"
					:class="btn.class">
					{{ btn.txt }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardComp',
		props: ['title', 'parrafo', 'btns'],
	}
</script>