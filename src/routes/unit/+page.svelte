<script>
	import { onMount } from 'svelte';
	import { loadData, unitsData, unitNamesDetails } from '$lib/data';
	import { slide } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { processWeapons, getUnitCombatStats, isSuicideUnit, isMineUnit } from '$lib/dpsCalculations';

	const name = $page.url.searchParams.get('name');

	let unit = null;
	let unitData = null;
	let displayName = '';
	let groupedData = {};
	let weaponsData = [];

	onMount(async () => {
		await loadData();
		if ($unitsData && $unitNamesDetails) {
			unit = $unitsData[name];
			unitData = unit?.data?.[name] || {};
			displayName = $unitNamesDetails.units.names[name] || name;
			groupedData = groupData(unitData);
			weaponsData = processWeapons(unitData.weapondefs || {});
		}
	});

	function getCombatStats() {
		return getUnitCombatStats(weaponsData, unitData, name);
	}

	// Dynamically group data based on categories
	function groupData(data) {
		// General information about the unit
		const generalProperties = [
			'name',
			'faction',
			'type',
			'subtype',
			'path',
			'description',
			'unitname',
			'side',
			'icontype',
			'script',
			'buildpic',
			'category',
			'customparams'
		];

		// Core stats and capabilities
		const statsProperties = [
			'health',
			'maxdamage',
			'damagemodifier',
			'armorType',
			'seismicdistance',
			'seismicsignature',
			'hidedamage',
			'autoheal',
			'idleautoheal',
			'idletime',
			'mass',
			'footprintx',
			'footprintz'
		];

		// Movement-related properties
		const movementProperties = [
			'maxvelocity',
			'acceleration',
			'brakerate',
			'turnradius',
			'turnrate',
			'turninplace',
			'turninplaceanglelimit',
			'turninplacespeedlimit',
			'movementclass',
			'moverate1',
			'cruisealt',
			'cruisealtitude',
			'amphibious',
			'floater',
			'upright',
			'canhover',
			'canfly',
			'canmove',
			'canland',
			'airstrafe',
			'airhoverfactor',
			'hoverattack',
			'leavetracks',
			'trackoffset',
			'trackstretch',
			'trackstrength',
			'tracktype',
			'trackwidth',
			'maxacc',
			'maxdec',
			'speed',
			'transportcapacity'
		];

		// for damage take max of each weapon/reloadtime and sum them all, range is the max of the list
		// Combat and weapon-related properties
		const combatProperties = [
			'canattack',
			'canattackground',
			'canmanualfire',
			'canpatrol',
			'canrepeat',
			'canresurrect',
			'cancloak',
			'cancapture',
			'weapondefs',
			'weapons',
			'radardistance',
			'radardistancejam',
			'sonardistance',
			'sonarstealth',
			'stealth',
			'cloaked',
			'cloakcost',
			'cloakcostmoving',
			'initcloak',
			'firestate',
			'standingmoveorder',
			'strafetoattack',
			'hightrajectory',
			'kamikaze',
			'kamikazedistance',
			'sightdistance',
			'airsightdistance',
			'onlytargetcategory2',
			'exemptcategory',
			'radarEmitHeight',
			'noautofire',
			'nochase',
			'nochasecategory',
			'turret'
		];

		// Resource-related properties
		const resourceProperties = [
			'buildcostenergy',
			'buildcostmetal',
			'buildtime',
			'energycost',
			'energymake',
			'energypershot',
			'energystorage',
			'energyupkeep',
			'extractsmetal',
			'metalcost',
			'metalmake',
			'metalstorage',
			'terraformspeed',
			'workertime',
			'capture',
			'reclaimable',
			'reclaimspeed',
			'repairable',
			'buildoptions'
		];

		const groups = {
			general: {},
			stats: {},
			movement: {},
			combat: {},
			resources: {},
			custom: {}
		};

		Object.entries(data).forEach(([key, value]) => {
			if (generalProperties.includes(key)) {
				groups.general[key] = value;
			} else if (statsProperties.includes(key)) {
				groups.stats[key] = value;
			} else if (movementProperties.includes(key)) {
				groups.movement[key] = value;
			} else if (combatProperties.includes(key)) {
				groups.combat[key] = value;
			} else if (resourceProperties.includes(key)) {
				groups.resources[key] = value;
			} else {
				groups.custom[key] = value;
			}
		});

		return groups;
	}

	function formatValue(value) {
		if (value === undefined || value === null) return '—';
		if (typeof value === 'boolean') return value ? 'Yes' : 'No';
		if (typeof value === 'number') return value.toLocaleString();
		if (Array.isArray(value)) return value.join(', ');
		return value;
	}

	function formatTime(seconds) {
		if (seconds < 60) return `${seconds}s`;
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
	}

	function formatValueWithContext(value, key) {
		// Special handling for build time which needs to be divided by 100
		if (key === 'buildtime' && typeof value === 'number') {
			return formatTime(value / 100);
		}
		// General time formatting for other time fields
		if (key.toLowerCase().includes('time') && typeof value === 'number') {
			return formatTime(value);
		}
		return formatValue(value);
	}

	function isExpandable(value) {
		return typeof value === 'object' && value !== null;
	}

	let expandedFields = new Set();

	function toggleExpand(key) {
		if (expandedFields.has(key)) {
			expandedFields.delete(key);
		} else {
			expandedFields.add(key);
		}
		expandedFields = expandedFields; // Trigger reactivity
	}

	// Helper function to get section icon
	function getSectionIcon(groupName) {
		const icons = {
			general: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			stats:
				'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
			movement:
				'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
			combat:
				'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
			resources:
				'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			custom:
				'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
		};
		return icons[groupName] || icons.general;
	}

	// Add this function to calculate if there's enough space below
	function getExpandPosition(element) {
		if (!element) return 'bottom';
		const rect = element.getBoundingClientRect();
		const spaceBelow = window.innerHeight - rect.bottom;
		return spaceBelow < 400 ? 'top' : 'bottom';
	}
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<Navbar />
	<div class="container mx-auto max-w-7xl px-4 py-8">
		{#if unit && unitData}
			<div class="space-y-8">
				<header class="mb-8">
					<div class="mb-4 flex items-center justify-between">
						<h1
							class="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"
						>
							{displayName}
						</h1>
						<a
							href="{base}/explore"
							class="rounded-lg bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700/50"
						>
							Back to Explorer
						</a>
					</div>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-400">
							{unit.faction === 'arm' ? 'Armada' : 'Cortex'}
						</span>
						<span
							class="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400"
						>
							{unit.type}
						</span>
						{#if unit.subtype !== 'none'}
							<span class="rounded-full bg-pink-500/20 px-3 py-1 text-sm font-medium text-pink-400">
								{unit.subtype}
							</span>
						{/if}
						<span
							class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400"
						>
							Tech {unit.tech_level}
						</span>
						{#if isSuicideUnit(unitData)}
							<span class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
								{isMineUnit(unitData) ? 'Mine' : 'Suicide Unit'}
							</span>
						{/if}
					</div>
				</header>

				<!-- Display Dynamic Data Groups -->
				{#each Object.entries(groupedData) as [groupName, fields]}
					<section class="rounded-xl bg-gray-800/30 p-6">
						<div class="mb-6 flex items-center gap-3">
							<svg
								class="h-6 w-6 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d={getSectionIcon(groupName)}
								/>
							</svg>
							<h2 class="text-xl font-semibold capitalize text-white">{groupName}</h2>
						</div>
						<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{#each Object.entries(fields) as [key, value]}
								<div
									class="relative rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"
								>
									<div class="flex items-center justify-between">
										<span class="text-sm text-gray-400">{key.replace(/([A-Z])/g, ' $1')}</span>
										{#if isExpandable(value)}
											<button
												on:click={() => toggleExpand(key)}
												class="text-gray-400 transition-colors hover:text-white"
												aria-label={expandedFields.has(key) ? 'Collapse details' : 'Expand details'}
											>
												<svg
													class="h-5 w-5 transform transition-transform {expandedFields.has(key)
														? 'rotate-180'
														: ''}"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>
										{/if}
									</div>
									{#if isExpandable(value) && expandedFields.has(key)}
										<div
											class="absolute z-10 w-96 {getExpandPosition(
												expandedFields.has(key) ? document.activeElement : null
											) === 'top'
												? 'bottom-full mb-2'
												: 'top-full mt-2'}"
											transition:slide
										>
											<div
												class="rounded-lg border border-gray-700/50 bg-gray-900/95 p-4 shadow-xl"
											>
												<div class="max-h-80 overflow-y-auto">
													{#if key === 'buildoptions' && Object.values(value).length > 0}
														{#each Object.values(value) as option}
															<div class="rounded px-2 py-1 hover:bg-gray-800/50">
																<span class="text-sm text-gray-200">
																	{option} ({$unitNamesDetails?.units?.names?.[option] ||
																		'Unknown'})
																</span>
															</div>
														{/each}
													{:else if key === 'buildoptions'}
														<div class="rounded px-2 py-1">
															<span class="text-sm text-gray-400">No build options available</span>
														</div>
													{:else}
														{#each Object.entries(value) as [subKey, subValue]}
															<div class="py-1">
																{#if typeof subValue === 'object' && subValue !== null}
																	<div
																		class="flex items-center gap-2 rounded px-2 text-sm text-gray-400 hover:bg-gray-800/50"
																	>
																		<span>{subKey}:</span>
																		<div class="ml-4 space-y-1">
																			{#if subKey === 'damage'}
																				{#each Object.entries(subValue) as [damageType, damageValue]}
																					<div class="flex items-center gap-2">
																						<span class="text-gray-500"
																							>{damageType === 'default'
																								? 'Base'
																								: damageType}:</span
																						>
																						<span class="text-gray-200">{damageValue}</span>
																					</div>
																				{/each}
																			{:else}
																				{#each Object.entries(subValue) as [deepKey, deepValue]}
																					<div class="flex items-center gap-2">
																						<span class="text-gray-500">{deepKey}:</span>
																						<span class="text-gray-200">
																							{typeof deepValue === 'object' && deepValue !== null
																								? JSON.stringify(deepValue, null, 2)
																								: formatValue(deepValue)}
																						</span>
																					</div>
																				{/each}
																			{/if}
																		</div>
																	</div>
																{:else}
																	<div
																		class="flex items-center gap-2 rounded px-2 hover:bg-gray-800/50"
																	>
																		<span class="text-sm text-gray-400">{subKey}:</span>
																		<span class="text-sm text-gray-200"
																			>{formatValueWithContext(subValue, subKey)}</span
																		>
																	</div>
																{/if}
															</div>
														{/each}
													{/if}
												</div>
											</div>
										</div>
									{:else}
										<div class="mt-1 font-medium text-white">
											{formatValueWithContext(value, key)}
										</div>
									{/if}
								</div>
							{/each}
						</div>

						<!-- Add Weapons Section after Combat category -->
						{#if groupName === 'combat' && weaponsData.length > 0}
							<div class="mt-8 border-t border-gray-700/50 pt-6">
								<div class="mb-4 flex items-center justify-between">
									<h3 class="text-lg font-semibold text-white">Weapons</h3>
									{#if getCombatStats()}
										{@const combatStats = getCombatStats()}
										<div class="flex gap-4">
											<span
												class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400"
											>
												Total DPS: {combatStats.totalDps}
											</span>
											<span
												class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
											>
												Max Range: {combatStats.maxRange}
											</span>
										</div>
									{/if}
								</div>
								<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{#each weaponsData as weapon}
										<div
											class="rounded-lg border border-gray-700/30 bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"
										>
											<h3 class="mb-2 font-medium text-white">{weapon.type}</h3>
											{#if weapon.isEMP}
												<div class="mb-2 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400 inline-block">
													EMP Weapon
												</div>
											{/if}
											{#if weapon.isNotFlame}
												<div class="mb-2 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400 inline-block">
													Special Weapon
												</div>
											{/if}
											<div class="space-y-3 text-sm">
												<div class="flex justify-between">
													<span class="text-gray-400">Damage</span>
													<span class="font-medium text-red-400">{weapon.damage}</span>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-400">DPS</span>
													<span class="font-medium text-orange-400">
														{#if weapon.isEMP}
															N/A (EMP)
														{:else if weapon.isNotFlame}
															N/A (Special)
														{:else}
															{weapon.dps}
														{/if}
													</span>
												</div>
												{#if weapon.burstCount > 1}
												<div class="flex justify-between">
													<span class="text-gray-400">Burst</span>
													<span class="font-medium text-green-400">x{weapon.burstCount}</span>
												</div>
												{/if}
												<div class="flex justify-between">
													<span class="text-gray-400">Range</span>
													<span class="font-medium text-blue-400">{weapon.range}</span>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-400">Reload Time</span>
													<span class="font-medium text-purple-400">{weapon.reloadTime}s</span>
												</div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</section>
				{/each}

				<!-- Custom Params -->
				{#if unitData.customparams}
					<section class="rounded-xl bg-gray-800/30 p-6">
						<h2 class="text-xl font-semibold text-white">Custom Parameters</h2>
						<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{#each Object.entries(unitData.customparams) as [key, value]}
								<div class="rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50">
									<span class="text-sm text-gray-400">{key}</span>
									<div class="mt-1 font-medium text-white">{formatValue(value)}</div>
								</div>
							{/each}
						</div>
					</section>
				{/if}
			</div>
		{:else}
			<div class="flex h-[60vh] items-center justify-center text-center">
				<div>
					<h2 class="mb-2 text-2xl text-gray-400">Loading unit data...</h2>
					<p class="text-gray-500">Please wait while we fetch the information.</p>
				</div>
			</div>
		{/if}
	</div>
</div>
