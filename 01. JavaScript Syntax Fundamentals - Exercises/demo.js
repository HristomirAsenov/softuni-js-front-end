// Quotes example
console.log("My name is 'Hristomir'");
console.log('My name is "Hristomir"');

// Ternary operator example
const number = 51;
const isEven = number % 2 === 0 ? "Even" : "Odd";
const value = 51 === 1 ? "Is One" : 51 === 2 ? "Is two" : "Is bigger then 2";

console.log(isEven);
console.log(value);


// == vs === example
console.log(2 == "3");
console.log(2 === "2");


// Some string methods example
console.log("50 ".repeat(10));
console.log("50 ".split(""));

// Spread example
function testMe (...arg1) {
    console.log(arg1);
}

testMe(1,2,3,4,5,6,7,8);

// For of example
const a = "computer";
const arr = a.split("");

for(const prop of arr) {
    console.log(prop);
}

const operations = ["a", "b", "d", "z"];

for (const operation of operations) {
    console.log(operation);
}