/**
 * Utility functions for DPS calculations
 */

/**
 * Known DPS values for special suicide units
 */
export const SUICIDE_DPS_MAP = {
	corsktl: 3350,
	corroach: 2000,
	armvader: 2000,
	// Mine units
	armmine1: 445, // Light mine
	armmine2: 1110, // Medium mine
	armmine3: 1390, // Heavy mine
	armfmine3: 1940,
	cormine1: 400, // Light mine
	cormine2: 1110, // Medium mine
	cormine3: 1390, // Heavy mine
	cormine4: 1110, // Heavy mine
	corfmine3: 1940
};

/**
 * Default DPS for suicide units not in the map
 */
export const DEFAULT_SUICIDE_DPS = 1000;

/**
 * Process weapons data from the unitData and calculate DPS values
 * @param {Object} weapondefs - The weapon definitions object
 * @returns {Array} - Array of processed weapon objects with DPS and other properties
 */
export function processWeapons(weapondefs) {
	if (!weapondefs) {
		return [];
	}

	const processed = Object.entries(weapondefs).map(([key, weapon]) => {
		// Process damage values
		const damageValues = weapon.damage
			? Object.entries(weapon.damage).map(([type, value]) => ({
					type: type === 'default' ? 'Base' : type,
					value: Number(value || 0)
				}))
			: [];

		const maxDamage =
			damageValues.length > 0 ? Math.max(...damageValues.map((d) => Number(d.value))) : 0;

		// Check if weapon is an EMP/paralyzer
		const isEMP = weapon.paralyzer === 'Yes' || weapon.paralyzer === true;

		// Extract paralyze multiplier (important for EMP weapons)
		const paralyzeMultiplier = Number(weapon.paralyzemultiplier) || 1;

		// Check if weapon is a notFlame type (should be excluded from DPS)
		const isNotFlame = weapon.weapontype === 'notFlame';

		// Get burst count if exists
		const burstCount = weapon.burst ? Number(weapon.burst) : 1;

		// Calculate DPS, but set to 0 for EMP weapons and notFlame weapons
		const dps = isEMP || isNotFlame ? 0 : (maxDamage * burstCount) / (weapon.reloadtime || 1);

		// For EMP weapons, calculate paralyze DPS (using paralyzemultiplier)
		const paralyzeDps = isEMP
			? (maxDamage * burstCount * paralyzeMultiplier) / (weapon.reloadtime || 1)
			: 0;

		return {
			originalDefKey: key,
			name: weapon.name || key,
			type: weapon.weapontype || 'Unknown',
			damage: maxDamage,
			maxDamage,
			dps: typeof dps === 'number' ? dps.toFixed(1) : dps,
			paralyzeDps: typeof paralyzeDps === 'number' ? paralyzeDps.toFixed(1) : 0,
			paralyzeMultiplier,
			range: Number(weapon.range || 0),
			reloadTime: Number(weapon.reloadtime || 1),
			isEMP,
			isNotFlame,
			burstCount
		};
	});
	return processed;
}

/**
 * Calculate unit combat stats including total DPS and max range
 * @param {Array} weaponsProcessed - Array of processed weapons
 * @param {Object} unitDataSource - The unit data object
 * @param {string} unitId - The unit ID
 * @returns {Object|null} - Object with totalDps, totalParalyzeDps and maxRange, or null if no weapons
 */
export function getUnitCombatStats(weaponsProcessed, unitDataSource, unitId) {
	console.log(
		`[getUnitCombatStats for ${unitId}] Received processed weapons array (weaponsProcessed):`,
		weaponsProcessed ? JSON.parse(JSON.stringify(weaponsProcessed)) : undefined
	);
	console.log(
		`[getUnitCombatStats for ${unitId}] Received unitDataSource.weapons (slots):`,
		unitDataSource?.weapons ? JSON.parse(JSON.stringify(unitDataSource.weapons)) : undefined
	);
	console.log(
		`[getUnitCombatStats for ${unitId}] Received unitDataSource.weapondefs:`,
		unitDataSource?.weapondefs ? JSON.parse(JSON.stringify(unitDataSource.weapondefs)) : undefined
	);

	if (!weaponsProcessed?.length) {
		// If no weapon definitions were processed at all
		console.log(
			`[getUnitCombatStats for ${unitId}] No processed weapon definitions, returning null.`
		);
		return null;
	}

	const isSuicide = unitDataSource?.customparams?.instantselfd === true;

	if (isSuicide) {
		const suicideDPS = SUICIDE_DPS_MAP[unitId] || DEFAULT_SUICIDE_DPS;
		const rangeForSuicide =
			weaponsProcessed.length > 0
				? Math.max(...weaponsProcessed.map((w) => Number(w.range || 0)))
				: 0;
		return {
			totalDps: suicideDPS.toFixed(1),
			totalParalyzeDps: '0.0',
			maxRange: rangeForSuicide
		};
	}

	let calculatedTotalDps = 0;
	let calculatedTotalParalyzeDps = 0;
	let calculatedMaxRange = 0; // Start with 0

	const allSlottedDefKeys = []; // Store all defs used by slots, including duplicates

	// Phase 1: Calculate DPS and range from ALL explicit weapon slots.
	// If a def is in multiple slots, its DPS is added multiple times.
	if (
		unitDataSource &&
		unitDataSource.weapons &&
		Object.keys(unitDataSource.weapons).length > 0 &&
		weaponsProcessed.length > 0
	) {
		console.log(`[getUnitCombatStats for ${unitId}] Phase 1: Processing ALL weapon slots.`);
		for (const slotKey in unitDataSource.weapons) {
			const weaponSlot = unitDataSource.weapons[slotKey];
			if (weaponSlot && weaponSlot.def) {
				const weaponDefName = weaponSlot.def.toLowerCase();
				allSlottedDefKeys.push(weaponDefName); // Record this def is used by a slot
				const correspondingProcessedWeapon = weaponsProcessed.find(
					(w) => w.originalDefKey === weaponDefName
				);

				if (correspondingProcessedWeapon) {
					calculatedTotalDps += Number(correspondingProcessedWeapon.dps || 0);
					calculatedTotalParalyzeDps += Number(correspondingProcessedWeapon.paralyzeDps || 0);
					calculatedMaxRange = Math.max(
						calculatedMaxRange,
						Number(correspondingProcessedWeapon.range || 0)
					);
				} else {
					// Slot points to a def not in weaponsProcessed (e.g., filtered out like 'notFlame')
					// Still, try to get its range from the raw weapondefs.
					if (unitDataSource.weapondefs && unitDataSource.weapondefs[weaponDefName]) {
						calculatedMaxRange = Math.max(
							calculatedMaxRange,
							Number(unitDataSource.weapondefs[weaponDefName].range || 0)
						);
					}
				}
			}
		}
	}

	// Populate the set of defs that were covered by at least one slot for Phase 2
	const accountedForDefKeysInAtLeastOneSlot = new Set(allSlottedDefKeys);

	// Phase 2: Add DPS for weapon definitions in weapondefs that were NOT in ANY slot.
	// Also, ensure maxRange considers all weapon definitions from weaponsProcessed.
	if (weaponsProcessed.length > 0) {
		console.log(
			`[getUnitCombatStats for ${unitId}] Phase 2: Checking for unslotted weapon definitions and finalizing max range.`
		);
		weaponsProcessed.forEach((pWeapon) => {
			// If this processed weapon definition was NOT used by ANY slot, add its DPS once.
			if (!accountedForDefKeysInAtLeastOneSlot.has(pWeapon.originalDefKey)) {
				console.log(
					`[getUnitCombatStats for ${unitId}]     Adding DPS for unslotted definition: ${pWeapon.originalDefKey} (DPS: ${pWeapon.dps})`
				);
				calculatedTotalDps += Number(pWeapon.dps || 0);
				calculatedTotalParalyzeDps += Number(pWeapon.paralyzeDps || 0);
			}
			// Always update overall max range with every processed weapon's range
			// (This ensures even unslotted weapons contribute to overall unit max range if theirs is highest)
			calculatedMaxRange = Math.max(calculatedMaxRange, Number(pWeapon.range || 0));
		});
	}

	return {
		totalDps: calculatedTotalDps.toFixed(1),
		totalParalyzeDps: calculatedTotalParalyzeDps.toFixed(1),
		maxRange: calculatedMaxRange
	};
}

/**
 * Check if unit is a suicide unit
 * @param {Object} unitData - The unit data object
 * @returns {boolean} - True if unit is a suicide unit
 */
export function isSuicideUnit(unitData) {
	return unitData?.customparams?.instantselfd === true;
}

/**
 * Check if unit is a mine unit
 * @param {Object} unitData - The unit data object
 * @returns {boolean} - True if unit is a mine unit
 */
export function isMineUnit(unitData) {
	return isSuicideUnit(unitData) && unitData?.customparams?.mine === true;
}
