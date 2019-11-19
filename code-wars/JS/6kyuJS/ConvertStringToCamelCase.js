function toCamelCase(str) {
	let array = []
	if (str.includes('-')) {
		array = [...str.split('-')]
	}
	if (str.includes('_')) {
		array = [...str.split('_')]
	}
	return array
		.map((word, i) => {
			if (i > 0) {
				word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
			} else {
				word = word.slice(0, 1) + word.slice(1).toLowerCase()
			}
			return word
		})
		.join('')
}
