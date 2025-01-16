<script>
	let currentPath = '';
	
	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}
</script>

<nav class="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
	<div class="container mx-auto px-4">
		<div class="flex items-center h-14">
			<div class="flex items-center space-x-8">
				<a href="{base}/" class="text-gray-200 hover:text-teal-400 transition-colors font-medium">
					Home
				</a>
				<div class="flex items-center space-x-4">
					<a
						href="{base}/explore"
						class="px-3 py-2 rounded-md {currentPath === '/explore'
							? 'bg-gray-900 text-teal-400'
							: 'text-gray-200 hover:text-teal-400 hover:bg-gray-800/50'} transition-all"
					>
						Explore
					</a>
					<a
						href="{base}/compare"
						class="px-3 py-2 rounded-md {currentPath === '/compare'
							? 'bg-gray-900 text-teal-400'
							: 'text-gray-200 hover:text-teal-400 hover:bg-gray-800/50'} transition-all"
					>
						Browse & Compare
					</a>
				</div>
			</div>
		</div>
	</div>
</nav> 