function isNumberPerfect(number) {
  const notPerfectMessage = "It's not so perfect.";

  if (number < 0 || !Number.isInteger(number)) {
    console.log(notPerfectMessage);
    return;
  }

  function getDivisors(n) {
    const half = n / 2;
    const divisors = [];

    for (let currentNumber = 1; currentNumber <= half; currentNumber++) {
      if (n % currentNumber !== 0) {
        continue;
      }

      divisors.push(currentNumber);
    }

    return divisors;
  }

  const sumDivisors = (numberArr) => numberArr.reduce((a, b) => a + b, 0);

  const divisors = getDivisors(number);
  const message =
    sumDivisors(divisors) === number
      ? "We have a perfect number!"
      : "It's not so perfect.";

  console.log(message);
}

isNumberPerfect(28); // We have a perfect number!
isNumberPerfect(1236498); // It's not so perfect.
