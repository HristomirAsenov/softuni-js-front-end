function sumAndPrint(firstNumber, secondNumber) {
  let output = "";
  let sum = 0;

  for (
    let currentNumber = firstNumber;
    currentNumber <= secondNumber;
    currentNumber += 1
  ) {
    output += `${currentNumber} `;
    sum += currentNumber;
  }

  console.log(output.trim());
  console.log(`Sum: ${sum}`);
}

// sumAndPrint() call me (and don't forget the parameters :)
