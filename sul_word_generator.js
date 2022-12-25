const fs = require("fs");

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["t", "m", "s", "k", "y"];

// for every combination of vowels and cosenants, assign it to a popular word.
// the word can start with either a vowel or consenant, but the next letter must always be the opposite.
// If the word is a single letter, it must be a vowel.
// The word should be as short as possible.
// no combinations should repeat.

/* output example:
{abandon: "a",
"ability": "e",
"able": "o",
"abortion": "u",
"about": "al",
"above": "at",
"abroad": "am",
"absence": "as",
}
 */

// create a function to pick a random vowel
function randomVowel() {
  return vowels[Math.floor(Math.random() * vowels.length)];
}

// create a function to pick a random consonant

function randomConsonant() {
  return consonants[Math.floor(Math.random() * consonants.length)];
}

function lastLetterIsVowelOrConsenant(word) {
  let lastLetter = word[word.length - 1];
  if (vowels.includes(lastLetter)) {
    return "vowel";
  } else {
    return "consonant";
  }
}

// There is likely a much smarter deterministic way to do this but whatever.

const generateSulWords = () => {
  const newWords = new Set();

  while (newWords.size < 1000000) {
    let newWord = "";

    if (Math.random() > 0.5) {
      newWord += randomConsonant();
    } else {
      newWord += randomVowel();
      if (!newWords.has(newWord)) {
        newWords.add(newWord);
      }
    }

    if (newWords.has(newWord)) {
      continue;
    }

    while (true) {
      if (lastLetterIsVowelOrConsenant(newWord) === "consonant") {
        newWord = newWord + randomVowel();
      } else {
        newWord = newWord + randomConsonant();
      }
      if (!newWords.has(newWord)) {
        newWords.add(newWord);
        break;
      }
    }
  }

  return newWords;
};

let words = generateSulWords();

words = [...words];

words = words.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

words = words.sort((a, b) => a.length - b.length);

console.log(words);

fs.writeFile("1_million_sul_words.json", JSON.stringify(words), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
