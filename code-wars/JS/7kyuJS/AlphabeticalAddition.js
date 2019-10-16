function addLetters(...letters) {
	if (!letters.length) {
		return 'z'
	}
	if (letters.length === 1) {
		return letters[0]
	}
	let total =
		letters
			.map(letter => {
				return letter.toLowerCase().charCodeAt(0) - 96
			})
			.reduce((a, b) => {
				return a + b
			}) % 26
	total = total === 0 ? 26 : total
	return String.fromCharCode(total + 96)
}
