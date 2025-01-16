import { unitsData } from '$lib/data';

export const entries = async () => {
    const units = Object.keys(unitsData);
    return units.map(unit => ({
        name: unit
    }));
}; 