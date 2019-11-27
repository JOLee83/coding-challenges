function scoreHand(cards) {
	let tens = 'JQK'
	let aces = 0
	let total = cards
		.map(card => {
			if (tens.includes(card)) {
				return 10
			}
			if (card === 'A') {
				aces++
				return 11
			} else {
				return +card
			}
		})
		.reduce((a, b) => a + b)
	while (aces > 0 && total > 21) {
		aces--
		total -= 10
	}
	return total
}

function scoreHand(cards) {
	const hand = cards.reduce(
		(acc, cur) =>
			'JQK'.includes(cur) ? acc + 10 : cur === 'A' ? acc + 1 : +cur + acc,
		0
	)
	return hand < 12 && cards.includes('A') ? hand + 10 : hand
}
