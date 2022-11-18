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

const isValidPageOrder = (pages) =>
  pages.every((page) => page > 1 && page < 400);

const isNextPage = (pages) => pages[1] - 1 === pages[0];

function isValid(pages) {
  if (isValidPageOrder(pages) && isNextPage(pages)) {
    return true;
  }

  return false;
}

function problem1(pobi, crong) {
  if (!isValid(pobi) || !isValid(crong)) return -1;

  const pobiScore = getPlayerMaxScore(pobi);
  const crongScore = getPlayerMaxScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;

  return 0;
}

module.exports = problem1;
