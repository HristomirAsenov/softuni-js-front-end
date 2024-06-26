function sameNumbers(number) {
  const sourceOfTruth = number % 10;
  let currentNumber = number;
  let isSame = true;
  let sum = 0;

  while (currentNumber > 0) {
    debugger;
    const currentDigit = currentNumber % 10;
    if (currentDigit !== sourceOfTruth) {
      isSame = false;
    }
    sum += currentDigit;

    currentNumber = parseInt(currentNumber / 10);
  }

  console.log(isSame);
  console.log(sum);
}

// sameNumbers(); call me (and don't forget the parameters :)
