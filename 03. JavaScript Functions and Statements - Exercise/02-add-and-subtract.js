function addAndSubtract(firstNum, secondNum, thirdNum) {
  const sumTwoNumbers = (x, y) => x + y;
  const subtractTwoNumbers = (x, y) => x - y;

  const secondResult = subtractTwoNumbers(
    sumTwoNumbers(firstNum, secondNum),
    thirdNum
  );

  console.log(secondResult);
}

addAndSubtract(23, 6, 10);