// Find longest word in a string
const longestWord = (str) => {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};

//Generate hash
const generateHash = (str) => {
  let splitStr = str.split(" ");
  splitStr = splitStr.map((word) =>
    word.replace(word[0], word[0].toUpperCase())
  );
  return `#${splitStr.join("")}`;
};
