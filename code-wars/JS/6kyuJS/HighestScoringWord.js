function high(x) {
	let arr = x.split(' ')
	let high = 0
	let index = 0
	x.split(' ').map((word, i) => {
		let score = 0
		word.split('').map(letter => {
			score += letter.charCodeAt() - 96
		})
		if (score > high) {
			high = score
			index = i
		}
	})
	return arr[index]
}
