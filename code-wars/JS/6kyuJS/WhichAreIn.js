function inArray(array1, array2) {
	let array3 = []
	let string = array2.join(' ')
	array1.forEach(word => {
		if (string.includes(word)) {
			array3.push(word)
		}
	})
	return array3.sort()
}
