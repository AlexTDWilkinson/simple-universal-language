const fs = require("fs");

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["t", "f", "s", "k", "g", "m", "n", "b"];
const extras = ["(", ")", "<", ">", ".", " "];

const paragraph = () => {
  let paragraph = "";
  let lastLetter = "";
  while (paragraph.length < 500) {
    if (Math.random() > 0.9) {
      paragraph = paragraph + extras[Math.floor(Math.random() * extras.length)];
      continue;
    }

    if (lastLetter === "vowel") {
      paragraph =
        paragraph + consonants[Math.floor(Math.random() * consonants.length)];
      lastLetter = "consonant";
    } else {
      paragraph = paragraph + vowels[Math.floor(Math.random() * vowels.length)];
      lastLetter = "vowel";
    }
  }
  return paragraph;
};

const uniquePairs = () => {
  // create string of unique pairs of all characters

  let uniqueCharPairs = new Set();

  const characters = [...vowels, ...consonants, ...extras];

  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      uniqueCharPairs.add(characters[i] + characters[j]);
    }
  }

  uniqueCharPairs = [...uniqueCharPairs];

  let finalPairs = [];

  // make an additonal pair out of each pair of characters uniqueCharPairs

  for (let i = 0; i < uniqueCharPairs.length; i++) {
    for (let j = 0; j < uniqueCharPairs.length; j++) {
      finalPairs.push(uniqueCharPairs[i] + uniqueCharPairs[j]);
    }
  }

  // remove all pairs where two vowels or two consonants are together at any point

  finalPairs = finalPairs.filter((quad) => {
    if (
      (vowels.includes(quad[0]) && vowels.includes(quad[1])) ||
      (consonants.includes(quad[0]) && consonants.includes(quad[1])) ||
      (vowels.includes(quad[1]) && vowels.includes(quad[2])) ||
      (consonants.includes(quad[1]) && consonants.includes(quad[2])) ||
      (vowels.includes(quad[2]) && vowels.includes(quad[3])) ||
      (consonants.includes(quad[2]) && consonants.includes(quad[3]))
    ) {
      return false;
    } else {
      return true;
    }
  });

  // remove all pairs where a consonant does not follow a vowel or vice versa

  return finalPairs;
};

fs.writeFile("sul_gibberish.json", JSON.stringify(paragraph()), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});

fs.writeFile("sul_unique_pairs.json", JSON.stringify(uniquePairs()), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
