<script>
	import { goto } from '$app/navigation';
	import { unitsData, factionsList, typesWithSubtypes, unitNamesDetails } from '$lib/data';
	import { loadData } from '$lib/data';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { base } from '$app/paths';
	
	let factionsData = {};
	let unitTypesData = [];

	onMount(async () => {
		await loadData();
	});

	$: if ($unitsData && $factionsList && $typesWithSubtypes && $unitNamesDetails) {
		console.log('Data loaded:', {
			unitsData: $unitsData,
			factionsList: $factionsList,
			typesWithSubtypes: $typesWithSubtypes,
			unitNamesDetails: $unitNamesDetails
		});

		factionsData = $factionsList.reduce((acc, faction) => {
			acc[faction] = {
				name: $unitNamesDetails.units.factions[faction],
				description:
					faction === 'arm'
						? 'The Armada - Agile and adaptable forces specializing in hit-and-run tactics and economic efficiency. Masters of terrain manipulation and rapid deployment.'
						: 'The Cortex - Heavily armored juggernauts with superior firepower and defensive capabilities. Experts in siege warfare and sustained engagements.'
			};
			return acc;
		}, {});

		unitTypesData = Object.entries($typesWithSubtypes).map(([key, subtypes]) => ({
			key,
			name: key.charAt(0).toUpperCase() + key.slice(1),
			description: getTypeDescription(key),
			subtypes: subtypes.filter((s) => s !== 'none'),
			image: `/assets/unit-types/${key}.png`
		}));

		console.log('Processed data:', {
			factionsData,
			unitTypesData
		});
	}

	function navigateTo(route) {
		goto(route);
	}

	function handleImageError(event) {
		// if (event.target.src !== '/assets/icons/placeholder.png') {
		// 	event.target.src = '/assets/icons/placeholder.png'; // Replace with a default image
		// }
	}

	function getTypeDescription(type) {
		const descriptions = {
			builder:
				'Construction units that build structures and extract resources. Essential for base expansion and economy.',
			factory:
				'Advanced facilities that produce combat and support units. Each specializes in different unit categories.',
			defense:
				'Static defensive structures ranging from light point defense to heavy fortifications and shield generators.',
			vehicle:
				'Versatile ground units including raiders, tanks, and artillery. The backbone of your military force.',
			ship: 'Naval units from swift patrol boats to massive battleships. Dominate the seas and support coastal operations.',
			aircraft:
				'Air units for bombing, interception, and transport. Control the skies to gain tactical superiority.',
			commander:
				'Your primary unit with advanced building capabilities and combat power. Protect it at all costs.',
			economy:
				'Resource generators, storage, and converters. Form the foundation of your economic infrastructure.'
		};
		return descriptions[type] || `Specialized ${type} units with unique capabilities.`;
	}
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<Navbar />
	<div class="container mx-auto max-w-7xl px-4 py-16">
		<div class="mb-16 text-center">
			<h1 class="mb-6 text-5xl font-bold text-teal-400">Beyond All Reason Units</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-400">
				Explore, compare, and learn about every unit in Beyond All Reason - the modern RTS game
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Explore Card -->
			<a
				href="{base}/explore"
				class="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 transition-all hover:bg-gray-800/70"
			>
				<div class="mb-4 flex items-center gap-3">
					<svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-teal-300">Visual Explorer</h2>
				</div>
				<p class="mb-4 text-gray-400">
					Discover unit relationships and hierarchies through an interactive visualization of the
					tech tree.
				</p>
				<span
					class="inline-flex items-center gap-1 text-sm text-teal-400 transition-all group-hover:gap-2"
				>
					Learn more
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</span>
			</a>

			<!-- Browse & Compare Card -->
			<a
				href="{base}/compare"
				class="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 transition-all hover:bg-gray-800/70"
			>
				<div class="mb-4 flex items-center gap-3">
					<svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-teal-300">Browse & Compare</h2>
				</div>
				<p class="mb-4 text-gray-400">
					Browse through all units with advanced filtering, or compare multiple units side by side
					with detailed statistics.
				</p>
				<span
					class="inline-flex items-center gap-1 text-sm text-teal-400 transition-all group-hover:gap-2"
				>
					Learn more
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</span>
			</a>

			<!-- About Card -->
			<div class="relative overflow-hidden rounded-xl bg-gray-800/50 p-6">
				<div class="mb-4 flex items-center gap-3">
					<svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-teal-300">About</h2>
				</div>
				<p class="text-gray-400">
					A comprehensive database and visualization tool for Beyond All Reason units. Compare
					stats, explore relationships, and discover new strategies.
				</p>
			</div>
		</div>

		<!-- Factions Section -->
		<div class="mb-16 mt-24">
			<h2 class="mb-12 text-center text-3xl font-bold">
				<span class="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
					Choose Your Faction
				</span>
			</h2>
			<div class="grid gap-8 md:grid-cols-2">
				{#each Object.entries(factionsData) as [key, faction]}
					<a
						href="{base}/explore?faction={key}"
						class="group relative overflow-hidden rounded-xl bg-gray-800/30 transition-all hover:bg-gray-800/50"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10"></div>
						<div class="relative p-8">
							<div class="mb-4 flex items-center justify-between">
								<h3 class="text-2xl font-bold text-white">{faction.name}</h3>
								<div class="rounded-full bg-teal-400/20 p-2">
									<svg
										class="h-6 w-6 text-teal-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
							<p class="text-gray-300">{faction.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Unit Types Grid -->
		<div class="mt-24">
			<h2 class="mb-12 text-center text-3xl font-bold">
				<span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
					Unit Categories
				</span>
			</h2>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each unitTypesData as type}
					<a
						href="{base}/explore?type={type.key}"
						class="group relative overflow-hidden rounded-xl bg-gray-800/30 p-6 transition-all hover:bg-gray-800/50"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
						<div class="relative">
							<div class="mb-3 flex items-center justify-between">
								<h3 class="text-xl font-bold text-white">{type.name}</h3>
								<div class="rounded-full bg-purple-400/20 p-1.5">
									<svg
										class="h-4 w-4 text-purple-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
							{#if type.subtypes?.length > 0}
								<div class="mt-2 flex flex-wrap gap-2">
									{#each type.subtypes as subtype}
										<span class="rounded-full bg-pink-500/20 px-2 py-1 text-xs text-pink-400">
											{subtype}
										</span>
									{/each}
								</div>
							{/if}
							<p class="mt-3 text-sm text-gray-400">{type.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
