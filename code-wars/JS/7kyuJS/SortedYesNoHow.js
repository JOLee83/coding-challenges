function isSortedAndHow(arr) {
  let ascArr = arr.slice(0).sort((a, b) => a - b)
  let descArr = arr.slice(0).sort((a, b) => b - a)
  let asc = true
  let desc = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ascArr[i]) {
      asc = false
    }
    if (arr[i] !== descArr[i]) {
      desc = false
    }
  }
  if (asc) return 'yes, ascending'
  if (desc) return 'yes, descending'
  return 'no'
}