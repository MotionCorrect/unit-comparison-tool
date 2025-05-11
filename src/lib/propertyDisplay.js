import { propertyToDisplayName } from './keywords_map.js';

/**
 * Gets the user-friendly display name for a property
 * @param {string} propertyName - The original property name
 * @returns {string} - The formatted display name
 */
export function getDisplayName(propertyName) {
	// If we have a mapping in our keywords map, use it
	if (propertyName in propertyToDisplayName) {
		return propertyToDisplayName[propertyName];
	}

	// Otherwise, do basic formatting (this is a fallback)
	return (
		propertyName
			// Convert snake_case to space separated
			.replace(/_/g, ' ')
			// Insert spaces before capital letters (for camelCase)
			.replace(/([A-Z])/g, ' $1')
			// Capitalize first letter
			.replace(/^./, (str) => str.toUpperCase())
			.trim()
	);
}

/**
 * Format a value for display based on its property name and value
 * @param {any} value - The value to format
 * @returns {string} - The formatted value
 */
export function formatValue(value) {
	if (value === undefined || value === null) return '—';
	if (typeof value === 'boolean') return value ? 'Yes' : 'No';
	if (typeof value === 'number') return value.toLocaleString();
	if (Array.isArray(value)) return value.join(', ');
	return value;
}

/**
 * Format a value with context based on property name
 * @param {any} value - The value to format
 * @param {string} key - The property name
 * @returns {string} - The formatted value
 */
export function formatValueWithContext(value, key) {
	// Special handling for build time which needs to be divided by 100
	if (key === 'buildtime' && typeof value === 'number') {
		const seconds = value / 100;
		return `${seconds.toFixed(2)}s`; // Format to 2 decimal places + 's'
	}
	// General time formatting for other time fields
	if (key.toLowerCase().includes('time') && typeof value === 'number') {
		return `${value.toFixed(2)}s`; // Format to 2 decimal places + 's'
	}
	// Special handling for DPS, Range, and other specific numeric values
	if (
		(key === 'dps' ||
			key === 'maxRange' ||
			key === 'range' ||
			key === 'sightDistance' ||
			key === 'sightdistance') &&
		typeof value === 'number'
	) {
		// If it's a whole number, display without decimal. Otherwise, one decimal for dps/range, potentially more for others if needed by toLocaleString default.
		if (key === 'dps' || key === 'maxRange' || key === 'range') {
			// Keys that strictly prefer .0 or .X
			return value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
		}
		// For sightDistance, allow toLocaleString to handle it, which usually doesn't add .0 for whole numbers.
		// If specific formatting (e.g. always 0 decimals) is needed for sightDistance, it can be added here.
		return value.toLocaleString();
	}
	// Ensure other numbers like health, armor, buildcostmetal also use toLocaleString for consistency if they are numbers
	if (typeof value === 'number') {
		return value.toLocaleString();
	}
	return formatValue(value); // Fallback to general formatValue which also handles numbers with toLocaleString, but this explicit check above is clearer.
}
