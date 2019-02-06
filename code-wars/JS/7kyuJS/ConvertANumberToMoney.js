numberToMoney = n => {
  var parts = (Math.floor(n * 100) / 100).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};