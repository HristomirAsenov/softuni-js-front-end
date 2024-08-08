const asyncDemo = () => {
  Promise.resolve().then(() => console.log(1));
  setTimeout(() => console.log(2), 10);

  Promise.resolve().then(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(4));
  });

  console.log(5);
  return 6;
};

const getNumberWithDelay = async (value = 2, delay = 5000) =>
  new Promise((res) => {
    setTimeout(() => res(value), delay);
  });

const promiseDemo = () => {
  console.log(1);
  getNumberWithDelay().then((r) => console.log(r));
  console.log(3);
};

const awaitDemo = async () => {
  console.log(1);
  const secondNumber = await getNumberWithDelay();
  console.log(secondNumber);
  console.log(3);
};

// asyncDemo();
// promiseDemo();
// awaitDemo();
