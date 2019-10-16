function pyramid(n) {
	let count = 0
	let array = []
	while (n > count) {
		let push = 0
		let tempArr = []
		while (push <= count) {
			tempArr.push(1)
			push++
		}
		array.push(tempArr)
		count++
	}
	return array
}
