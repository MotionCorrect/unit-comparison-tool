<script>
	import { getDisplayName, formatValueWithContext } from '$lib/propertyDisplay';

	export let data;
	export let depth = 0;
	// No maxDepth needed anymore

	function isObject(value) {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function isArray(value) {
		return Array.isArray(value);
	}
</script>

{#if data}
	<div class="space-y-1.5 {depth > 0 ? 'ml-3 border-l border-gray-600/50 pl-3' : ''}">
		{#each Object.entries(data) as [key, value] (key)}
			<div class="flex flex-col items-start rounded-md py-1 text-sm">
				<span class="mb-0.5 text-xs text-gray-400">{getDisplayName(key)}:</span>
				<div class="ml-2 w-full overflow-hidden">
					{#if isObject(value)}
						<!-- Recurse for objects -->
						<svelte:self data={value} depth={depth + 1} />
					{:else if isArray(value)}
						{#if value.length > 0}
							<div class="space-y-1">
								{#each value as item, i (i)}
									<div class="rounded bg-gray-700/40 p-1.5">
										{#if typeof item === 'object' && item !== null}
											<span class="text-xs italic text-gray-300">(Item {i + 1} - Object):</span>
											<!-- Recurse for objects within arrays -->
											<svelte:self data={item} depth={depth + 1} />
										{:else}
											<span class="text-xs text-gray-200"
												>{formatValueWithContext(item, key + '_' + i)}</span
											>
										{/if}
									</div>
								{/each}
							</div>
						{:else}
							<span class="text-xs font-medium italic text-gray-400">(Empty Array)</span>
						{/if}
					{:else}
						<!-- Display simple value -->
						<span class="font-medium text-gray-100">{formatValueWithContext(value, key)}</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<span class="text-xs italic text-gray-500">No data to display.</span>
{/if}
