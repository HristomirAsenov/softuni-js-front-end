function findPalindromeNumbers(numbersArr) {
    function determinateIsNumberAPalindrome(number) {
        const reversedNumber = Number(number.toString().split("").reverse().join(""));
        return number === reversedNumber;
    }
    
    numbersArr.forEach((number) => {
        console.log(determinateIsNumberAPalindrome(number));
    });
}

findPalindromeNumbers([123,323,421,121]);