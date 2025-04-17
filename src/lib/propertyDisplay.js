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
  return propertyName
    // Convert snake_case to space separated
    .replace(/_/g, ' ')
    // Insert spaces before capital letters (for camelCase)
    .replace(/([A-Z])/g, ' $1')
    // Capitalize first letter
    .replace(/^./, str => str.toUpperCase())
    .trim();
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
 * Format a time value in seconds
 * @param {number} seconds - Time in seconds
 * @returns {string} - Formatted time
 */
export function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
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
    return formatTime(value / 100);
  }
  // General time formatting for other time fields
  if (key.toLowerCase().includes('time') && typeof value === 'number') {
    return formatTime(value);
  }
  // Special handling for DPS values to ensure they have one decimal place
  if (key === 'dps' && typeof value === 'number') {
    return value.toFixed(1);
  }
  return formatValue(value);
} 