function helpZoom(key) {
  return key.join('') === key.reverse().join('') ? 'Yes' : 'No';
}