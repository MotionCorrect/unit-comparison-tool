/**
 * Utility functions for DPS calculations
 */

/**
 * Known DPS values for special suicide units
 */
export const SUICIDE_DPS_MAP = {
    'corsktl': 3350,
    'corroach': 2000,
    'armvader': 2000,
    // Mine units
    'armmine1': 445,  // Light mine
    'armmine2': 1110, // Medium mine
    'armmine3': 1390, // Heavy mine
    'armfmine3': 1940,
    'cormine1': 400,  // Light mine
    'cormine2': 1110, // Medium mine
    'cormine3': 1390,  // Heavy mine
    'cormine4': 1110,  // Heavy mine
    'corfmine3': 1940,
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
    if (!weapondefs) return [];
    
    return Object.entries(weapondefs).map(([key, weapon]) => {
        // Process damage values
        const damageValues = weapon.damage
            ? Object.entries(weapon.damage).map(([type, value]) => ({
                    type: type === 'default' ? 'Base' : type,
                    value: Number(value || 0)
                }))
            : [];

        const maxDamage = damageValues.length > 0 
            ? Math.max(...damageValues.map((d) => Number(d.value)))
            : 0;

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
        const paralyzeDps = isEMP ? (maxDamage * burstCount * paralyzeMultiplier) / (weapon.reloadtime || 1) : 0;

        return {
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
}

/**
 * Calculate unit combat stats including total DPS and max range
 * @param {Array} weapons - Array of processed weapons
 * @param {Object} unitData - The unit data object
 * @param {string} unitId - The unit ID
 * @returns {Object|null} - Object with totalDps, totalParalyzeDps and maxRange, or null if no weapons
 */
export function getUnitCombatStats(weapons, unitData, unitId) {
    if (!weapons?.length) return null;
    
    // Check if this unit is a suicide unit
    const isSuicideUnit = unitData?.customparams?.instantselfd === true;
    
    // For suicide units, use predefined DPS values
    if (isSuicideUnit) {
        const suicideDPS = SUICIDE_DPS_MAP[unitId] || DEFAULT_SUICIDE_DPS;
        
        return {
            totalDps: suicideDPS.toFixed(1),
            totalParalyzeDps: "0.0",
            maxRange: Math.max(...weapons.map((w) => Number(w.range)))
        };
    }
    
    // Calculate total paralyze DPS from weapons
    const totalParalyzeDps = weapons.reduce((sum, w) => sum + Number(w.paralyzeDps || 0), 0);
    
    // Normal DPS calculation for non-suicide units
    return {
        totalDps: weapons.reduce((sum, w) => sum + Number(w.dps), 0).toFixed(1),
        totalParalyzeDps: totalParalyzeDps.toFixed(1),
        maxRange: Math.max(...weapons.map((w) => Number(w.range)))
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