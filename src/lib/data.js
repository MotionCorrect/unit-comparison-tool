import { writable } from 'svelte/store';
import { base } from '$app/paths';

export let unitsData = writable(null);
export let unitNamesDetails = writable(null);
export let unitsByFaction = writable(null);
export let unitsByType = writable(null);
export let unitsByTech = writable(null);
export let unitsByFactionTypeTech = writable(null);
export let factionsList = writable(null);
export let typesWithSubtypes = writable(null);
export let unitIconMap = writable(null);

let dataLoaded = false;

export async function loadData() {
	if (dataLoaded) return;

	const dataFiles = [
		'units_data.json',
		'unit_names_details.json',
		'units_by_faction.json',
		'units_by_type.json',
		'units_by_tech.json',
		'units_by_faction_type_tech.json',
		'factions_list.json',
		'types_with_subtypes.json',
		'unit_icon_map.json'
	];

	const [ud, und, ubf, ubt, ubtech, ubftt, fl, tws, uim] = await Promise.all(
		dataFiles.map(async (file) => {
			const response = await fetch(`${base}/${file}`);
			return response.json();
		})
	);

	unitsData.set(ud);
	unitNamesDetails.set(und);
	unitsByFaction.set(ubf);
	unitsByType.set(ubt);
	unitsByTech.set(ubtech);
	unitsByFactionTypeTech.set(ubftt);
	factionsList.set(fl);
	typesWithSubtypes.set(tws);
	unitIconMap.set(uim);

	dataLoaded = true;
}
