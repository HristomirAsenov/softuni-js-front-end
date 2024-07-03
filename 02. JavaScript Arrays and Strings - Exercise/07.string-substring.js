function stringSubstring(specialWord, text) {
    const regex = new RegExp(`\\b${specialWord}\\b`, "i");
    const result =  text.match(regex);
    if(result !== null) {
        console.log(specialWord)
    } else {
        console.log(`${specialWord} not found!`);
    }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
