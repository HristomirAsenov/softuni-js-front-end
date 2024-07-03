function modernTimes (inputString) {
    const regex = /#[A-Za-z]+/gm;
    const matches = inputString.matchAll(regex);
    for (const match of matches) {
        console.log(match[0].substring(1));
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');


// function modernTimes (inputString) {
//     const regex = /#[A-Za-z]+/gm;
//     inputString.split(/\s+/g).forEach((word) => {
//         const result = regex.exec(word.trim());
//         if(result?.length > 0) {
//             [match] = result;
//             console.log(match.substring(1));
//         }
//     })
// }