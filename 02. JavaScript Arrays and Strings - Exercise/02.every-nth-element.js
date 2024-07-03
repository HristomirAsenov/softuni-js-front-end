function printEveryNthElement(arr, step) {
    return (arr.filter((_, i) => i % step === 0));
}

printEveryNthElement(["1a", "2b", "3c", "4d", "5e"], 6);