function minMinMax(array) {
	let max = Math.max(...array)
	let min = Math.min(...array)
	let minMin = min + 1
	while (array.includes(minMin)) {
		minMin++
	}
	return [min, minMin, max]
}
