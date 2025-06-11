<script>
	import { onMount } from 'svelte';
	import { loadData, unitsData, unitNamesDetails, unitIconMap, factionsList } from '$lib/data';
	import { slide } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';
	import RecursiveObjectDisplay from '$lib/components/RecursiveObjectDisplay.svelte';
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
	let weaponsForDisplay = [];
	let loading = false;

	// Use reactive variable for static image path again
	$: staticImagePath = getUnitImagePath(unitData);
	$: iconPath = $unitIconMap ? getUnitIconPath(name) : ''; // Check if store is ready
	console.log(iconPath);
	// Function to get image path (Restored original logic)
	function getUnitImagePath(currentUnitData) {
		if (!currentUnitData || !currentUnitData.buildpic) return '';
		const buildpic = currentUnitData.buildpic;
		const parts = buildpic.split('/');
		const filenameWithExt = parts.pop();
		const category = parts.pop();
		const filename = filenameWithExt.split('.')[0].toLowerCase();
		if (category) {
			return `${base}/unitpics_webp/${category}/${filename}.webp`;
		}
		return `${base}/unitpics_webp/${filename}.webp`;
	}

	// Function to get unit icon path
	function getUnitIconPath(unitId) {
		console.log(unitIconMap, unitId, $unitIconMap[unitId]);
		if (!$unitIconMap || !unitId || !$unitIconMap[unitId]) return '';
		// unitIconMap stores paths like "unit_icons_webp/some_icon.webp"
		// which is already relative to the static folder if served directly or base path needs to be prepended.
		// Since unit_icons_webp is directly in static, the path from the map should be correct with base.
		return `${base}/${$unitIconMap[unitId]}`;
	}

	// Helper function to get the correct health value from unit data
	function getUnitHealth(uData, uId) {
		// Try all possible paths to find health
		const paths = [
			uData?.maxdamage,
			uData?.health,
			uData?.[uId]?.maxdamage,
			uData?.[uId]?.health,
			// Check one level deeper for nested structures if the primary unit's data is passed directly
			uData?.data?.[uId]?.maxdamage,
			uData?.data?.[uId]?.health,
			// Check against global $unitsData as a fallback for buildable units
			$unitsData?.[uId]?.data?.[uId]?.maxdamage,
			$unitsData?.[uId]?.data?.[uId]?.health
		];
		return paths.find((value) => value !== undefined) || 0;
	}

	// Helper function to get unit metal cost value
	function getUnitMetal(uData, uId) {
		const paths = [
			uData?.buildcostmetal,
			uData?.[uId]?.buildcostmetal,
			uData?.cost?.metal,
			uData?.[uId]?.cost?.metal,
			uData?.metalcost,
			uData?.[uId]?.metalcost,
			uData?.customparams?.buildcostmetal,
			uData?.[uId]?.customparams?.buildcostmetal,
			// Check one level deeper
			uData?.data?.[uId]?.buildcostmetal,
			uData?.data?.[uId]?.cost?.metal,
			uData?.data?.[uId]?.metalcost,
			uData?.data?.[uId]?.customparams?.buildcostmetal,
			// Check against global $unitsData
			$unitsData?.[uId]?.data?.[uId]?.buildcostmetal,
			$unitsData?.[uId]?.data?.[uId]?.cost?.metal,
			$unitsData?.[uId]?.data?.[uId]?.metalcost,
			$unitsData?.[uId]?.data?.[uId]?.customparams?.buildcostmetal
		];
		return paths.find((value) => value !== undefined && value !== null) || 0;
	}

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

			// Get the raw processed unique weapon definitions
			weaponsData = processWeapons(unitData.weapondefs || {});

			// Prepare weapons for display with counts
			if (
				unitData &&
				unitData.weapons &&
				Object.keys(unitData.weapons).length > 0 &&
				weaponsData.length > 0
			) {
				const weaponSlotDefs = Object.values(unitData.weapons).map((slot) => slot.def); // Keep original case from slots

				weaponsForDisplay = weaponsData
					.map((processedWeapon) => {
						// Count occurrences of this originalDefKey in the weapon slots
						const count = weaponSlotDefs.filter(
							(defNameInSlot) => defNameInSlot === processedWeapon.originalDefKey
						).length;
						return {
							...processedWeapon,
							count: count > 0 ? count : 1 // If a weapon def is processed, assume at least 1 if not found in slots (should be rare)
						};
					})
					.filter((weapon) => weapon.count > 0); // Only include weapons that are present
			} else if (weaponsData.length > 0) {
				// Fallback: if no slots defined, but unique weapon defs exist, assume count 1 for each
				weaponsForDisplay = weaponsData.map((pw) => ({ ...pw, count: 1 }));
			} else {
				weaponsForDisplay = []; // No weapons at all
			}

			console.log('weaponsData for getUnitCombatStats:', weaponsData);
			console.log('weaponsForDisplay for UI:', weaponsForDisplay);
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
		<div class="mb-8 flex justify-center gap-4">
			{#if $factionsList && $unitNamesDetails}
				{#each $factionsList as faction}
					<button
						class:bg-teal-600={unit && unit.faction === faction}
						class="rounded-lg bg-gray-700/50 px-6 py-3 font-medium transition-all hover:bg-teal-600/80"
						on:click={() => {
							// Try to find the same unit name in the selected faction
							const targetUnit = Object.values($unitsData).find(
								(u) => u.faction === faction && u.name === unit.name
							);
							if (targetUnit) {
								window.location.href = `${base}/unit?name=${targetUnit.name}`;
							}
						}}
					>
						{$unitNamesDetails?.units?.factions?.[faction]?.charAt(0).toUpperCase() +
							$unitNamesDetails?.units?.factions?.[faction]?.slice(1) ||
							faction.charAt(0).toUpperCase() + faction.slice(1)}
					</button>
				{/each}
			{/if}
		</div>
		{#if unit && unitData}
			<div class="space-y-8">
				<header class="mb-8">
					<div class="mb-6 flex items-center gap-6">
						{#if staticImagePath}
							<div
								class="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50"
							>
								<img
									src={staticImagePath}
									alt="{displayName} image"
									class="max-h-full max-w-full object-contain"
									loading="lazy"
								/>
							</div>
						{/if}
						<div>
							<div class="mb-2 flex items-center gap-4">
								<h1
									class="cursor-default bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"
								>
									{displayName}
								</h1>
								{#if !loading && iconPath}
									<div class="h-8 w-8 flex-shrink-0">
										<img
											src={iconPath}
											alt="{displayName} icon"
											class="max-h-full max-w-full object-contain"
											loading="lazy"
										/>
									</div>
								{/if}
							</div>
							<div class="flex flex-wrap gap-3">
								<span
									class="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-400"
								>
									{$unitNamesDetails?.units?.factions?.[unit.faction]?.charAt(0).toUpperCase() +
										$unitNamesDetails?.units?.factions?.[unit.faction]?.slice(1) ||
										unit.faction.charAt(0).toUpperCase() + unit.faction.slice(1)}
								</span>
								<span
									class="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400"
								>
									{unit.type}
								</span>
								{#if unit.subtype !== 'none'}
									<span
										class="rounded-full bg-pink-500/20 px-3 py-1 text-sm font-medium text-pink-400"
									>
										{unit.subtype}
									</span>
								{/if}
								<span
									class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400"
								>
									Tech {unit.tech_level}
								</span>
								{#if isSuicideUnit(unitData)}
									<span
										class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400"
									>
										{isMineUnit(unitData) ? 'Mine' : 'Suicide Unit'}
									</span>
								{/if}
								{#if unitData.customparams?.model_author}
									<span
										class="rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-400"
									>
										Model by <a
											href="https://www.beyondallreason.info/team"
											target="_blank"
											class="underline hover:text-indigo-300"
											>{unitData.customparams.model_author}</a
										>
									</span>
								{/if}
							</div>
							{#if unit.path}
								<div class="mt-2">
									<a
										href={`https://github.com/beyond-all-reason/Beyond-All-Reason/blob/master/units/${unit.path.join('/')}.lua`}
										target="_blank"
										class="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
									>
										<svg
											class="mr-1 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
											/>
										</svg>
										View source on GitHub
									</a>
								</div>
							{/if}
						</div>
						<a
							href="{base}/explore"
							class="ml-auto self-start rounded-lg bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700/50"
						>
							Back to Explorer
						</a>
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
													{#if key === 'buildoptions'}
														{#if typeof value === 'object' && value !== null && Object.keys(value).length > 0}
															<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
																{#each Object.entries(value) as [boIndex, buildableUnitId]}
																	{@const buildableUnitInfo = $unitsData?.[buildableUnitId] || {}}
																	{@const buildableUnitData =
																		buildableUnitInfo?.data?.[buildableUnitId] || {}}
																	{@const buildableUnitName =
																		$unitNamesDetails?.units?.names?.[buildableUnitId] ||
																		buildableUnitId}
																	{@const buildableUnitTech = buildableUnitInfo?.tech_level || 1}
																	{@const buildableUnitFaction = buildableUnitInfo?.faction}
																	{@const buildableUnitType = buildableUnitInfo?.type}

																	<a
																		href="{base}/unit?name={buildableUnitId}"
																		class="block rounded-lg bg-gray-800/70 p-3 transition-all hover:bg-gray-700/70 hover:shadow-md"
																	>
																		<div class="flex items-center justify-between">
																			<span class="font-semibold text-teal-400"
																				>{buildableUnitName}</span
																			>
																			<span
																				class="rounded bg-blue-500/20 px-1.5 py-0.5 text-xs font-medium text-blue-400"
																			>
																				T{buildableUnitTech}
																			</span>
																		</div>
																		<div class="mt-1.5 flex flex-wrap gap-1.5 text-xs">
																			{#if buildableUnitFaction}
																				<span
																					class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-300"
																				>
																					{$unitNamesDetails?.units?.factions?.[
																						buildableUnitFaction
																					]
																						?.charAt(0)
																						.toUpperCase() +
																						$unitNamesDetails?.units?.factions?.[
																							buildableUnitFaction
																						]?.slice(1) ||
																						buildableUnitFaction.charAt(0).toUpperCase() +
																							buildableUnitFaction.slice(1)}
																				</span>
																			{/if}
																			{#if buildableUnitType && buildableUnitType !== 'other'}
																				<span
																					class="rounded-full bg-purple-500/20 px-2 py-0.5 text-purple-300"
																				>
																					{buildableUnitType}
																				</span>
																			{/if}
																		</div>
																		{#if buildableUnitData && Object.keys(buildableUnitData).length > 0}
																			<div
																				class="mt-2 grid grid-cols-3 gap-2 border-t border-gray-700/50 pt-2 text-xs"
																			>
																				<div
																					class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"
																				>
																					<span class="text-gray-400">HP</span>
																					<span class="font-medium text-red-400">
																						{formatValueWithContext(
																							getUnitHealth(buildableUnitData, buildableUnitId),
																							'maxdamage'
																						)}
																					</span>
																				</div>
																				<div
																					class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"
																				>
																					<span class="text-gray-400">Metal</span>
																					<span class="font-medium text-blue-400">
																						{formatValueWithContext(
																							getUnitMetal(buildableUnitData, buildableUnitId),
																							'buildcostmetal'
																						)}
																					</span>
																				</div>
																				<div
																					class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"
																				>
																					<span class="text-gray-400">Time</span>
																					<span class="font-medium text-green-400">
																						{formatValueWithContext(
																							buildableUnitData.buildtime,
																							'buildtime'
																						)}
																					</span>
																				</div>
																			</div>
																		{/if}
																	</a>
																{/each}
															</div>
														{:else}
															<span class="text-gray-500">—</span> /* No build options or empty object
															*/
														{/if}
													{:else}
														<div
															class="bg-gray-850/50 mt-2 space-y-1 overflow-y-auto rounded-md p-2"
															style="max-height: 250px;"
														>
															<RecursiveObjectDisplay data={value} />
														</div>
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
									{#each weaponsForDisplay as weapon (weapon.originalDefKey)}
										<div
											class="rounded-lg border border-gray-700/30 bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"
										>
											<h3 class="mb-2 font-medium text-white">{getDisplayName(weapon.name)}</h3>
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
