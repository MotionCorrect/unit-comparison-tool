<script>
  export let imageUrl = '';
  export let altText = 'Unit Image';
  export let visible = false;
  export let x = 0;
  export let y = 0;

  let tooltipElement;
  let loaded = false;
  let error = false;

  function handleLoad() {
    loaded = true;
    error = false;
  }

  function handleError() {
    loaded = false;
    error = true;
    // console.error('Failed to load image:', imageUrl);
  }

  // Reset loaded/error state when imageUrl changes
  $: if (imageUrl) {
    loaded = false;
    error = false;
  }
</script>

{#if visible && imageUrl}
  <div
    bind:this={tooltipElement}
    class="fixed z-[100] p-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl transition-opacity duration-150 pointer-events-none
          {loaded && !error ? 'opacity-100' : 'opacity-0'}"
    style="left: {x + 15}px; top: {y + 15}px; transform: translate(-50%, -50%); max-width: 200px; max-height: 200px;"
  >
    {#if !loaded && !error}
      <div class="w-full h-full flex items-center justify-center text-gray-400 text-xs">Loading...</div>
    {/if}
    <img
      src={imageUrl}
      alt={altText}
      on:load={handleLoad}
      on:error={handleError}
      class="max-w-full max-h-full object-contain {loaded && !error ? 'block' : 'hidden'}"
      style="max-width: 180px; max-height: 180px;"
    />
    {#if error}
      <div class="text-red-400 text-xs p-2 text-center">Image not found</div>
    {/if}
  </div>
{/if}

<style>
  /* Ensure images don't overflow their container if somehow max-width/height is bypassed */
  img {
    display: block;
  }
</style> 