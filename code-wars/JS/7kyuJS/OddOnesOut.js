function oddOnesOut(nums) {
	let answer = []
	for (var i = 0; i < nums.length; i++) {
		let count = 0
		for (var j = 0; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				count++
			}
		}
		if (count % 2 === 0) {
			answer.push(nums[i])
		}
	}
	return answer
}
