<script>
	import { factions, unitTypes } from '../data/descriptions'; // Example: Data describing factions and unit types
	import { goto } from '$app/navigation';

	/**
	 * @param {string | URL} route
	 */
	function navigateTo(route) {
		goto(route);
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-3xl font-bold">Welcome to Beyond All Reason Unit Visualizer</h1>
	<p class="mb-4">
		Explore and understand the diverse units across factions and types in Beyond All Reason. Dive
		into the visualization or compare unit stats side-by-side.
	</p>

	<!-- Navigation Buttons -->
	<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="card" on:click={() => navigateTo('/explore')}>
			<img src="/assets/icons/explore.png" alt="Explore Units" />
			<h2>Explore All Units</h2>
			<p>
				Visualize all units in an interactive graph. See how factions connect to unit types and
				units.
			</p>
			<button>Go to Explore</button>
		</div>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="card" on:click={() => navigateTo('/compare')}>
			<img src="/assets/icons/compare.png" alt="Compare Units" />
			<h2>Compare Units</h2>
			<p>Add units to a comparison table and analyze their stats side-by-side or with charts.</p>
			<button>Go to Compare</button>
		</div>
	</div>

	<!-- Factions Section -->
	<h2 class="mb-4 text-2xl font-bold">Factions</h2>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		{#each Object.entries(factions) as [key, faction]}
			<div class="card">
				<img src={`/assets/factions/${key}.png`} alt={faction.name} />
				<h2>{faction.name}</h2>
				<p>{faction.description}</p>
			</div>
		{/each}
	</div>

	<!-- Unit Types Section -->
	<h2 class="mb-4 mt-8 text-2xl font-bold">Unit Types</h2>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		{#each unitTypes as type}
			<div class="card">
				<img src={`/assets/unit-types/${type.key}.png`} alt={type.name} />
				<h2>{type.name}</h2>
				<p>{type.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.card {
		@apply flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-lg transition hover:shadow-xl;
	}
	.card img {
		width: 100px;
		height: auto;
		margin-bottom: 1rem;
	}
	.card h2 {
		@apply text-xl font-bold text-gray-700;
	}
	.card p {
		@apply text-center text-gray-600;
	}
	.card button {
		@apply mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600;
	}
</style>
