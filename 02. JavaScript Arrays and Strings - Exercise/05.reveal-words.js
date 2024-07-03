function revealWords(specialWords, template) {
    let finalSentence = template;
    specialWords.split(", ").forEach((word) => {
        const searchValue = "*".repeat(word.length);
        finalSentence = finalSentence.replace(searchValue, word);
    });
    console.log(finalSentence);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
