const arr = [1,2,3,4,5];

console.log(arr.length / 2);

for (let index = 0; index < arr.length / 2; index++) {
    console.log(arr[index])
}

// 

"a".localeCompare("b")

const stringValue = "string";
stringValue.localeCompare("something");
const numberValue = 5;
// numberValue.localeCompare("123") // throws an error

// 

["John", "Christina", "Bob", "bob", "Ema"].sort() // ['Bob', 'Christina', 'Ema', 'John', 'bob']
["John", "Christina", "Bob", "bob", "Ema"].sort((a, b) => a.localeCompare(b)) // ['bob', 'Bob', 'Christina', 'Ema', 'John']