function myLanguages(results) {
  Object.keys(results).forEach(function (key) {
    if (results[key] < 60) {
      delete results[key]
    }
  })
  return Object.keys(results).sort((a, b) => results[a] - results[b]).reverse()
}