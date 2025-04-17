<script>
	import { onMount, afterUpdate } from 'svelte';
	import { loadData, unitsData, unitNamesDetails } from '$lib/data';
	import { slide } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import {
		processWeapons,
		getUnitCombatStats,
		isSuicideUnit,
		isMineUnit
	} from '$lib/dpsCalculations';
	import { getDisplayName, formatValueWithContext } from '$lib/propertyDisplay';

	// Add a reactive dependency on the URL parameter
	$: name = $page.url.searchParams.get('name');

	// Create a reactive statement to reload data when URL changes
	$: if (name) {
		loadUnitData(name);
	}

	let unit = null;
	let unitData = null;
	let displayName = '';
	let groupedData = {};
	let weaponsData = [];
	let loading = false;

	// Move the data loading to a separate function for reuse
	async function loadUnitData(unitName) {
		loading = true;
		await loadData();
		if ($unitsData && $unitNamesDetails) {
			unit = $unitsData[unitName];
			unitData = unit?.data?.[unitName] || {};
			if (!unitData.maxdamage && unit?.data?.[unitName]?.[unitName]?.maxdamage) {
				unitData.maxdamage = unit.data[unitName][unitName].maxdamage;
			}
			displayName = $unitNamesDetails.units.names[unitName] || unitName;
			groupedData = groupData(unitData);
			weaponsData = processWeapons(unitData.weapondefs || {});
		}
		loading = false;
	}

	// Initial data loading
	onMount(async () => {
		if (name) {
			await loadUnitData(name);
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

	// Add a helper function to get the correct health value
	function getUnitHealth(unitData, unitName) {
		// Try all possible paths to find health
		const paths = [
			unitData?.maxdamage,
			unitData?.health,
			unitData?.[unitName]?.maxdamage,
			unitData?.[unitName]?.health,
			unit?.data?.[unitName]?.[unitName]?.maxdamage,
			unit?.data?.[unitName]?.maxdamage
		];

		// Return the first non-undefined value, or 0 if all are undefined
		return paths.find((value) => value !== undefined) || 0;
	}

	// Add a helper function to get unit metal cost value
	function getUnitMetal(unitData, unitName) {
		// Try all possible paths to find metal cost
		const paths = [
			unitData?.buildcostmetal,
			unitData?.[unitName]?.buildcostmetal,
			unit?.data?.[unitName]?.[unitName]?.buildcostmetal,
			unit?.data?.[unitName]?.buildcostmetal,
			// Access the unitInfo directly from unitsData
			$unitsData?.[unitName]?.data?.[unitName]?.buildcostmetal,
			// Check if it's nested another level
			$unitsData?.[unitName]?.data?.[unitName]?.[unitName]?.buildcostmetal
		];

		// Return the first non-undefined value, or 0 if all are undefined
		return paths.find((value) => value !== undefined && value !== null) || 0;
	}

	// Add a debugging function to check specific unit data structure
	function logUnitData(unitId) {
		if (import.meta.env.DEV) {
			console.log(`DEBUG: Unit data structure for ${unitId}:`, {
				directPath: $unitsData?.[unitId]?.data?.[unitId]?.buildcostmetal,
				nestedPath: $unitsData?.[unitId]?.data?.[unitId]?.[unitId]?.buildcostmetal,
				rootPath: $unitsData?.[unitId]?.buildcostmetal,
				unitInfo: $unitsData?.[unitId],
				unitData: $unitsData?.[unitId]?.data?.[unitId],
				fullDataPaths: {
					path1: `$unitsData.${unitId}.data.${unitId}.buildcostmetal`,
					path2: `$unitsData.${unitId}.data.${unitId}.${unitId}.buildcostmetal`,
					path3: `$unitsData.${unitId}.buildcostmetal`
				}
			});
		}

		// Check and log all possible metal cost paths
		const metalPaths = [
			{ path: 'direct', value: $unitsData?.[unitId]?.data?.[unitId]?.buildcostmetal },
			{ path: 'nested', value: $unitsData?.[unitId]?.data?.[unitId]?.[unitId]?.buildcostmetal },
			{ path: 'root', value: $unitsData?.[unitId]?.buildcostmetal },
			// Additional paths to check
			{ path: 'unitData.cost', value: $unitsData?.[unitId]?.cost?.metal },
			{ path: 'unitData.data.cost', value: $unitsData?.[unitId]?.data?.cost?.metal },
			{
				path: 'unitData.data.unitId.cost',
				value: $unitsData?.[unitId]?.data?.[unitId]?.cost?.metal
			},
			{
				path: 'unitData.data.unitId.unitId.cost',
				value: $unitsData?.[unitId]?.data?.[unitId]?.[unitId]?.cost?.metal
			},
			// Check if the value might be in customparams
			{
				path: 'customparams',
				value: $unitsData?.[unitId]?.data?.[unitId]?.customparams?.buildcostmetal
			},
			{
				path: 'nested_customparams',
				value: $unitsData?.[unitId]?.data?.[unitId]?.[unitId]?.customparams?.buildcostmetal
			}
		];

		if (import.meta.env.DEV) {
			// Print all path values for debugging
			console.log(
				`Metal cost paths for ${unitId}:`,
				metalPaths.map((p) => ({ path: p.path, value: p.value }))
			);
		}

		// Get first valid metal value
		const metalValue = metalPaths.find(
			(p) => p.value !== undefined && p.value !== null && p.value !== ''
		)?.value;

		if (import.meta.env.DEV && metalValue) {
			console.log(
				`Found metal value for ${unitId}: ${metalValue} from path ${metalPaths.find((p) => p.value === metalValue)?.path}`
			);
		}

		return metalValue || 0;
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

				<!-- Add loading overlay when changing units -->
				{#if loading}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm"
					>
						<div class="rounded-lg bg-gray-800 p-6 shadow-xl">
							<div class="flex flex-col items-center justify-center space-y-4">
								<div
									class="h-12 w-12 animate-spin rounded-full border-4 border-teal-400/20 border-t-teal-400"
								></div>
								<p class="text-lg text-gray-300">Loading unit data...</p>
							</div>
						</div>
					</div>
				{/if}

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
										<span class="text-sm text-gray-400">{getDisplayName(key)}</span>
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
														<div class="max-h-96 overflow-y-auto rounded-lg bg-gray-800/70 p-2">
															<div
																class="mb-3 flex items-center justify-between border-b border-gray-700/50 pb-2"
															>
																<h3 class="font-medium text-white">
																	Buildable Units ({Object.values(value).length})
																</h3>
																<span
																	class="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs text-teal-400"
																>
																	{unit.faction === 'arm' ? 'Armada' : 'Cortex'} Constructor
																</span>
															</div>
															<div class="grid gap-2 sm:grid-cols-1">
																{#each Object.values(value) as option}
																	{@const unitInfo = $unitsData?.[option] || {}}
																	{@const unitTechLevel = unitInfo?.tech_level || 1}
																	<a
																		href="{base}/unit?name={option}"
																		class="group relative flex items-start gap-3 rounded-lg bg-gray-800/90 p-3 transition-all hover:bg-gray-700/80 hover:shadow-md"
																	>
																		<div
																			class="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-700/70 text-lg font-bold text-teal-300"
																		>
																			{option.slice(0, 2).toUpperCase()}
																		</div>
																		<div class="flex flex-1 flex-col">
																			<div class="flex items-center justify-between">
																				<span class="text-base font-medium text-white">
																					{$unitNamesDetails?.units?.names?.[option] || option}
																				</span>
																				<div
																					class="absolute right-3 top-3 flex items-center gap-1.5 opacity-0 transition-opacity group-hover:opacity-100"
																				>
																					<span
																						class="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400"
																					>
																						T{unitTechLevel}
																					</span>
																				</div>
																			</div>
																			<div class="mt-1 flex flex-wrap gap-1.5">
																				<span
																					class="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs text-teal-400"
																				>
																					{unitInfo?.faction === 'arm' ? 'Armada' : 'Cortex'}
																				</span>
																				{#if unitInfo?.type}
																					<span
																						class="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-400"
																					>
																						{unitInfo.type}
																					</span>
																				{/if}
																				{#if unitInfo?.subtype && unitInfo.subtype !== 'none'}
																					<span
																						class="rounded-full bg-pink-500/20 px-2 py-0.5 text-xs text-pink-400"
																					>
																						{unitInfo.subtype}
																					</span>
																				{/if}
																			</div>
																			{#if unitInfo?.data?.[option]}
																				{@const unitData = unitInfo.data[option]}
																				{@const metalPaths = [
																					unitData?.buildcostmetal,
																					unitData?.[option]?.buildcostmetal,
																					$unitsData?.[option]?.data?.[option]?.buildcostmetal,
																					$unitsData?.[option]?.data?.[option]?.[option]
																						?.buildcostmetal,
																					unitData?.cost?.metal,
																					unitData?.[option]?.cost?.metal,
																					$unitsData?.[option]?.data?.[option]?.cost?.metal,
																					$unitsData?.[option]?.data?.[option]?.[option]?.cost
																						?.metal,
																					unitData?.metalcost,
																					unitData?.[option]?.metalcost,
																					unitData?.customparams?.buildcostmetal
																				]}
																				{@const metalCost =
																					metalPaths.find((v) => v !== undefined && v !== null) ||
																					0}
																				<div class="mt-2 grid grid-cols-3 gap-2 text-xs">
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Health:</span>
																						<span class="font-medium text-red-400">
																							{getUnitHealth(unitData, option)}
																						</span>
																					</div>
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Metal:</span>
																						<span class="font-medium text-blue-400">
																							{metalCost}
																						</span>
																					</div>
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Build:</span>
																						<span class="font-medium text-green-400">
																							{unitData[option]?.buildtime ||
																							unitData.buildtime ||
																							$unitsData?.[option]?.data?.[option]?.buildtime
																								? formatValueWithContext(
																										unitData[option]?.buildtime ||
																										unitData.buildtime ||
																										$unitsData?.[option]?.data?.[option]?.buildtime,
																										'buildtime'
																									)
																								: '0s'}
																						</span>
																					</div>
																				</div>
																			{:else}
																				<!-- If unit data is not directly accessible, use the direct lookup function -->
																				{@const metalPaths = [
																					$unitsData?.[option]?.data?.[option]?.buildcostmetal,
																					$unitsData?.[option]?.data?.[option]?.[option]
																						?.buildcostmetal,
																					$unitsData?.[option]?.buildcostmetal,
																					$unitsData?.[option]?.data?.[option]?.cost?.metal,
																					$unitsData?.[option]?.data?.[option]?.[option]?.cost
																						?.metal,
																					$unitsData?.[option]?.data?.[option]?.metalcost,
																					$unitsData?.[option]?.data?.[option]?.customparams
																						?.buildcostmetal
																				]}
																				{@const metalCost =
																					metalPaths.find((v) => v !== undefined && v !== null) ||
																					0}
																				<div class="mt-2 grid grid-cols-3 gap-2 text-xs">
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Health:</span>
																						<span class="font-medium text-red-400">
																							{getUnitHealth({}, option)}
																						</span>
																					</div>
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Metal:</span>
																						<span class="font-medium text-blue-400">
																							{metalCost}
																						</span>
																					</div>
																					<div
																						class="flex justify-between rounded bg-gray-700/30 px-2 py-1"
																					>
																						<span class="text-gray-400">Build:</span>
																						<span class="font-medium text-green-400">
																							{$unitsData?.[option]?.data?.[option]?.buildtime
																								? formatValueWithContext(
																										$unitsData?.[option]?.data?.[option]?.buildtime,
																										'buildtime'
																									)
																								: '0s'}
																						</span>
																					</div>
																				</div>
																			{/if}
																		</div>
																	</a>
																{/each}
															</div>
														</div>
													{:else if key === 'buildoptions'}
														<div
															class="flex items-center justify-center rounded-lg bg-gray-800/50 p-4"
														>
															<span class="text-sm text-gray-400">No build options available</span>
														</div>
													{:else}
														{#each Object.entries(value) as [subKey, subValue]}
															<div class="py-1">
																{#if typeof subValue === 'object' && subValue !== null}
																	<div
																		class="flex items-center gap-2 rounded px-2 text-sm text-gray-400 hover:bg-gray-800/50"
																	>
																		<span>{getDisplayName(subKey)}:</span>
																		<div class="ml-4 space-y-1">
																			{#if subKey === 'damage'}
																				{#each Object.entries(subValue) as [damageType, damageValue]}
																					<div class="flex items-center gap-2">
																						<span class="text-gray-500"
																							>{damageType === 'default'
																								? 'Base'
																								: getDisplayName(damageType)}:</span
																						>
																						<span class="text-gray-200">{damageValue}</span>
																					</div>
																				{/each}
																			{:else}
																				{#each Object.entries(subValue) as [deepKey, deepValue]}
																					<div class="flex items-center gap-2">
																						<span class="text-gray-500"
																							>{getDisplayName(deepKey)}:</span
																						>
																						<span class="text-gray-200">
																							{typeof deepValue === 'object' && deepValue !== null
																								? JSON.stringify(deepValue, null, 2)
																								: formatValueWithContext(deepValue, deepKey)}
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
																		<span class="text-sm text-gray-400"
																			>{getDisplayName(subKey)}:</span
																		>
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
											{#if key === 'maxdamage' || key === 'health'}
												{getUnitHealth(unitData, name)}
											{:else if key === 'buildcostmetal'}
												{@const metalPaths = [
													unitData?.buildcostmetal,
													unitData?.[name]?.buildcostmetal,
													unit?.data?.[name]?.buildcostmetal,
													unit?.data?.[name]?.[name]?.buildcostmetal,
													unitData?.cost?.metal,
													unitData?.[name]?.cost?.metal,
													unit?.data?.[name]?.cost?.metal,
													unit?.data?.[name]?.[name]?.cost?.metal,
													unitData?.metalcost,
													unitData?.[name]?.metalcost,
													unit?.data?.[name]?.metalcost,
													unitData?.customparams?.buildcostmetal,
													unit?.data?.[name]?.customparams?.buildcostmetal
												]}
												{metalPaths.find((v) => v !== undefined && v !== null) || 0}
											{:else if isExpandable(value)}
												{#if key === 'buildoptions'}
													Build Options ({Object.keys(value).length})
												{:else if key === 'weapondefs'}
													Weapon Definitions ({Object.keys(value).length})
												{:else if key === 'weapons'}
													Weapons ({Object.keys(value).length})
												{:else if key === 'customparams'}
													Custom Parameters ({Object.keys(value).length})
												{:else}
													{getDisplayName(key)} ({Object.keys(value).length})
												{/if}
											{:else}
												{formatValueWithContext(value, key)}
											{/if}
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
											<h3 class="mb-2 font-medium text-white">{getDisplayName(weapon.type)}</h3>
											{#if weapon.isEMP}
												<div
													class="mb-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400"
												>
													EMP Weapon
												</div>
											{/if}
											{#if weapon.isNotFlame}
												<div
													class="mb-2 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400"
												>
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
												{#if weapon.isEMP}
													<div class="flex justify-between">
														<span class="text-gray-400">{getDisplayName('paralyzemultiplier')}</span
														>
														<span class="font-medium text-yellow-400"
															>x{weapon.paralyzeMultiplier}</span
														>
													</div>
												{/if}
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
									<span class="text-sm text-gray-400">{getDisplayName(key)}</span>
									<div class="mt-1 font-medium text-white">
										{formatValueWithContext(value, key)}
									</div>
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
