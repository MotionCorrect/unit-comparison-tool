<script lang="ts">
	import '../app.css';
</script>

<div class="root-layout">
	<slot />
</div>

<style>
	.root-layout {
		min-height: 100vh;
		width: 100%;
		background-color: #202023;
	}
</style>
