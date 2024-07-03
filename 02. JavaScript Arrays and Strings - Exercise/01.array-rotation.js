function arrayRotation (arr, rotations) {
    const cutOffIndex = rotations % arr.length;
    const leftSide = arr.slice(0, cutOffIndex);
    const rightSide = arr.slice(cutOffIndex);
    const resultArr = rightSide.concat(leftSide);
    console.log(resultArr.join(" "));
}

arrayRotation([2, 4, 15, 31], 3);
