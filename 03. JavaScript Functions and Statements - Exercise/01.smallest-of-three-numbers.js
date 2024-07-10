function smallestOfThreeNumbers (a,b,c) {
    if(a < b && a < c) {
        console.log(a)
    } else if (b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

smallestOfThreeNumbers([2,3,1]);


// (a, b, c) => console.log(Math.min(a, b, c))