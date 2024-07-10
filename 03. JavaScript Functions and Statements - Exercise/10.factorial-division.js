function factorialDivision(firstNumber, secondNumber) {
  const findFactorial = (n) => {
    if (n < 0) {
      return -1;
    }

    if (n === 0) {
      return 1;
    }

    return n * findFactorial(n - 1);
  };

  const result = findFactorial(firstNumber) / findFactorial(secondNumber);

  console.log(result.toFixed(2));
}

factorialDivision(6, 3);
