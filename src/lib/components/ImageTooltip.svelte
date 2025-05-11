<script>
	export let imageUrl = '';
	export let iconUrl = '';
	export let altText = 'Unit Image';
	export let visible = false;
	export let x = 0;
	export let y = 0;

	let tooltipElement;
	let loaded = false;
	let error = false;

	let iconLoaded = false;
	let iconError = false;

	function handleLoad() {
		loaded = true;
		error = false;
	}

	function handleError() {
		loaded = false;
		error = true;
		// console.error('Failed to load image:', imageUrl);
	}

	function handleIconLoad() {
		iconLoaded = true;
		iconError = false;
	}

	function handleIconError() {
		iconLoaded = false;
		iconError = true;
	}

	// Reset loaded/error state when imageUrl changes
	$: if (imageUrl) {
		loaded = false;
		error = false;
	}

	// Reset icon state too
	$: if (iconUrl) {
		iconLoaded = false;
		iconError = false;
	}
</script>

{#if visible && (imageUrl || iconUrl)}
	<div
		bind:this={tooltipElement}
		class="pointer-events-none fixed z-[100] flex flex-col items-center gap-1 rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-xl transition-opacity duration-150
          {(loaded || iconLoaded) && !(error && iconError) ? 'opacity-100' : 'opacity-0'}"
		style="left: {x + 15}px; top: {y + 15}px; transform: translate(-50%, -50%); max-width: 200px;"
	>
		{#if imageUrl}
			{#if !loaded && !error}
				<div class="flex h-16 w-full items-center justify-center text-xs text-gray-400">
					Loading image...
				</div>
			{/if}
			<img
				src={imageUrl}
				alt={altText}
				on:load={handleLoad}
				on:error={handleError}
				class="max-h-full max-w-full object-contain {loaded && !error ? 'block' : 'hidden'}"
				style="max-width: 180px; max-height: 180px;"
			/>
			{#if error}
				<div class="p-1 text-center text-xs text-red-400">Image not found</div>
			{/if}
		{/if}

		{#if iconUrl}
			{#if !iconLoaded && !iconError}
				<div class="flex h-8 w-full items-center justify-center text-xs text-gray-400">
					Loading icon...
				</div>
			{/if}
			<img
				src={iconUrl}
				alt="Unit icon"
				on:load={handleIconLoad}
				on:error={handleIconError}
				class="max-h-full max-w-full object-contain {iconLoaded && !iconError ? 'block' : 'hidden'}"
				style="max-width: 48px; max-height: 48px;"
			/>
			{#if iconError}
				<div class="p-1 text-center text-xs text-red-400">Icon not found</div>
			{/if}
		{/if}
	</div>
{/if}

<style>
	/* Ensure images don't overflow their container if somehow max-width/height is bypassed */
	img {
		display: block;
	}
</style>
