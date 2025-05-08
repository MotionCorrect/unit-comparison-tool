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
  <div class="space-y-1.5 {depth > 0 ? 'ml-3 pl-3 border-l border-gray-600/50' : ''}">
    {#each Object.entries(data) as [key, value] (key)}
      <div class="flex flex-col items-start rounded-md py-1 text-sm">
        <span class="text-gray-400 text-xs mb-0.5">{getDisplayName(key)}:</span>
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
                        <span class="italic text-gray-300 text-xs">(Item {i+1} - Object):</span>
                         <!-- Recurse for objects within arrays -->
                        <svelte:self data={item} depth={depth + 1} />
                    {:else}
                      <span class="text-gray-200 text-xs">{formatValueWithContext(item, key + '_' + i)}</span>
                    {/if}
                  </div>
                {/each}
              </div>
            {:else}
              <span class="italic font-medium text-gray-400 text-xs">(Empty Array)</span>
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
  <span class="italic text-xs text-gray-500">No data to display.</span>
{/if} 