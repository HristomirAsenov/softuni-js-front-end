// different object structures depending on the situation
const personOne = {
  name: "Hristomir",
  age: 29,
  profession: "web developer",
};

//

const personTwo = {
  Hristomir: {
    age: 29,
    profession: "Web developer",
  },
};

// creating a copy object and modifying the properties after that
const partsWithQuattro = {
  brand: "Audi",
  model: "A4",
  hp: 125,
  quattro: true,
};

const partsWithoutQuattro = {
  ...partsWithQuattro,
  quattro: false,
  hp: 225,
};

console.log(partsWithQuattro);
console.log(partsWithoutQuattro);
console.log("-".repeat(10));

// same as this example
const meAsAPerson = { name: "Miro" };
meAsAPerson.name = "Kiro";

console.log(meAsAPerson);

console.log("-".repeat(10));

console.log(partsWithQuattro);
console.log(partsWithoutQuattro);

// this two rows are the same
const a = ["1", "2", "3"].map((number) => ({ number }));
const b = ["1", "2", "3"].map((number) => {
  return {
    number: number,
  };
});


// sorting by 2 criteria
const people = [
  {
    name: "Alex",
    age: "25",
  },
  {
    name: "Brat",
    age: "22",
  },
  {
    name: "Alex",
    age: "19",
  },
  {
    name: "Brat",
    age: 18,
  },
];

const sortedPeople = people
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age);
sortedPeople.map((x) => console.log(x));
