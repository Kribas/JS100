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

function countOccurences(num) {
  let count = {}
  for(let n of num) {
      count[n] = (count[n] || 0) + 1
  }
  return count
}

//Find second largest number in an array
function findSecondLargestNumer(num) {
  let n = num.length
  for(let i=0; i<n-1; i++) {
      for(let j=0; j<n-1-i; j++) {
          if(num[j] < num[j+1]) {
              [num[j], num[j+1]] = [num[j+1], num[j]]
      }
  }
}
  return [...new Set(num)].length >= 2 ? num[1] : null
}

// Check if two strings are anagrams
const checkAnagram = (str1, str2) => {
  //For str1
  let split1 = []
  for(let s1 of str1) {
      split1.push(s1)
  }
  let n1 = split1.length
  for(let i=0; i<n1-1; i++) {
      for(let j=0; j<n1-1-i; j++) {
          if(split1[j].charCodeAt(0) < split1[j+1].charCodeAt(0)) {
              [split1[j], split1[j+1]] = [split1[j+1], split1[j]]
          }
      }
  }
  let join1 = split1.reduce((str,a) => {return str+''+a}, '')
  
  //For str2
  let split2 = []
  
  for(let s2 of str2) {
      split2.push(s2)
  }
  let n2 = split2.length
  for(let i=0; i<n2-1; i++) {
      for(let j=0; j<n2-1-i; j++) {
          if(split2[j].charCodeAt(0) < split2[j+1].charCodeAt(0)) {
              [split2[j], split2[j+1]] = [split2[j+1], split2[j]]
          }
      }
  }
  
  let join2 = split2.reduce((str, a) => {return str+''+a}, '')
  
  //check anagram
  return join1 == join2
} 

console.log('INitial commit');
