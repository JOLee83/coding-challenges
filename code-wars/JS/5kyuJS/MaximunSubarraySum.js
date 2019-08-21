var maxSequence = function(arr) {
	if (!arr.length) {
		return 0
	}
	let max = arr.reduce((a, b) => a + b)
	let length = arr.length - 1
	while (length > 0) {
		for (let i = 0; i + length <= arr.length; i++) {
			let newArr = arr.slice(i, i + length)
			let test = newArr.reduce((a, b) => a + b)
			if (test > max) {
				max = test
			}
		}
		length--
	}
	if (max < 0) {
		return 0
	}
	return max
}
