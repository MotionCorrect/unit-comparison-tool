<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<Navbar />

	<div class="container mx-auto flex flex-col items-center px-4 py-20 text-center">
		<div class="relative mb-8 h-40 w-40">
			<div class="absolute inset-0 animate-ping rounded-full bg-teal-500/20"></div>
			<div class="absolute inset-0 flex items-center justify-center">
				<span class="text-7xl font-bold text-teal-500/80">404</span>
			</div>
		</div>

		<h1
			class="mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"
		>
			{$page.status === 404 ? 'Page Not Found' : 'Error ' + $page.status}
		</h1>

		<p class="mb-8 max-w-2xl text-xl text-gray-400">
			{$page.status === 404
				? "Oops! The unit you're looking for couldn't be found. It might have been destroyed in battle or never existed."
				: $page.error?.message || 'Something went wrong. Our engineers are working on it.'}
		</p>

		<div class="grid max-w-2xl gap-6 md:grid-cols-2">
			<a
				href="{base}/"
				class="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-white transition-colors hover:bg-teal-700"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					></path>
				</svg>
				Back to Home
			</a>

			<a
				href="{base}/explore"
				class="flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-6 py-3 text-white transition-colors hover:bg-gray-600"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				Explore Units
			</a>
		</div>
	</div>

	<div class="fixed inset-0 -z-10 overflow-hidden opacity-20">
		<div
			class="absolute inset-0 bg-[url('/unitpics_webp/arms/armflea.webp')] bg-repeat opacity-5"
		></div>
		{#each Array(20) as _, i}
			<div
				class="absolute h-40 w-40 transform bg-contain bg-no-repeat rotate-{Math.random() * 360}deg"
				style="
					left: {Math.random() * 100}vw; 
					top: {Math.random() * 100}vh;
					opacity: {Math.random() * 0.2 + 0.05};
					background-image: url('{base}/unitpics_webp/{[
					'arms/armflea',
					'cors/corak',
					'bots/legion_wasp',
					'vehicles/scav_raider',
					'air/raptor_fighter'
				][Math.floor(Math.random() * 5)]}.webp');
				"
			></div>
		{/each}
	</div>
</div>
