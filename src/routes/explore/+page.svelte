<script>
	import { onMount, onDestroy } from 'svelte';
	import * as d3 from 'd3';
	import {
		loadData,
		unitNamesDetails,
		unitsByFactionTypeTech,
		unitsData,
		unitIconMap,
		factionsList
	} from '$lib/data';
	import Navbar from '$lib/components/Navbar.svelte';
	import { base } from '$app/paths';

	let selectedFaction = 'arm';
	let graphView = 'factions';
	let graphContainer;
	let dataLoaded = false;

	const links = [];
	const nodes = [];

	let zoomInstance;
	let currentSimulation = null;

	// Add state for last shown tooltip
	let lastTooltipContent = null;

	// Add tooltip timeout handling
	let tooltipTimeout;

	// Add this at the top of the script
	let tooltipHideTimeout;

	// Add at top of script
	let currentHoveredNodeId = null;

	let tickCount = 0;
	const MAX_TICKS = 300;

	onMount(async () => {
		await loadData();
		dataLoaded = true;
	});

	// Process data for the graph
	function prepareGraphData() {
		if (!dataLoaded || !$unitsByFactionTypeTech || !$unitNamesDetails) {
			console.log('Data not ready:', {
				dataLoaded,
				unitsByFactionTypeTech: $unitsByFactionTypeTech,
				unitNamesDetails: $unitNamesDetails
			});
			return;
		}

		nodes.length = 0;
		links.length = 0;

		// Add faction node
		nodes.push({
			id: selectedFaction,
			group: 'faction',
			name: $unitNamesDetails?.units?.factions?.[selectedFaction] || selectedFaction
		});

		// Add type nodes and connect to faction
		Object.keys($unitsByFactionTypeTech[selectedFaction]).forEach((type) => {
			const typeNodeId = `${selectedFaction}-${type}`;
			nodes.push({ id: typeNodeId, group: 'type', name: type });
			links.push({ source: selectedFaction, target: typeNodeId });

			// Add unit nodes and connect to types
			Object.keys($unitsByFactionTypeTech[selectedFaction][type]).forEach((subType) => {
				if (subType === 'none') {
					Object.keys($unitsByFactionTypeTech[selectedFaction][type][subType]).forEach((tech) => {
						const techNodeId = `${selectedFaction}-${type}-${tech}`;
						nodes.push({ id: techNodeId, group: 'tech', name: tech });
						links.push({ source: typeNodeId, target: techNodeId });

						$unitsByFactionTypeTech[selectedFaction][type][subType][tech].forEach((unit) => {
							const unitNodeId = `${selectedFaction}-${type}-${tech}-${$unitNamesDetails.units.names[unit.name] || unit.name}`;
							nodes.push({
								id: unitNodeId,
								group: 'unit',
								name: $unitNamesDetails.units.names[unit.name] || unit.name,
								dbName: unit.name,
								tech: tech
							});
							links.push({ source: techNodeId, target: unitNodeId });
						});
					});
				} else {
					const subTypeNodeId = `${selectedFaction}-${type}-${subType}`;
					nodes.push({ id: subTypeNodeId, group: 'subType', name: subType });
					links.push({ source: typeNodeId, target: subTypeNodeId });

					Object.keys($unitsByFactionTypeTech[selectedFaction][type][subType]).forEach((tech) => {
						const techNodeId = `${selectedFaction}-${type}-${subType}-${tech}`;
						nodes.push({ id: techNodeId, group: 'tech', name: tech });
						links.push({ source: subTypeNodeId, target: techNodeId });

						$unitsByFactionTypeTech[selectedFaction][type][subType][tech].forEach((unit) => {
							const unitNodeId = `${selectedFaction}-${type}-${subType}-${tech}-${$unitNamesDetails.units.names[unit.name] || unit.name}`;
							nodes.push({
								id: unitNodeId,
								group: 'unit',
								name: $unitNamesDetails.units.names[unit.name] || unit.name,
								dbName: unit.name,
								tech: tech
							});
							links.push({ source: techNodeId, target: unitNodeId });
						});
					});
				}
			});
		});
	}

	// Add this function before createGraph()
	function calculateLinkDistance(source, target) {
		// Count connections for both nodes
		const sourceConnections = links.filter(
			(l) => l.source === source.id || l.target === source.id
		).length;
		const targetConnections = links.filter(
			(l) => l.source === target.id || l.target === target.id
		).length;

		// Base distance plus additional space for more connected nodes
		const baseDistance = 200;
		const connectionFactor = 20;
		return baseDistance + (sourceConnections + targetConnections) * connectionFactor;
	}

	// Function to get image path (Apply working logic)
	function getUnitImagePath(unitDbName) {
		if (!unitDbName || !$unitsData || !$unitsData[unitDbName]) return '';
		const unitFullData = $unitsData[unitDbName];
		const unitSpecificData = unitFullData?.data?.[unitDbName];
		if (!unitSpecificData || !unitSpecificData.buildpic) return '';

		const buildpic = unitSpecificData.buildpic;
		const parts = buildpic.split('/');
		// Remove strict checks as per unit page logic
		const filenameWithExt = parts.pop();
		const category = parts.pop();
		const filename = filenameWithExt.split('.')[0].toLowerCase(); // Add lowercase

		if (category) {
			// Use fallback logic
			return `${base}/unitpics_webp/${category}/${filename}.webp`;
		} else {
			// Fallback if category is somehow missing (e.g., path like 'lups/unitpics/someunit.dds')
			// Or handle cases where buildpic might just be 'filename.dds' - needs confirmation of data structure
			console.warn(
				`Buildpic for ${unitDbName} might be missing category: ${buildpic}. Using fallback path.`
			);
			return `${base}/unitpics_webp/${filename}.webp`;
		}
	}

	// Function to get unit icon path (Added)
	function getUnitIconPath(unitId) {
		if (!$unitIconMap || !unitId || !$unitIconMap[unitId]) return '';
		// Assuming unit_icons_webp is directly in static
		return `${base}/${$unitIconMap[unitId]}`;
	}

	// Modify generateTooltipContent
	function generateTooltipContent(d) {
		const borderColor =
			d.group === 'unit'
				? '#64b5f6'
				: d.group === 'faction'
					? '#4caf50'
					: d.group === 'type'
						? '#ff9800'
						: d.group === 'subType'
							? '#a855f7'
							: '#ec4899';

		let content = '';

		if (d.group === 'faction') {
			const types = nodes.filter((n) => n.id.startsWith(`${d.id}-`) && n.group === 'type');
			const totalUnits = nodes.filter(
				(n) => n.id.startsWith(`${d.id}-`) && n.group === 'unit'
			).length;
			content = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${$unitNamesDetails?.units?.factions?.[d.id]?.charAt(0).toUpperCase() + $unitNamesDetails?.units?.factions?.[d.id]?.slice(1) || d.name.charAt(0).toUpperCase() + d.name.slice(1)}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${d.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex justify-between items-center">
							<span class="text-gray-400">Total Units</span>
							<span class="text-white font-medium">${totalUnits}</span>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Types (${types.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${types
									.map(
										(t) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${t.name}
									</div>
								`
									)
									.join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (d.group === 'type') {
			const subTypes = nodes.filter((n) => n.id.startsWith(`${d.id}-`) && n.group === 'subType');
			const units = nodes.filter((n) => n.id.startsWith(`${d.id}-`) && n.group === 'unit');
			const path = d.id.split('-');

			content = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${d.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${d.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200">
								${path.map((p) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${p}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						${
							subTypes.length > 0
								? `
							<div class="relative">
								<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
										class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
									<span>Subtypes (${subTypes.length})</span>
									<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
									</svg>
								</button>
								<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
									${subTypes
										.map(
											(st) => `
										<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
											${st.name}
										</div>
									`
										)
										.join('')}
								</div>
							</div>
						`
								: ''
						}
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${units.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${units
									.map(
										(u) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${u.name}
									</div>
								`
									)
									.join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (d.group === 'unit') {
			const path = d.id.split('-');
			const imagePath = getUnitImagePath(d.dbName);
			const imageHtml = imagePath
				? `<div class="mb-4 flex justify-center"><img src="${imagePath}" alt="${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName}" class="max-w-[150px] max-h-[150px] object-contain rounded border border-gray-700"></div>`
				: ''; // Empty string if no image

			const iconPath = getUnitIconPath(d.dbName); // Get icon path
			const iconHtml = iconPath // Generate icon HTML if path exists
				? `<div class="mt-2 flex justify-center"><img src="${iconPath}" alt="${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName} icon" class="max-w-[48px] max-h-[48px] object-contain"></div>`
				: '';

			content = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					${imageHtml}
					${iconHtml}
					<div class="flex items-center justify-between mt-2 mb-4 pb-3 border-b border-gray-700">
						<a href="${base}/unit?name=${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName}" class="text-xl font-semibold text-white hover:text-teal-400 transition-colors">${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName}</a>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${d.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${path.map((p) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${p}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-400">Tech Level</span>
							<span class="text-white font-medium">${d.tech}</span>
						</div>
						<a href="${base}/unit?name=${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName}" 
							class="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium text-center">
							View Unit Details
						</a>
					</div>
				</div>`;
		} else if (d.group === 'subType') {
			const units = nodes.filter((n) => n.id.startsWith(`${d.id}-`) && n.group === 'unit');
			const path = d.id.split('-');
			content = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${d.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${d.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${path.map((p) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${p}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${units.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${units
									.map(
										(u) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${u.name}
									</div>
								`
									)
									.join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (d.group === 'tech') {
			const units = nodes.filter((n) => n.id.startsWith(`${d.id}-`) && n.group === 'unit');
			const path = d.id.split('-');
			content = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">Tech Level ${d.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${d.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${path.map((p) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${p}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${units.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${units
									.map(
										(u) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${u.name}
									</div>
								`
									)
									.join('')}
							</div>
						</div>
					</div>
				</div>`;
		}

		return content;
	}

	// Function to calculate tooltip position
	function calculateTooltipPosition(event, tooltipWidth, tooltipHeight) {
		// tooltipHeight = 0;
		// tooltipWidth = 0;
		const padding = 10;
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;

		let x = event.x + padding;
		let y = event.y + padding;

		// Check right boundary
		if (x + tooltipWidth > screenWidth - padding) {
			x = event.x - tooltipWidth - padding;
		}

		// Check bottom boundary
		if (y + tooltipHeight > screenHeight - padding) {
			y = event.y - tooltipHeight - padding;
		}

		return { x, y };
	}

	// Create the force-directed graph
	function createGraph() {
		// Stop any existing simulation
		if (currentSimulation) {
			currentSimulation.stop();
		}

		const width = graphContainer.clientWidth;
		const height = graphContainer.clientHeight;
		const color = d3.scaleOrdinal(d3.schemeCategory10);

		// Create the SVG container with zoom support
		const svg = d3.select(graphContainer).append('svg').attr('width', width).attr('height', height);

		const g = svg.append('g');

		const zoom = d3
			.zoom()
			.scaleExtent([0.1, 10])
			.on('zoom', (event) => {
				g.attr('transform', event.transform);
			});

		zoomInstance = zoom; // Store zoom instance for external controls

		svg.call(zoom);

		const simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance((d) => calculateLinkDistance(d.source, d.target))
					.strength(0.4)
					.iterations(10)
			)
			.force('charge', d3.forceManyBody().strength(-500))
			.force('center', d3.forceCenter(width / 2, height / 2).strength(0.2))
			.force('collide', d3.forceCollide(22).strength(0.7))
			.alphaTarget(0.3)
			.alphaMin(0.001)
			.alphaDecay(0.000001)
			.velocityDecay(0.6);

		currentSimulation = simulation;

		// Add links and nodes to the transformed group instead of directly to svg
		const link = g
			.append('g')
			.attr('stroke', '#999')
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line')
			.attr('stroke-width', (d) => Math.sqrt(d.value));

		const node = g
			.append('g')
			.selectAll('text')
			.data(nodes)
			.join('text')
			.text((d) => d.name)
			.attr('font-size', (d) => {
				// Scale text size based on node type
				switch (d.group) {
					case 'faction':
						return '25px';
					case 'type':
						return '20px';
					case 'subType':
						return '17px';
					case 'tech':
						return '15px';
					case 'unit':
						return '12px';
					default:
						return '12px';
				}
			})
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			// .attr('stroke', '#fff')
			// .attr('stroke-width', (d) => {
			// 	// Adjust stroke width based on text size
			// 	return d.group === 'faction' ? 0.5 : d.group === 'type' ? 0.5 : 0.5;
			// })
			.attr('fill', (d) => color(d.group))
			.style('font-weight', 'bold')
			.style('cursor', 'pointer') // Add pointer cursor
			.on('click', (event, d) => {
				// Prevent default click behavior for non-unit nodes
				if (d.group !== 'unit') {
					event.preventDefault();
				}
			})
			// Add anchor tag for unit nodes
			.each(function (d) {
				if (d.group === 'unit') {
					const parent = d3.select(this);
					const link = parent
						.append('a')
						.attr(
							'href',
							`${base}/unit?name=${$unitNamesDetails?.units?.factions?.[d.dbName] || d.dbName}`
						);
					link.node().appendChild(this.firstChild);
				}
			})
			.on('mouseover', (event, d) => {
				currentHoveredNodeId = d.id;
				clearTimeout(tooltipHideTimeout);

				simulation.alpha(0.1).alphaTarget(0).velocityDecay(0.7);

				const tooltip = d3.select('body').select('.tooltip');

				// Set the HTML content using the modified generateTooltipContent
				tooltip.html(generateTooltipContent(d));

				// Position D3 tooltip (remains the same)
				const tooltipNode = tooltip.node();
				const tooltipRect = tooltipNode.getBoundingClientRect();
				const { x, y } = calculateTooltipPosition(event, tooltipRect.width, tooltipRect.height);

				tooltip
					.style('left', `${x}px`)
					.style('top', `${y}px`)
					.style('opacity', 1)
					.transition()
					.duration(200);

				d.fx = d.x;
				d.fy = d.y;
			})
			.on('mousemove', (event, d) => {
				// Update D3 tooltip position (remains the same)
				const tooltip = d3.select('body').select('.tooltip');
				const tooltipNode = tooltip.node();
				if (tooltipNode) {
					const tooltipRect = tooltipNode.getBoundingClientRect();
					const { x, y } = calculateTooltipPosition(event, tooltipRect.width, tooltipRect.height);
					tooltip.style('left', `${x}px`).style('top', `${y}px`).style('opacity', 1);
				}
			})
			.on('mouseout', (event, d) => {
				currentHoveredNodeId = null;

				simulation.alpha(0.4).alphaTarget(0.4).velocityDecay(0.5).restart();
				d.fx = null;
				d.fy = null;

				// Start timer to hide D3 tooltip (remains the same)
				const tooltip = d3.select('body').select('.tooltip');
				if (!tooltip.node()?.matches(':hover')) {
					handleTooltipHide();
				}
			});

		// Add a drag behavior.
		node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

		// Set the position attributes of links and nodes each time the simulation ticks.
		simulation.on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('x', (d) => d.x).attr('y', (d) => d.y);

			tickCount++;
			if (tickCount > MAX_TICKS) {
				simulation.stop();
				simulation.alphaTarget(0);
				// Optionally, fix node positions
				nodes.forEach((n) => {
					n.fx = n.x;
					n.fy = n.y;
				});
			}
		});

		// Add tooltip hover handlers
		d3.select('body')
			.select('.tooltip')
			.on('mouseenter', () => {
				clearTimeout(tooltipHideTimeout);
			})
			.on('mouseleave', () => {
				if (!currentHoveredNodeId) {
					handleTooltipHide();
				}
			});

		// Reheat the simulation when drag starts, and fix the subject position.
		function dragstarted(event) {
			event.subject.fx = event.subject.x;
			event.subject.fy = event.subject.y;
			simulation.alpha(0.1).alphaTarget(0).velocityDecay(0.7);
		}

		// Update the subject (dragged node) position during drag.
		function dragged(event) {
			simulation.alpha(0.1).alphaTarget(0).velocityDecay(0.7);
			event.subject.fx = event.x;
			event.subject.fy = event.y;
			const tooltip = d3.select('body').select('.tooltip');
			const tooltipNode = tooltip.node();
			const tooltipRect = tooltipNode.getBoundingClientRect();
			const { x, y } = calculateTooltipPosition(
				event.sourceEvent,
				tooltipRect.width,
				tooltipRect.height
			);

			tooltip.style('left', `${x}px`).style('top', `${y}px`).style('opacity', 1);
		}

		// Restore the target alpha so the simulation cools after dragging ends.
		// Unfix the subject position now that it's no longer being dragged.
		function dragended(event) {
			event.subject.fx = null;
			event.subject.fy = null;
		}

		// After simulation ends, recenter if nodes are out of bounds
		simulation.on('end', () => {
			const minX = d3.min(nodes, (d) => d.x);
			const maxX = d3.max(nodes, (d) => d.x);
			const minY = d3.min(nodes, (d) => d.y);
			const maxY = d3.max(nodes, (d) => d.y);
			const dx = (minX + maxX) / 2 - width / 2;
			const dy = (minY + maxY) / 2 - height / 2;
			nodes.forEach((d) => {
				d.x -= dx;
				d.y -= dy;
			});
			d3.select(graphContainer)
				.select('svg')
				.select('g')
				.attr('transform', `translate(${-dx},${-dy})`);
		});

		// When this cell is re-run, stop the previous simulation. (This doesn't
		// really matter since the target alpha is zero and the simulation will
		// stop naturally, but it's a good practice.)
		// invalidation.then(() => simulation.stop());
	}

	// Rebuild graph when data loads or faction changes
	$: if (
		graphContainer &&
		dataLoaded &&
		$unitsByFactionTypeTech &&
		$unitNamesDetails &&
		selectedFaction
	) {
		prepareGraphData();
		d3.select(graphContainer).selectAll('*').remove();
		createGraph();
	}

	function handleZoom(direction) {
		if (!zoomInstance) return;

		const svg = d3.select(graphContainer).select('svg');
		svg
			.transition()
			.duration(300)
			.call(zoomInstance.scaleBy, direction === 'in' ? 1.2 : 0.8);
	}

	// Clean up on component unmount
	onDestroy(() => {
		if (currentSimulation) {
			currentSimulation.stop();
		}
	});

	// Update tooltip timeout handling
	function handleTooltipHide() {
		clearTimeout(tooltipHideTimeout); // Clear any existing timeout
		tooltipHideTimeout = setTimeout(() => {
			const tooltip = d3.select('body').select('.tooltip');
			if (!tooltip.node()?.matches(':hover')) {
				tooltip
					.transition()
					.duration(200)
					.style('opacity', 0)
					.end() // Wait for transition to end
					.then(() => tooltip.html('')); // Clear content after fade
			}
		}, 500);
	}

	// Add to script section
	function handleGraphHover() {
		const graphRect = graphContainer.getBoundingClientRect();
		const scrollTarget = window.scrollY + graphRect.top - 100; // 100px padding from top

		window.scrollTo({
			top: scrollTarget,
			behavior: 'smooth'
		});
	}
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<Navbar />
	<div class="container mx-auto max-w-7xl px-4 py-8">
		<section class="mx-auto mb-12 max-w-4xl text-center">
			<h1 class="mb-6 text-5xl font-bold text-teal-400">Unit Explorer</h1>

			<div class="mb-8 rounded-xl bg-gray-800/50 p-6 shadow-lg">
				<h2 class="mb-4 text-xl font-semibold text-teal-300">How to Use</h2>
				<div class="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
					<div class="flex items-start space-x-3">
						<svg
							class="mt-1 h-6 w-6 text-teal-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
							/>
						</svg>
						<div>
							<h3 class="mb-1 font-medium text-teal-200">Navigate</h3>
							<p class="text-sm text-gray-400">
								Drag nodes to explore connections. Use mouse wheel or buttons to zoom.
							</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<svg
							class="mt-1 h-6 w-6 text-teal-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<div>
							<h3 class="mb-1 font-medium text-teal-200">Inspect</h3>
							<p class="text-sm text-gray-400">
								Hover over nodes to see details. Click unit nodes to view full info.
							</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<svg
							class="mt-1 h-6 w-6 text-teal-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
							/>
						</svg>
						<div>
							<h3 class="mb-1 font-medium text-teal-200">Switch Factions</h3>
							<p class="text-sm text-gray-400">
								Toggle between Armada and Cortex to explore different unit trees.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mb-8 flex justify-center gap-4">
				{#if $factionsList && $unitNamesDetails}
					{#each $factionsList as faction}
						<button
							class:bg-teal-600={selectedFaction === faction}
							class="rounded-lg bg-gray-700/50 px-6 py-3 font-medium transition-all hover:bg-teal-600/80"
							on:click={() => {
								if (selectedFaction !== faction) {
									selectedFaction = faction;
									// Reset simulation state
									tickCount = 0;
									if (nodes)
										nodes.forEach((n) => {
											n.fx = null;
											n.fy = null;
										});
									if (simulation) {
										simulation.alpha(1).restart();
									}
								}
							}}
						>
							{$unitNamesDetails?.units?.factions?.[faction]?.charAt(0).toUpperCase() +
								$unitNamesDetails?.units?.factions?.[faction]?.slice(1) ||
								faction.charAt(0).toUpperCase() + faction.slice(1)}
						</button>
					{/each}
				{/if}
			</div>
		</section>
		<div class="graph-wrapper">
			<div class="zoom-controls">
				<button class="zoom-button" on:click={() => handleZoom('in')} aria-label="Zoom in">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="icon"
					>
						<path
							fill-rule="evenodd"
							d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button class="zoom-button" on:click={() => handleZoom('out')} aria-label="Zoom out">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="icon"
					>
						<path
							fill-rule="evenodd"
							d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div
				class="graph-container"
				bind:this={graphContainer}
				on:mouseenter={handleGraphHover}
				role="presentation"
			></div>
		</div>
	</div>
</div>

<div class="tooltip"></div>

<style lang="postcss">
	.container {
		max-width: 100%;
		margin: 0 auto;
		padding: 2rem;
		color: white;
		min-height: 100vh;
	}

	.graph-wrapper {
		position: relative;
		width: 100%;
		height: 800px;
	}

	.graph-container {
		width: 100%;
		height: 800px;
		background-color: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
	}

	.zoom-controls {
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		gap: 8px;
		z-index: 10;
	}

	.zoom-button {
		background-color: rgba(23, 23, 23, 0.9);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		width: 32px;
		height: 32px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		color: white;
	}

	.zoom-button:hover {
		background-color: rgba(50, 50, 50, 0.9);
		transform: translateY(-1px);
	}

	.zoom-button:active {
		transform: translateY(0);
	}

	.icon {
		width: 16px;
		height: 16px;
		fill: currentColor;
	}

	.tooltip {
		position: fixed;
		width: 320px;
		pointer-events: auto;
		z-index: 1000;
		opacity: 0;
		transition: all 0.2s ease;
		visibility: hidden;
	}

	.tooltip:not(:empty) {
		visibility: visible;
	}

	/* Update tooltip styles */
	.tooltip {
		@apply pointer-events-auto invisible fixed z-50 w-80 opacity-0 transition-all duration-200;
	}

	.tooltip:not(:empty) {
		@apply pointer-events-auto visible;
	}

	.tooltip:hover {
		@apply opacity-100;
	}

	/* Graph container styling */
	.graph-container {
		@apply h-[800px] w-full overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900 shadow-2xl;
	}

	/* Zoom controls */
	.zoom-controls {
		@apply absolute right-4 top-4 z-10 flex gap-2;
	}

	.zoom-button {
		@apply flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/90 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-700 active:translate-y-0;
	}
</style>
