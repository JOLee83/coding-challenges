function flattenAndSort(array) {
	if (!array.length) {
		return array
	}
	return array
		.reduce((a, b) => {
			return a.concat(b)
		})
		.sort((a, b) => {
			return a - b
		})
}
