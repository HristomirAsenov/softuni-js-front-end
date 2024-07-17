function createDictionary(inputArr) {
  const dictionary = {};
  for (const json of inputArr) {
    const object = JSON.parse(json);

    for (const key of Object.keys(object)) {
      dictionary[key] = object[key];
    }
  }

  const sortedDictionaryKeys = Object.keys(dictionary).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const term of sortedDictionaryKeys) {
    const definition = dictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}
