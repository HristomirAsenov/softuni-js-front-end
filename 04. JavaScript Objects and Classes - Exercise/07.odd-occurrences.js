function oddOccurrences(sentence) {
  const occurrences = sentence.split(" ").reduce((acc, curr) => {
    const key = curr.toLowerCase();
    if (!acc.hasOwnProperty(key)) {
      acc[key] = 0;
    }

    acc[key] += 1;

    return acc;
  }, {});

  console.log(
    Object.keys(occurrences)
      .filter((key) => occurrences[key] % 2 !== 0)
      .join(" ")
  );
}
