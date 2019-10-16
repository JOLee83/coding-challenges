function isIsogram(str) {
	let sorted = str
		.toLowerCase()
		.split('')
		.sort()
	for (let i = 0; i < sorted.length - 1; i++) {
		if (sorted[i] === sorted[i + 1]) {
			return false
		}
	}
	return true
}
