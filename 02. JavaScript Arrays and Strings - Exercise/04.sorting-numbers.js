function sortingNumbers (arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const outputArr = new Array(sortedArr.length).fill(0).map((_, index) => {
        const isEven = index % 2 === 0;
        const smallNumberIndex = index / 2;
        const bigNumberIndex = sortedArr.length - Math.ceil((index / 2));

        return isEven ? sortedArr[smallNumberIndex] : sortedArr[bigNumberIndex];
    });

    return (outputArr);
}

const sortNumbersResult = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

console.log(sortNumbersResult);


// input [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

// index 0 - index 0 (from sorted array)
// index 1 - sortArray.length -1 (from sorted array)
// index 2 - index 1 (from sorted array)
// index 3 - sortArray.length -2 (from sorted array)
// index 4 - index 2 (from sorted array)
// index 5 - sortArray.length - 3
// index 6 - index 3 (from sorted array)
// index 7 - sortArray.length -4