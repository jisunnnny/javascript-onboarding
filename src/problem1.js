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

function getPlayerMaxScore(pages) {
  const pageScore = Math.max(...pages.map((number) => getPageMaxScore(number)));

  return pageScore;
}

function problem1(pobi, crong) {
  const pobiScore = getPlayerMaxScore(pobi);
  const crongScore = getPlayerMaxScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;

  return 0;
}

module.exports = problem1;
