function stockList(listOfArt, listOfCat) {
  let answer = "";
  let allZero = true;
  for (let i = 0; i < listOfCat.length; i++) {
    let total = 0;

    for (let j = 0; j < listOfArt.length; j++) {

      if (listOfCat[i] === listOfArt[j][0]) {
        let n = listOfArt[j].split(' ');
        total += parseInt(n[1]);
      }
    }
    if (answer !== '') {
      answer += ' - ';
    }
    if (total !== 0) {
      allZero = false;
    }
    answer += `(${listOfCat[i]} : ${total})`;
  }

  if (allZero) {
    return '';
  }
  return answer;
}