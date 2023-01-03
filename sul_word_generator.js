const fs = require("fs");

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["t", "f", "s", "k", "j"];

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

  while (newWords.size < 10000000) {
    let newWord = Math.random() > 0.5 ? randomVowel() : randomConsonant();

    if (!newWords.has(newWord)) {
      newWords.add(newWord);
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

// delete any single consonant words
words = words.map((word) =>
  // if the word is a single letter and it is a consonant, delete it
  word.length === 1 && !vowels.includes(word) ? "" : word
);

// if the word starts with a consonant delete it. This keeps things way easier to say when combined with the X and + and B characters.

words = words.filter((word) => {
  if (word.length === 2) return true;

  if (vowels.includes(word[0])) return true;
});

words = words.filter((word) => {
  // filter out any words that have the same vowel after a consonant

  if (word.length <= 3) return true;

  if (
    word.indexOf("ata") === -1 &&
    word.indexOf("ete") === -1 &&
    word.indexOf("iti") === -1 &&
    word.indexOf("oto") === -1 &&
    word.indexOf("utu") === -1 &&
    //

    word.indexOf("afa") === -1 &&
    word.indexOf("efe") === -1 &&
    word.indexOf("ifi") === -1 &&
    word.indexOf("ofo") === -1 &&
    word.indexOf("ufu") === -1 &&
    //

    word.indexOf("asa") === -1 &&
    word.indexOf("ese") === -1 &&
    word.indexOf("isi") === -1 &&
    word.indexOf("oso") === -1 &&
    word.indexOf("usu") === -1 &&
    //

    word.indexOf("aka") === -1 &&
    word.indexOf("eke") === -1 &&
    word.indexOf("iki") === -1 &&
    word.indexOf("oko") === -1 &&
    word.indexOf("uku") === -1 &&
    //

    word.indexOf("aja") === -1 &&
    word.indexOf("eje") === -1 &&
    word.indexOf("iji") === -1 &&
    word.indexOf("ojo") === -1 &&
    word.indexOf("uju") === -1 &&
    //

    word.indexOf("jaj") === -1 &&
    word.indexOf("jej") === -1 &&
    word.indexOf("jij") === -1 &&
    word.indexOf("joj") === -1 &&
    word.indexOf("juj") === -1

    // if the same consonant appears after a vowel, remove it
  ) {
    return true;
  }
});

words = words.filter((w) => w);

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

words = words.slice(0, 1000000);

console.log(words);

fs.writeFile("1_million_sul_words.json", JSON.stringify(words), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
