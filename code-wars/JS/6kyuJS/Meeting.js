function meeting(s) {
	return s
		.split(';')
		.map(name => {
			return (
				'(' +
				name
					.toUpperCase()
					.split(':')
					.reverse()
					.join(', ') +
				')'
			)
		})
		.sort()
		.join('')
}
