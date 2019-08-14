function minSum(arr) {
	let sArr = arr.sort((a, b) => a - b)
	let length = arr.length - 1
	let sum = 0
	for (let i = 0; i < arr.length / 2; i++) {
		sum += sArr[i] * sArr[length - i]
	}
	return sum
}
