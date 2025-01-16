import { writable } from 'svelte/store';
import { base } from '$app/paths';

export const unitsData = writable(null);
export const unitNamesDetails = writable(null);
export const unitsByFaction = writable(null);
export const unitsByType = writable(null);
export const unitsByTech = writable(null);
export const unitsByFactionTypeTech = writable(null);
export const factionsList = writable(null);
export const typesWithSubtypes = writable(null);

export async function loadData() {
    try {
        const [
            unitsDataResponse,
            unitNamesDetailsResponse,
            unitsByFactionResponse,
            unitsByTypeResponse,
            unitsByTechResponse,
            unitsByFactionTypeTechResponse,
            factionsListResponse,
            typesWithSubtypesResponse
        ] = await Promise.all([
            fetch(`${base}/units_data.json`).then(res => res.json()),
            fetch(`${base}/unit_names_details.json`).then(res => res.json()),
            fetch(`${base}/units_by_faction.json`).then(res => res.json()),
            fetch(`${base}/units_by_type.json`).then(res => res.json()),
            fetch(`${base}/units_by_tech.json`).then(res => res.json()),
            fetch(`${base}/units_by_faction_type_tech.json`).then(res => res.json()),
            fetch(`${base}/factions_list.json`).then(res => res.json()),
            fetch(`${base}/types_with_subtypes.json`).then(res => res.json())
        ]);

        unitsData.set(unitsDataResponse);
        unitNamesDetails.set(unitNamesDetailsResponse);
        unitsByFaction.set(unitsByFactionResponse);
        unitsByType.set(unitsByTypeResponse);
        unitsByTech.set(unitsByTechResponse);
        unitsByFactionTypeTech.set(unitsByFactionTypeTechResponse);
        factionsList.set(factionsListResponse);
        typesWithSubtypes.set(typesWithSubtypesResponse);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}