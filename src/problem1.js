function sumDigit(number) {
  const result = String(number)
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr));

  return result;
}

function multiplyDigit(number) {
  const result = Sting(number)
    .split("")
    .reduce((acc, curr) => acc * parseInt(curr));

  return result;
}

function getPageMaxScore(number) {
  const sumScore = sumDigit(number);
  const multiplyScore = multiplyDigit(number);

  if (sumScore > multiplyScore) {
    return sumScore;
  }

  return multiplyScore;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
