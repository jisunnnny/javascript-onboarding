function sumDigit(number) {
  const sumResult = String(number)
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return sumResult;
}

function multiplyDigit(number) {
  const multiplyResult = String(number)
    .split("")
    .reduce((acc, curr) => acc * parseInt(curr), 1);

  return multiplyResult;
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
