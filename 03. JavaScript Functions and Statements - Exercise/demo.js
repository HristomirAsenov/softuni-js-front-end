printArguments(1);
console.log("---");
printArgument(1);

// Expression
const printArgument = (a) => console.log(a);

// Declaration
function printArguments (a) {
    console.log(a);
}

a(1);
b(2);
c(3);
d(4);

// function a (x) {
//     console.log(x);
// }

// function b (x) {
//     console.log(x);

//     function c (x) {
//         console.log(x);
    
//         function d (x) {
//             console.log(x);
//         }
//     }
// }

