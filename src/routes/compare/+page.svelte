<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import RecursiveObjectDisplay from '$lib/components/RecursiveObjectDisplay.svelte'; // Import the recursive display component
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { loadData, unitsData, unitNamesDetails, unitIconMap } from '$lib/data';
	import { base } from '$app/paths';
	import {
		processWeapons,
		getUnitCombatStats,
		isSuicideUnit,
		isMineUnit
	} from '$lib/dpsCalculations';
	import { getDisplayName, formatValueWithContext } from '$lib/propertyDisplay';
	// View mode state
	let viewMode = 'browse'; // 'compare' or 'browse'

	// Available columns and their visibility
	let columns = [
		{ id: 'unit', name: 'Unit', visible: true },
		{ id: 'type', name: 'Type', visible: true },
		{ id: 'subtype', name: 'Subtype', visible: false },
		{ id: 'faction', name: 'Faction', visible: false },
		{ id: 'tech', name: 'Tech Level', visible: false },
		{ id: 'health', name: 'Health', visible: true },
		{ id: 'sightDistance', name: 'Sight Range', visible: true },
		{ id: 'maxRange', name: 'Weapon Range', visible: true },
		{ id: 'dps', name: 'DPS', visible: true },
		{ id: 'buildcostmetal', name: 'Metal Cost', visible: true } // Added metal cost column example
	];

	// Browsing filters
	let searchQuery = '';
	let selectedTech = 'all';
	let selectedType = 'all';
	let selectedSubType = 'all';
	let selectedFaction = 'all';
	let customFilters = [];
	let sortBy = 'name';
	let sortOrder = 'asc';

	let selectedUnits = ['', '']; // Array of selected unit IDs
	let unitsDataLoaded = false;
	let unitsList = []; // Filtered/sorted list of available units
	let expandedFields = new Set(); // Track expanded object fields

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
		'turret',
		// Calculated combat stats (added explicitly for clarity)
		'maxRange',
		'dps'
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

	// Available fields for custom filters
	const availableFields = [
		{
			category: 'Stats',
			fields: [
				...statsProperties.map((prop) => ({
					id: prop,
					name: getDisplayName(prop),
					type: 'number' // Assuming most stats are numeric for filtering
				}))
			]
		},
		{
			category: 'Combat',
			fields: [
				...combatProperties.map((prop) => ({
					id: prop,
					name: getDisplayName(prop),
					type: [
						'maxRange',
						'dps',
						'sightdistance',
						'airsightdistance',
						'radardistance',
						'sonardistance',
						'cloakcost',
						'cloakcostmoving'
					].includes(prop)
						? 'number'
						: 'other' // Specify numeric combat props
				}))
			]
		},
		{
			category: 'Movement',
			fields: [
				...movementProperties.map((prop) => ({
					id: prop,
					name: getDisplayName(prop),
					type: 'number' // Assuming most movement props are numeric
				}))
			]
		},
		{
			category: 'Resources',
			fields: [
				...resourceProperties.map((prop) => ({
					id: prop,
					name: getDisplayName(prop),
					type: 'number' // Assuming resource props are numeric
				}))
			]
		}
	];

	// Add/remove unit slots
	function addUnitSlot() {
		selectedUnits = [...selectedUnits, ''];
	}

	function removeUnitSlot(index) {
		selectedUnits = selectedUnits.filter((_, i) => i !== index);
	}

	// Format values consistently
	function formatValue(value, key) {
		if (value === undefined || value === null) return '—';
		if (typeof value === 'boolean') return value ? 'Yes' : 'No';
		if (typeof value === 'number') {
			if (key === 'buildtime') return formatTime(value / 100);
			// No longer needed here, handled by formatValueWithContext
			// if (key.toLowerCase().includes('time')) return formatTime(value);
			return value.toLocaleString(); // Default number formatting
		}
		return value;
	}

	function formatTime(seconds) {
		if (seconds < 60) return `${seconds.toFixed(1)}s`; // Show decimals for short times
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds.toFixed(0)}s` : `${minutes}m`;
	}

	// Get comparable properties
	function getComparableProperties(units) {
		const properties = new Set();
		units.forEach((unitId) => {
			if (!unitId) return;
			const unit = $unitsData?.[unitId];
			if (!unit?.data?.[unitId]) return;
			Object.keys(unit.data[unitId]).forEach((key) => properties.add(key));
		});
		const allProperties = Array.from(properties);

		// Helper to count non-empty values for a property
		const getValueCount = (prop) => {
			return selectedUnitsData.reduce((count, unit) => {
				// Check the prepared selectedUnitsData which should have typed props
				return count + (unit?.[prop] !== undefined && unit?.[prop] !== null ? 1 : 0);
			}, 0);
		};

		// Sort properties by value presence
		const sortByValuePresence = (props) => {
			// Filter out properties that shouldn't be shown directly (like raw data)
			const relevantProps = props.filter(
				(p) =>
					p !== 'data' &&
					p !== 'id' &&
					p !== 'isSuicideUnit' &&
					p !== 'isMineUnit' &&
					p !== 'weapons' &&
					p !== 'combatStats'
			);
			return [...relevantProps].sort((a, b) => getValueCount(b) - getValueCount(a));
		};

		// Use the prepared selectedUnitsData for sorting property relevance
		return {
			general: sortByValuePresence(
				allProperties.filter((prop) => generalProperties.includes(prop))
			),
			stats: sortByValuePresence(allProperties.filter((prop) => statsProperties.includes(prop))),
			movement: sortByValuePresence(
				allProperties.filter((prop) => movementProperties.includes(prop))
			),
			combat: sortByValuePresence(allProperties.filter((prop) => combatProperties.includes(prop))),
			resources: sortByValuePresence(
				allProperties.filter((prop) => resourceProperties.includes(prop))
			),
			custom: sortByValuePresence(
				allProperties.filter(
					(prop) =>
						!generalProperties.includes(prop) &&
						!statsProperties.includes(prop) &&
						!movementProperties.includes(prop) &&
						!combatProperties.includes(prop) &&
						!resourceProperties.includes(prop) &&
						// Exclude fields already handled or internal
						prop !== 'data' &&
						prop !== 'id' &&
						prop !== 'isSuicideUnit' &&
						prop !== 'isMineUnit' &&
						prop !== 'weapons' &&
						prop !== 'combatStats'
				)
			)
		};
	}

	function toggleExpanded(prop) {
		if (expandedFields.has(prop)) {
			expandedFields.delete(prop);
		} else {
			expandedFields.add(prop);
		}
		expandedFields = expandedFields; // Trigger reactivity
	}

	// Initialize data
	onMount(async () => {
		await loadData();
		if ($unitsData && $unitNamesDetails) {
			unitsList = Object.entries($unitsData)
				.map(([id, unit]) => ({
					id,
					name: $unitNamesDetails.units.names[id] || id,
					faction: unit.faction,
					type: unit.type,
					subtype: unit.subtype,
					tech: unit.tech_level
				}))
				.filter((unit) => unit.type && unit.type !== 'other')
				.sort((a, b) => a.name.localeCompare(b.name));
			unitsDataLoaded = true; // Set flag when initial lists are ready
		}
	});

	// Fullscreen functionality
	let isFullScreen = false;

	function toggleFullScreen() {
		isFullScreen = !isFullScreen;
	}

	// Process weapons data (using imported function)

	// Get combat stats (using imported function)

	$: comparableProperties = getComparableProperties(selectedUnits);
	$: selectedUnitsData = selectedUnits.map((id) => {
		if (!id) return null;

		const unitInfo = $unitsData?.[id]; // Get the full unit info from the store
		const unitData = unitInfo?.data?.[id] || {}; // This is the specific unit data block
		const weapons = processWeapons(unitData?.weapondefs);
		const combatStats = getUnitCombatStats(weapons, unitData, id);

		// Prepare data with correct types for comparison view
		return {
			id,
			name: $unitNamesDetails?.units?.names?.[id] || id,
			data: unitData, // Keep raw data for image path, build options etc.
			faction: unitInfo?.faction,
			type: unitInfo?.type,
			subtype: unitInfo?.subtype,
			weapons: weapons, // Keep processed weapons
			combatStats: combatStats, // Keep processed combat stats
			tech: unitInfo?.tech_level,
			isSuicideUnit: isSuicideUnit(unitData),
			isMineUnit: isMineUnit(unitData),
			// Add main comparable stats as numbers explicitly
			health: Number(getUnitHealth(unitData, id)), // Use helper function here
			buildcostmetal: Number(getUnitMetal(unitData, id)),
			buildcostenergy: Number(unitData?.buildcostenergy || 0),
			buildtime: Number(unitData?.buildtime || 0),
			dps: Number(combatStats?.totalDps || 0),
			maxRange: Number(combatStats?.maxRange || 0),
			sightdistance: Number(unitData?.sightdistance || 0)
			// Add other commonly compared numeric fields here
		};
	});

	function getCategoryStyle(category) {
		const styles = {
			general: 'bg-blue-900/20 border-l-4 border-blue-500/50',
			stats: 'bg-green-900/20 border-l-4 border-green-500/50',
			movement: 'bg-yellow-900/20 border-l-4 border-yellow-500/50',
			combat: 'bg-red-900/20 border-l-4 border-red-500/50',
			resources: 'bg-purple-900/20 border-l-4 border-purple-500/50',
			custom: 'bg-gray-800/30 border-l-4 border-gray-500/50'
		};
		return styles[category] || styles.custom;
	}

	function getCategoryIcon(category) {
		const icons = {
			general: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0114 0z',
			stats:
				'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
			movement:
				'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
			combat:
				'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
			resources:
				'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			custom:
				'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
		};
		return icons[category] || icons.custom;
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

	// Copied Helper function to get the correct health value from unit data (matching unit page)
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

	function getFilteredAndSortedUnits() {
		// Ensure base data is loaded before proceeding
		if (!unitsDataLoaded || !$unitsData || !$unitNamesDetails) return [];

		let units = Object.entries($unitsData)
			.filter(([_, unitInfo]) => unitInfo.type && unitInfo.type !== 'other')
			.map(([id, unitInfo]) => {
				const unitDataForStats = unitInfo.data?.[id] || {};
				const weapons = processWeapons(unitDataForStats?.weapondefs);
				const combatStats = getUnitCombatStats(weapons, unitDataForStats, id);

				// Explicitly ensure numeric types for sortable columns
				const health = Number(getUnitHealth(unitDataForStats, id)); // Use helper for health
				const metalCost = Number(getUnitMetal(unitDataForStats, id)); // Use helper
				const energyCost = Number(unitDataForStats?.buildcostenergy || 0);
				const buildTime = Number(unitDataForStats?.buildtime || 0);
				const sightDistance = Number(unitDataForStats?.sightdistance || 0);
				const maxRange = Number(combatStats?.maxRange || 0);
				const dps = Number(combatStats?.totalDps || 0);
				// Add any other numeric fields you might sort by here...

				return {
					id,
					name: $unitNamesDetails.units.names[id] || id,
					type: unitInfo.type,
					subtype: unitInfo.subtype,
					tech: unitInfo.tech_level,
					faction: unitInfo.faction,
					// Assign the explicitly typed numbers
					health,
					sightDistance,
					maxRange,
					dps,
					buildcostmetal: metalCost, // Use the numeric metalCost
					buildcostenergy: energyCost, // Use the numeric energyCost
					buildtime: buildTime, // Use the numeric buildTime

					isSuicideUnit: isSuicideUnit(unitDataForStats),
					isMineUnit: isMineUnit(unitDataForStats),
					data: unitDataForStats, // Keep raw data if needed elsewhere (e.g., image path)

					// Spread remaining non-numeric/non-critical fields
					// Filter out keys already handled to avoid overwriting with potentially incorrect types
					...Object.fromEntries(
						Object.entries(unitDataForStats || {})
							.filter(
								([key]) =>
									![
										'maxdamage',
										'health',
										'buildcostmetal',
										'buildcostenergy',
										'buildtime',
										'sightdistance',
										'weapondefs', // List fields handled above
										'dps',
										'maxRange' // Also exclude derived combat stats if they exist as raw keys
									].includes(key)
							)
							.map(([key, value]) => [
								key,
								typeof value === 'object' ? JSON.stringify(value) : value
							])
					)
				};
			});

		// Apply filters
		if (searchQuery) {
			units = units.filter((unit) => unit.name.toLowerCase().includes(searchQuery.toLowerCase()));
		}
		if (selectedTech !== 'all') {
			units = units.filter((unit) => unit.tech === parseInt(selectedTech));
		}
		if (selectedType !== 'all') {
			units = units.filter((unit) => unit.type === selectedType);
		}
		if (selectedSubType !== 'all') {
			units = units.filter((unit) => unit.subtype === selectedSubType);
		}
		if (selectedFaction !== 'all') {
			units = units.filter((unit) => unit.faction === selectedFaction);
		}

		// Apply custom filters
		customFilters.forEach((filter) => {
			if (filter.field && filter.value !== '') {
				units = units.filter((unit) => {
					// Use the already typed numeric value from the mapped unit object
					const unitValue = unit[filter.field];
					const filterValue = parseFloat(filter.value);

					// Check if unitValue is actually a number before comparing
					if (typeof unitValue !== 'number' || isNaN(unitValue) || isNaN(filterValue)) return false;

					if (filter.operator === '>') return unitValue > filterValue;
					if (filter.operator === '<') return unitValue < filterValue;
					if (filter.operator === '=') return unitValue === filterValue;
					return false;
				});
			}
		});

		// Apply sorting with smarter comparison
		return units.sort((a, b) => {
			const valA = a[sortBy];
			const valB = b[sortBy];

			let comparison = 0;

			// Attempt to parse both values as floats
			const numA = parseFloat(valA);
			const numB = parseFloat(valB);

			// Check if both are valid numbers
			if (!isNaN(numA) && !isNaN(numB)) {
				// Both are numbers, compare numerically
				comparison = numA - numB;
			} else {
				// At least one is not a number, compare as strings
				const strA = String(valA ?? ''); // Ensure string conversion, handle null/undefined
				const strB = String(valB ?? '');
				comparison = strA.localeCompare(strB);
			}

			return sortOrder === 'asc' ? comparison : -comparison;
		});
	}

	function getUniqueTypes() {
		if (!$unitsData) return [];
		return [...new Set(Object.values($unitsData).map((unit) => unit.type))].filter(Boolean).sort();
	}

	function getUniqueSubTypes() {
		if (!$unitsData) return [];
		const units = Object.values($unitsData);
		const subtypes = units
			.filter((unit) => selectedType === 'all' || unit.type === selectedType)
			.map((unit) => unit.subtype);
		return [...new Set(subtypes)].filter(Boolean).sort();
	}

	function addCustomFilter() {
		customFilters = [...customFilters, { field: '', operator: '>', value: '' }];
	}

	function removeCustomFilter(index) {
		customFilters = customFilters.filter((_, i) => i !== index);
	}

	function handleColumnSort(column) {
		// Use the column.id directly since it matches the data field names
		const sortField = column.id === 'unit' ? 'name' : column.id;
		// console.log('Sorting by:', column, sortField); // Debug
		if (sortBy === sortField) {
			sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = sortField;
			// Default sort order based on column type (example)
			const numericColumns = [
				'health',
				'sightDistance',
				'maxRange',
				'dps',
				'buildcostmetal',
				'buildcostenergy',
				'buildtime',
				'tech'
			];
			sortOrder = numericColumns.includes(sortField) ? 'desc' : 'asc'; // Default numeric descending, others ascending
		}
	}

	// Watch custom filters and add columns
	$: {
		customFilters.forEach((filter) => {
			if (filter.field && !columns.some((col) => col.id === filter.field)) {
				const field = availableFields
					.flatMap((category) => category.fields)
					.find((f) => f.id === filter.field);
				if (field) {
					columns = [...columns, { id: field.id, name: field.name, visible: true }];
				}
			}
		});
		// Ensure the buildcostmetal column exists if added via custom filter
		if (
			customFilters.some((f) => f.field === 'buildcostmetal') &&
			!columns.some((c) => c.id === 'buildcostmetal')
		) {
			const metalField = availableFields
				.flatMap((cat) => cat.fields)
				.find((f) => f.id === 'buildcostmetal');
			if (metalField) {
				columns = [...columns, { id: metalField.id, name: metalField.name, visible: true }];
			}
		}
	}

	// Add column dialog instead of native select
	function addNewColumn() {
		const dialog = document.createElement('dialog');
		dialog.className = 'bg-gray-900 rounded-lg p-6 backdrop:bg-black/50 max-w-7xl';

		const header = document.createElement('div');
		header.className = 'mb-4 border-b border-gray-700 pb-3';
		header.innerHTML = `
			<h2 class="text-xl font-semibold text-white">Add Columns to Table</h2>
			<p class="text-sm text-gray-400 mt-1">Select columns to add to your comparison view</p>
		`;

		const content = document.createElement('div');
		content.className = 'max-h-[60vh] overflow-auto';

		// Create a grid container for the categories
		const categoriesGrid = document.createElement('div');
		categoriesGrid.className = 'grid grid-cols-4 gap-6';
		content.appendChild(categoriesGrid);

		availableFields.forEach((category) => {
			const fields = category.fields.filter((field) => !columns.some((col) => col.id === field.id));
			if (fields.length) {
				const section = document.createElement('div');
				section.className = 'mb-4';
				section.innerHTML = `
					<h3 class="text-white font-medium mb-2 flex items-center gap-2">
						<svg class="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${getCategoryIcon(category.category.toLowerCase())}"></path>
						</svg>
						${category.category}
					</h3>
					<div class="space-y-1 border rounded-lg border-gray-700/50 bg-gray-800/30 p-2">
						${fields
							.map(
								(field) => `
							<label class="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
								<input type="checkbox" value="${field.id}" data-name="${field.name}" class="rounded border-gray-600">
								<span class="text-gray-200">${field.name}</span>
							</label>
						`
							)
							.join('')}
					</div>
				`;
				categoriesGrid.appendChild(section);
			}
		});

		const footer = document.createElement('div');
		footer.className = 'mt-6 flex justify-end gap-3 border-t border-gray-700 pt-3';
		footer.innerHTML = `
			<button class="px-4 py-2 text-gray-400 hover:text-gray-300 rounded" id="cancel">Cancel</button>
			<button class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors" id="add">Add Selected Columns</button>
		`;

		dialog.appendChild(header);
		dialog.appendChild(content);
		dialog.appendChild(footer);
		document.body.appendChild(dialog);

		dialog.querySelector('#cancel').onclick = () => dialog.close();
		dialog.querySelector('#add').onclick = () => {
			const selected = Array.from(dialog.querySelectorAll('input:checked')).map((input) => ({
				id: input.value,
				name: input.dataset.name,
				visible: true
			}));
			columns = [...columns, ...selected];
			dialog.close();
		};

		dialog.showModal();
	}

	function handleTableHover(event) {
		const tableContainer = event.originalTarget;
		if (tableContainer) {
			const tableRect = tableContainer.getBoundingClientRect();
			const scrollTarget = window.scrollY + tableRect.top - 100; // 100px padding from top

			window.scrollTo({
				top: scrollTarget,
				behavior: 'smooth'
			});
		}
	}

	let notifications = [];
	let notificationTimeout;

	function showNotification(message, type = 'success') {
		notifications = [...notifications, { message, type, id: Date.now() }];
		// if (notificationTimeout) clearTimeout(notificationTimeout);
		notificationTimeout = setTimeout(() => {
			notifications = notifications.slice(1);
		}, 3000);
	}

	// Update getUnitImagePath function here
	function getUnitImagePath(unitData) {
		if (!unitData || !unitData.buildpic) return '';
		const buildpic = unitData.buildpic;
		const parts = buildpic.split('/');
		const filenameWithExt = parts.pop();
		const category = parts.pop();
		const filename = filenameWithExt.split('.')[0].toLowerCase();

		if (category) {
			return `${base}/unitpics_webp/${category}/${filename}.webp`;
		} else {
			console.warn(`Buildpic might be missing category: ${buildpic}. Using fallback path.`);
			return `${base}/unitpics_webp/${filename}.webp`;
		}
	}

	// Function to get unit icon path for browse and compare views
	function getUnitIconPath(unitId) {
		if (!$unitIconMap || !unitId || !$unitIconMap[unitId]) return '';
		return `${base}/${$unitIconMap[unitId]}`;
	}
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<Navbar />
	<div class="container mx-auto max-w-7xl px-4 py-8">
		<!-- View Mode Toggle -->
		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div
				class="rounded-xl bg-gray-800/50 p-6 {viewMode === 'browse'
					? 'ring-2 ring-teal-500/50'
					: ''}"
			>
				<div class="mb-4 flex items-center gap-3">
					<svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-teal-300">Browse Mode</h2>
				</div>
				<ul class="ml-4 space-y-2 text-gray-300">
					<li>• Filter units by type, faction, and tech level</li>
					<li>• Add custom filters for specific unit properties</li>
					<li>• Sort columns by clicking column headers</li>
					<li>• Customize visible columns using the column manager</li>
					<li>• Click unit names to view detailed information</li>
				</ul>
			</div>

			<div
				class="rounded-xl bg-gray-800/50 p-6 {viewMode === 'compare'
					? 'ring-2 ring-teal-500/50'
					: ''}"
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
					<h2 class="text-xl font-semibold text-teal-300">Compare Mode</h2>
				</div>
				<ul class="ml-4 space-y-2 text-gray-300">
					<li>• Select multiple units to compare side by side</li>
					<li>• Add or remove unit slots as needed</li>
					<li>• Properties are grouped by category</li>
					<li>• Different values are highlighted for easy comparison</li>
					<li>• Expand object properties to see detailed information</li>
				</ul>
			</div>
		</div>

		<div class="mb-8 flex justify-center gap-4">
			<button
				class="rounded-lg px-6 py-3 font-medium transition-all {viewMode === 'browse'
					? 'bg-teal-600 text-white'
					: 'bg-gray-800 text-gray-300 hover:bg-gray-700'}"
				on:click={() => (viewMode = 'browse')}
			>
				Browse Units
			</button>
			<button
				class="rounded-lg px-6 py-3 font-medium transition-all {viewMode === 'compare'
					? 'bg-teal-600 text-white'
					: 'bg-gray-800 text-gray-300 hover:bg-gray-700'}"
				on:click={() => (viewMode = 'compare')}
			>
				Compare Units
			</button>
		</div>

		{#if viewMode === 'browse'}
			<!-- Browse Mode -->
			<div class="rounded-lg bg-gray-800/50 p-6">
				<!-- Search Bar -->
				<div class="mb-6">
					<div class="relative">
						<input
							type="text"
							bind:value={searchQuery}
							placeholder="Search units..."
							class="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500"
						/>
						<svg
							class="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>

				<!-- Filters -->
				<div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
					<div class="space-y-2">
						<label for="tech-level" class="text-sm text-gray-400">Tech Level</label>
						<select
							id="tech-level"
							bind:value={selectedTech}
							class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
						>
							<option value="all">All Tech Levels</option>
							<option value="1">Tech 1</option>
							<option value="2">Tech 2</option>
						</select>
					</div>

					<div class="space-y-2">
						<label for="unit-type" class="text-sm text-gray-400">Unit Type</label>
						<select
							id="unit-type"
							bind:value={selectedType}
							class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
						>
							<option value="all">All Types</option>
							{#each getUniqueTypes() as type}
								<option value={type}>{type}</option>
							{/each}
						</select>
					</div>

					<div class="space-y-2">
						<label for="sub-type" class="text-sm text-gray-400">Sub Type</label>
						<select
							id="sub-type"
							bind:value={selectedSubType}
							class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
						>
							<option value="all">All Sub Types</option>
							{#each getUniqueSubTypes() as subType}
								<option value={subType}>{subType}</option>
							{/each}
						</select>
					</div>

					<div class="space-y-2">
						<label for="faction" class="text-sm text-gray-400">Faction</label>
						<select
							id="faction"
							bind:value={selectedFaction}
							class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
						>
							<option value="all">All Factions</option>
							<option value="arm">Armada</option>
							<option value="cor">Cortex</option>
						</select>
					</div>
				</div>

				<!-- Custom Filters -->
				<div class="mb-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="text-sm font-medium text-gray-300">Custom Filters</h3>
						<button
							on:click={addCustomFilter}
							class="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300"
						>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
							Add Filter
						</button>
					</div>

					{#if customFilters.length > 0}
						<div class="space-y-3">
							{#each customFilters as filter, i}
								<div class="flex items-center gap-3">
									<select
										bind:value={filter.field}
										class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
									>
										<option value="">Select field...</option>
										{#each availableFields as category}
											<optgroup label={category.category}>
												{#each category.fields as field}
													<option value={field.id}>{field.name}</option>
												{/each}
											</optgroup>
										{/each}
									</select>

									<select
										bind:value={filter.operator}
										class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
									>
										<option value=">">greater than</option>
										<option value="<">less than</option>
										<option value="=">=</option>
									</select>

									<input
										type="number"
										bind:value={filter.value}
										class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200"
										placeholder="Value"
									/>

									<button
										on:click={() => removeCustomFilter(i)}
										aria-label="Remove filter"
										class="text-gray-400 hover:text-red-400"
									>
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Column Management -->
				<div class="mb-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="text-sm font-medium text-gray-300">Visible Columns</h3>
						<button
							on:click={addNewColumn}
							class="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300"
						>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
							Add Column
						</button>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each columns as column}
							<label class="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-2">
								<input
									type="checkbox"
									bind:checked={column.visible}
									class="rounded border-gray-600 bg-gray-800 text-teal-500 focus:ring-teal-500"
								/>
								<span class="text-sm text-gray-300">{column.name}</span>
							</label>
						{/each}
					</div>
				</div>

				<!-- Results Table Container -->
				<!-- Add loading check before rendering table that depends on unitIconMap -->
				{#if unitsDataLoaded && $unitIconMap}
					<div class="relative {isFullScreen ? 'fullscreen-container' : ''}">
						<div class="table-controls mb-2 flex justify-end">
							<button
								on:click={toggleFullScreen}
								class="flex items-center gap-2 rounded-lg bg-gray-800/80 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
								aria-label={isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'}
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									{#if isFullScreen}
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 9L4 4m0 0l5 0m-5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0 -5M15 9l5 -5m0 0l-5 0m5 0l0 5M15 15l5 5m0 0l-5 0m5 0l0 -5"
										/>
									{:else}
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m4 0v-4m0 4l-5-5"
										/>
									{/if}
								</svg>
								{isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
							</button>
						</div>
						<div
							class="overflow-x-auto {isFullScreen ? 'fullscreen-table' : 'max-h-[70vh]'}"
							id="browse-table-container"
						>
							<table class="relative w-full">
								<thead>
									<tr
										class="sticky top-0 z-20 border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm"
									>
										{#each columns.filter((col) => col.visible) as column}
											<th
												class="cursor-pointer whitespace-nowrap p-3 text-left text-gray-400 hover:text-white {column.id ===
												'unit'
													? 'sticky left-0 z-30 min-w-[250px] bg-gray-900/95 backdrop-blur-sm'
													: ''}"
												on:click={() => handleColumnSort(column)}
											>
												<div class="flex items-center gap-1">
													{column.name}
													{#if sortBy === (column.id === 'unit' ? 'name' : column.id)}
														<svg
															class="h-4 w-4 transition-transform {sortOrder === 'desc'
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
																d="M5 15l7-7 7 7"
															/>
														</svg>
													{/if}
												</div>
											</th>
										{/each}
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-800/50">
									{#each getFilteredAndSortedUnits() as unit (unit.id)}
										{@const browseImagePath = getUnitImagePath(unit.data)}
										{@const browseIconPath = getUnitIconPath(unit.id)}
										<tr class="border-b border-gray-800/50 hover:bg-gray-800/30">
											<td class="sticky left-0 z-10 bg-gray-900 p-3">
												<div class="flex min-w-[300px] items-center gap-3">
													<div
														class="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-gray-800/50"
													>
														{#if browseImagePath}
															<img
																src={browseImagePath}
																alt={unit.name}
																class="max-h-full max-w-full object-contain"
																loading="lazy"
															/>
														{:else}
															<span class="text-xs text-gray-500">?</span>
														{/if}
													</div>

													{#if browseIconPath}
														<div class="h-8 w-8 flex-shrink-0">
															<img
																src={browseIconPath}
																alt="{unit.name} icon"
																class="max-h-full max-w-full object-contain"
																loading="lazy"
															/>
														</div>
													{/if}

													<div class="flex flex-grow items-center justify-between">
														<div class="flex items-center gap-2">
															<button
																class="rounded-lg {selectedUnits.includes(unit.id)
																	? 'bg-red-600/20 hover:bg-red-600/30'
																	: 'bg-teal-600/20 hover:bg-teal-600/30'} group flex items-center gap-1.5 px-2 py-1 text-xs"
																on:click={() => {
																	if (selectedUnits.includes(unit.id)) {
																		selectedUnits = selectedUnits
																			.filter((u) => u && u !== unit.id)
																			.concat(selectedUnits.length < 2 ? [''] : []);
																		while (selectedUnits.length < 2) {
																			selectedUnits = [...selectedUnits, ''];
																		}
																		showNotification(`Removed ${unit.name} from comparison`);
																	} else {
																		const emptySlot = selectedUnits.findIndex((u) => !u);
																		if (emptySlot >= 0) {
																			selectedUnits[emptySlot] = unit.id;
																			selectedUnits = selectedUnits;
																		} else {
																			selectedUnits = [...selectedUnits, unit.id];
																		}
																		showNotification(`Added ${unit.name} to comparison`);
																	}
																}}
																aria-label={selectedUnits.includes(unit.id)
																	? 'Remove from comparison'
																	: 'Add to comparison'}
															>
																<span
																	class={selectedUnits.includes(unit.id)
																		? 'text-red-400'
																		: 'text-teal-400'}
																>
																	<svg
																		class="h-3 w-3"
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																	>
																		{#if selectedUnits.includes(unit.id)}
																			<path
																				stroke-linecap="round"
																				stroke-linejoin="round"
																				stroke-width="2"
																				d="M20 12H4"
																			/>
																		{:else}
																			<path
																				stroke-linecap="round"
																				stroke-linejoin="round"
																				stroke-width="2"
																				d="M12 4v16m8-8H4"
																			/>
																		{/if}
																	</svg>
																</span>
																<span class="opacity-70 group-hover:opacity-100">
																	{selectedUnits.includes(unit.id) ? 'Remove' : 'Compare'}
																</span>
															</button>
															<a
																href="{base}/unit?name={unit.id}"
																class="text-teal-400 hover:underline"
															>
																{unit.name}
															</a>
														</div>
														<div class="flex h-6 items-center gap-2">
															<span class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-400">
																{unit.faction === 'arm' ? 'ARM' : 'COR'}
															</span>
															<span
																class="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-400"
															>
																{unit.type}
															</span>
															{#if unit.subtype && unit.subtype !== 'none'}
																<span
																	class="rounded-full bg-pink-500/20 px-2 py-0.5 text-xs text-pink-400"
																>
																	{unit.subtype}
																</span>
															{/if}
															<span
																class="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400"
															>
																T{unit.tech}
															</span>
															{#if unit.isSuicideUnit}
																<span
																	class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs text-red-400"
																>
																	{unit.isMineUnit ? 'Mine' : 'Suicide'}
																</span>
															{/if}
														</div>
													</div>
												</div>
											</td>
											{#each columns.filter((col) => col.visible && col.id !== 'unit') as column}
												<td class="p-3 text-right text-gray-300">
													<!-- Use the pre-typed value from the unit object -->
													{formatValueWithContext(unit[column.id], column.id)}
												</td>
											{/each}
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{:else}
					<div class="py-12 text-center text-gray-400">Loading unit data and icons...</div>
				{/if}
			</div>
		{:else}
			<!-- Compare Mode -->
			{#if unitsDataLoaded && $unitIconMap}
				<div class="rounded-lg bg-gray-900 shadow-xl">
					<header class="mb-8 text-center">
						<h1
							class="mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"
						>
							Unit Comparison
						</h1>
						<p class="mx-auto max-w-2xl text-gray-400">
							Compare multiple units side by side. Add or remove units using the controls below.
						</p>
					</header>

					<!-- Unit Selection Controls -->
					<div class="mb-8">
						<div class="flex flex-wrap items-start gap-4">
							{#each selectedUnits as unitId, index}
								<div class="min-w-[250px] max-w-[300px] flex-1 rounded-lg bg-gray-800/50 p-4">
									<div class="mb-4 flex items-center justify-between">
										<h3 class="font-medium text-white">Unit {index + 1}</h3>
										{#if selectedUnits.length > 2}
											<button
												on:click={() => removeUnitSlot(index)}
												class="text-gray-400 transition-colors hover:text-red-400"
												aria-label="Remove unit slot"
											>
												<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										{/if}
									</div>
									<select
										bind:value={selectedUnits[index]}
										class="w-full rounded-lg border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-white"
									>
										<option value="">Select a unit...</option>
										{#each unitsList as unit}
											<option value={unit.id} class="flex items-center gap-2">
												{unit.name}
												[{unit.faction === 'arm' ? 'ARM' : 'COR'}] [{unit.type}
												{unit.subtype !== 'none' ? `/${unit.subtype}` : ''}] [T{unit.tech}]
											</option>
										{/each}
									</select>
								</div>
							{/each}

							<button
								on:click={addUnitSlot}
								class="flex items-center gap-2 rounded-lg bg-teal-600/20 px-4 py-2 text-teal-400 transition-colors hover:bg-teal-600/30"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 4v16m8-8H4"
									/>
								</svg>
								Add Unit
							</button>
						</div>
					</div>

					<!-- Comparison Table -->
					{#if selectedUnitsData.some((u) => u)}
						<div
							class="relative overflow-auto"
							style="max-height: calc(100vh - 250px);"
							on:mouseenter={handleTableHover}
							role="region"
						>
							<table class="relative w-full border-collapse">
								<thead>
									<tr class="sticky top-0 z-20">
										<th
											class="sticky left-0 z-30 w-1/4 min-w-[200px] rounded-tl-lg bg-gray-800/95 p-4 text-left backdrop-blur-sm"
										>
											Property
										</th>
										{#each selectedUnitsData as unit, i}
											<th
												class="w-1/4 min-w-[300px] bg-gray-800/95 p-4 backdrop-blur-sm {i ===
												selectedUnitsData.length - 1
													? 'rounded-tr-lg'
													: ''}"
											>
												{#if unit}
													{@const compareImagePath = getUnitImagePath(unit.data)}
													{@const compareIconPath = getUnitIconPath(unit.id)}
													<!-- Add image to header -->
													<div class="flex flex-col items-center gap-3">
														<div
															class="flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-gray-700/50"
														>
															{#if compareImagePath}
																<img
																	src={compareImagePath}
																	alt={unit.name}
																	class="max-h-full max-w-full object-contain"
																	loading="lazy"
																/>
															{:else}
																<span class="text-xs text-gray-500">?</span>
															{/if}
														</div>
														<div class="space-y-1 text-center">
															<a
																href="{base}/unit?name={unit.id}"
																class="inline-block font-medium text-white transition-colors hover:text-teal-400"
															>
																{unit.name}
															</a>
															{#if compareIconPath}
																<div class="mx-auto h-6 w-6">
																	<img
																		src={compareIconPath}
																		alt="{unit.name} icon"
																		class="max-h-full max-w-full object-contain"
																		loading="lazy"
																	/>
																</div>
															{/if}
															<div class="flex justify-center gap-2 text-sm">
																<span class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-400">
																	{unit.faction === 'arm' ? 'Armada' : 'Cortex'}
																</span>
																<span
																	class="rounded-full bg-purple-500/20 px-2 py-0.5 text-purple-400"
																>
																	{unit.type}
																</span>
																{#if unit.subtype && unit.subtype !== 'none'}
																	<span
																		class="rounded-full bg-pink-500/20 px-2 py-0.5 text-pink-400"
																	>
																		{unit.subtype}
																	</span>
																{/if}
																<span class="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-400">
																	Tech {unit.tech}
																</span>
																{#if unit?.isSuicideUnit}
																	<span class="rounded-full bg-red-500/20 px-2 py-0.5 text-red-400">
																		{unit.isMineUnit ? 'Mine' : 'Suicide'}
																	</span>
																{/if}
															</div>
														</div>
													</div>
												{:else}
													<span class="text-gray-500">No unit selected</span>
												{/if}
											</th>
										{/each}
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-800/50">
									{#each Object.entries(comparableProperties) as [category, props]}
										{#if props.length > 0}
											<!-- Category Header -->
											<tr class={getCategoryStyle(category)}>
												<td
													class="sticky left-0 p-4 font-medium text-teal-400"
													colspan={selectedUnitsData.length + 1}
												>
													<div class="flex items-center gap-2">
														<div class="absolute inset-0 {getCategoryStyle(category)}"></div>
														<div class="relative flex items-center gap-2">
															<svg
																class="h-5 w-5"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="1.5"
																	d={getCategoryIcon(category)}
																/>
															</svg>
															<span class="capitalize">{category}</span>
														</div>
													</div>
												</td>
											</tr>
											<!-- Show weapons at the top of combat section -->
											{#if category === 'combat'}
												{#if selectedUnitsData.some((u) => u?.weapons?.length > 0)}
													<tr>
														<td class="left-0 bg-gray-900/95 p-4"></td>
														{#each selectedUnitsData as unit}
															<td class="p-4 align-top">
																<div class="top-0 rounded-lg bg-gray-800/50 p-4">
																	{#if unit?.weapons?.length > 0}
																		{#if unit.combatStats}
																			<div class="flex justify-center gap-2 text-sm">
																				<span
																					class="rounded-full bg-red-500/20 px-2 py-0.5 text-red-400"
																				>
																					DPS: {unit.combatStats.totalDps}
																				</span>
																				<span
																					class="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-400"
																				>
																					Range: {unit.combatStats.maxRange}
																				</span>
																			</div>
																		{/if}
																		<div class="mt-4 space-y-3">
																			{#each unit.weapons as weapon}
																				<div
																					class="rounded-lg border border-gray-700/30 bg-gray-900/50 p-3"
																				>
																					<div class="mb-2 font-medium text-gray-300">
																						{weapon.type}
																						{#if weapon.isEMP}
																							<span
																								class="ml-1 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-400"
																							>
																								EMP
																							</span>
																						{/if}
																						{#if weapon.isNotFlame}
																							<span
																								class="ml-1 rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-400"
																							>
																								Special
																							</span>
																						{/if}
																					</div>
																					<div class="grid grid-cols-2 gap-2 text-sm">
																						<div class="flex justify-between">
																							<span class="text-gray-400">Damage</span>
																							<span class="font-medium text-red-400"
																								>{weapon.damage}</span
																							>
																						</div>
																						<div class="flex justify-between">
																							<span class="text-gray-400">DPS</span>
																							<span class="font-medium text-orange-400"
																								>{#if weapon.isEMP}
																									N/A (EMP)
																								{:else if weapon.isNotFlame}
																									N/A (Special)
																								{:else}
																									{weapon.dps}
																								{/if}</span
																							>
																						</div>
																						{#if weapon.isEMP}
																							<div class="flex justify-between">
																								<span class="text-gray-400"
																									>{getDisplayName('paralyzemultiplier')}</span
																								>
																								<span class="font-medium text-yellow-400"
																									>x{weapon.paralyzeMultiplier}</span
																								>
																							</div>
																							<div class="flex justify-between">
																								<span class="text-gray-400">Paralyze DPS</span>
																								<span class="font-medium text-yellow-400"
																									>{weapon.paralyzeDps}</span
																								>
																							</div>
																						{/if}
																						{#if weapon.burstCount > 1}
																							<div class="flex justify-between">
																								<span class="text-gray-400">Burst</span>
																								<span class="font-medium text-green-400"
																									>x{weapon.burstCount}</span
																								>
																							</div>
																						{/if}
																						<div class="flex justify-between">
																							<span class="text-gray-400">Range</span>
																							<span class="font-medium text-blue-400"
																								>{weapon.range}</span
																							>
																						</div>
																						<div class="flex justify-between">
																							<span class="text-gray-400">Reload</span>
																							<span class="font-medium text-purple-400"
																								>{weapon.reloadTime}s</span
																							>
																						</div>
																					</div>
																				</div>
																			{/each}
																		</div>
																	{:else}
																		<div
																			class="flex items-center justify-center rounded-lg border border-gray-700/30 bg-gray-900/50 p-4"
																		>
																			<span class="text-sm text-gray-500">No weapons</span>
																		</div>
																	{/if}
																</div>
															</td>
														{/each}
													</tr>
												{/if}
											{/if}
											<!-- Properties in this category -->
											{#each props as prop}
												<!-- Use unit.data for object expansion, unit[prop] for direct display -->
												{@const values = selectedUnitsData.map((u) =>
													u
														? typeof u.data?.[prop] === 'object'
															? u.data[prop]
															: u[prop]
														: undefined
												)}
												{@const displayValues = selectedUnitsData.map((u) =>
													u ? u[prop] : undefined
												)}
												{@const allSame = displayValues.every(
													(v) => JSON.stringify(v) === JSON.stringify(displayValues[0])
												)}
												<tr class="transition-colors hover:bg-gray-800/30">
													<td
														class="sticky left-0 z-10 p-4 pl-8 text-gray-400"
														style="background: linear-gradient(to right, rgb(17 24 39 / 0.95), rgb(17 24 39 / 0.95)) padding-box, rgb(55 65 81 / 0.5) border-box; border-right: 2px solid transparent; backdrop-filter: blur(4px);"
														>{getDisplayName(prop)}</td
													>
													{#each values as value, i}
														<td
															class="p-4 text-center {!allSame && value !== undefined
																? 'font-medium'
																: ''} {allSame ? 'text-gray-300' : 'text-white'}"
														>
															{#if value === undefined || value === null}
																<span class="text-gray-500">—</span>
															{:else if typeof value === 'object' && value !== null}
																{#if expandedFields.has(prop)}
																	<div
																		class="bg-gray-850/50 space-y-1 overflow-y-auto rounded-md p-2"
																		style="max-height: 32rem;"
																	>
																		<RecursiveObjectDisplay data={value} />
																	</div>
																	<button
																		class="mt-2 text-xs text-teal-400 hover:text-teal-300"
																		on:click={() => toggleExpanded(prop)}
																	>
																		Collapse
																	</button>
																{:else}
																	<button
																		class="text-sm text-teal-400 hover:text-teal-300"
																		on:click={() => toggleExpanded(prop)}
																	>
																		{#if prop === 'buildoptions'}
																			View Build Options ({Object.keys(value).length})
																		{:else if prop === 'weapondefs'}
																			View Weapon Definitions ({Object.keys(value).length})
																		{:else if prop === 'weapons'}
																			View Weapons ({Object.keys(value).length})
																		{:else if prop === 'customparams'}
																			View Custom Parameters ({Object.keys(value).length})
																		{:else}
																			View Details ({Object.keys(value).length})
																		{/if}
																	</button>
																{/if}
															{:else}
																<!-- Use displayValues[i] here for the formatted value -->
																{formatValueWithContext(displayValues[i], prop)}
															{/if}
														</td>
													{/each}
												</tr>
											{/each}
										{/if}
									{/each}
								</tbody>
							</table>
						</div>
					{:else}
						<div class="py-12 text-center text-gray-400">
							Select units to compare their properties
						</div>
					{/if}
				</div>
			{:else}
				<div class="py-12 text-center text-gray-400">Loading unit data and icons...</div>
			{/if}
		{/if}
	</div>

	<!-- Notifications -->
	<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
		{#each notifications as notification (notification.id)}
			<div
				class="rounded-lg bg-gray-900 px-4 py-3 text-sm shadow-lg ring-1 {notification.type ===
				'success'
					? 'text-teal-400 ring-teal-500/50'
					: 'text-red-400 ring-red-500/50'}"
				transition:fly={{ y: 20, duration: 300 }}
			>
				{notification.message}
			</div>
		{/each}
	</div>
</div>

<style>
	.fullscreen-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 50;
		background-color: rgb(17, 24, 39);
		padding: 1rem;
		overflow: auto;
	}

	.fullscreen-table {
		height: calc(100vh - 3rem); /* Account for the button height */
		overflow: auto;
	}

	.fullscreen-container .table-controls {
		position: sticky;
		top: 0;
		z-index: 60;
		padding: 0.5rem 0;
		background-color: rgb(17, 24, 39);
	}
</style>
