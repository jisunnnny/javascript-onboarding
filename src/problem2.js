function problem2(cryptogram) {
  const regex = /(.)\1+/;

  if (!regex.test(cryptogram)) {
    return cryptogram;
  }

  const newCryptogram = cryptogram.replace(regex, "");
  return problem2(newCryptogram);
}

module.exports = problem2;
