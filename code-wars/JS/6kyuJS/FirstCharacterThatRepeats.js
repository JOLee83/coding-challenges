function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let x = s[i].codePointAt()
      let y = s[j].codePointAt()
      if (x === y) {
        return String.fromCodePoint(x)
      }
    }
  }
  return undefined
}