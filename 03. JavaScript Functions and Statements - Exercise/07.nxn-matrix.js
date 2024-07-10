function printNxNMatrix(x) {
  const getNumberNTimes = (number, separator = " ") => {
    return `${number}${separator}`.repeat(number).trim();
  };

  for (let row = 0; row < x; row++) {
    console.log(getNumberNTimes(x));
  }
}

printNxNMatrix(2);

// 7
// 7
// 7
// 7
// 7
// 7
// 7
