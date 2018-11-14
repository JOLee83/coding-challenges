function getNames(data) {
  let array = []
  data.map(function (item) {
    array.push(item.name)
  });
  return array
}