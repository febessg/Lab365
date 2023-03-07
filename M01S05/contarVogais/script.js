function countingVowels(words) {

    for (let word of words) {
        let counter = 0;
        if (typeof word !== "string") {
            console.error(`${word} não é uma palavra.`)
        } else {
            word = word.toLowerCase();
            for (i=0; i < word.length; i++) {
                if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
                    counter++;
                }
            } 
            console.log(`A palavra ${word} tem ${counter} vogais.`)
        }   
    }
}

countingVowels(['Carimbo', 'Pipoca', 123, 'Crypts'])