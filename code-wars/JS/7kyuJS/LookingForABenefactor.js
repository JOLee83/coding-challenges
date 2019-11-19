function newAvg(arr, newavg) {
	let answer = 0
	if (arr.length) {
		answer = Math.ceil(
			newavg * (arr.length + 1) -
				arr.reduce((a, b) => {
					return a + b
				})
		)
	} else {
		answer = newavg
	}
	if (answer <= 0) {
		throw ''
	}
	return answer
}
