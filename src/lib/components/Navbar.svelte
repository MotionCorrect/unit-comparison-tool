<script>
	import { base } from '$app/paths';

	let currentPath = '';

	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}
</script>

<nav class="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-900/95 backdrop-blur-sm">
	<div class="container mx-auto px-4">
		<div class="flex h-14 items-center">
			<div class="flex items-center space-x-8">
				<a href="{base}/" class="font-medium text-gray-200 transition-colors hover:text-teal-400">
					Home
				</a>
				<div class="flex items-center space-x-4">
					<a
						href="{base}/explore"
						class="rounded-md px-3 py-2 {currentPath === '/explore'
							? 'bg-gray-900 text-teal-400'
							: 'text-gray-200 hover:bg-gray-800/50 hover:text-teal-400'} transition-all"
					>
						Explore
					</a>
					<a
						href="{base}/compare"
						class="rounded-md px-3 py-2 {currentPath === '/compare'
							? 'bg-gray-900 text-teal-400'
							: 'text-gray-200 hover:bg-gray-800/50 hover:text-teal-400'} transition-all"
					>
						Browse & Compare
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>
