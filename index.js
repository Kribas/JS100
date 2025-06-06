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

//Capitalize first letter of every word in a string
const capitalizeFirstLetter = (str) => {
  let words = []
  let word = ''
  
  for(let s of str) {
      if(s!== " ") {
          word+=s
      } else {
          if(word.length > 0) {
              words.push(word)
              word = ''
          }
      }
  }
  
  if(word.length > 0) {
      words.push(word)
  }
  
  for(let i=0; i<words.length; i++) {
    if(words[i][0].charCodeAt(0)>=97 && words[i][0].charCodeAt(0)<=122) {
        words[i] = String.fromCharCode(words[i][0].charCodeAt(0) - 32) + words[i].slice(1)
    }
  }
  return words.reduce((str,a) => {return str + ' ' + a }, '')
}

//Count number of vowels in a string
const countVowels = (str) => {
  let splitStr = []
  
  //Split the string
  for(let s of str) {
      splitStr.push(s)
  }
  
  let count = 0
  for(let i=0; i<splitStr.length; i++) {
      if(splitStr[i] == 'a' || splitStr[i] == 'e' || splitStr[i]  == 'i' || splitStr[i] == 'o' || splitStr[i] == 'u') {
          count++
      }
  }
  return count
}

//Find factorial using recursion
const findFactorialWithRecursion = (num) => {
  if(num == 0 || num == 1) return 1
  
  return num * findFactorialWithRecursion(num - 1)
}

// Generate random number between two numbers 
 const generateRandomNumber = (max,min) => {
    return Math.random() * (max - min) + min
}

// Write a function that takes an array of integers and returns the number of even and odd numbers.
const evenOddCount = (arr) => {
  let evenCount = 0
  let oddCount = 0

  arr.forEach(num => (num % 2 == 0 ? evenCount++ : oddCount++))

  return {
    evenCount,
    oddCount
  }
}


//Build a function that manually reverses a string using a loop.
const reverseString = (str) => {
  let res = ''
  for(let i=str.length - 1; i>=0; i--) {
    res+=str[i]
  }
  return res
}

//Return an array that contains Fizz for number divisible by 3 and Buzz for number divisible by 5 and Prime for a prime number

//Check if a number is prime
const isPrime = (n) => {
  if(n < 2) return false
  for(let i=2; i<=Math.sqrt(n); i++) {
    if(n % i == 0) return false
  }

  return true
}


const fizzBuzzPrime = (num1, num2) => {
  let res = []
  for(let i=num1; i<=num2; i++) {
    if(i % 3 == 0) {
      res.push('Fizz')
    } else if(i % 5 == 0) {
      res.push('Buzz')
    } else if(isPrime(i)) {
      res.push("Prime")
    } else {
      res.push(i)
    } 
  }
  return res
}

// Check if a string is a palindrome after removing spaces and ignoring case.
const isPalindrome = (str) => {
  return str.replace(/\s/g, '').toLowerCase().split('').reverse().join('') === str.replace(/\s/g, '').toLowerCase()
}
//Optimized code
const isPalindromeOptimized = (str) => {

  let cleaned = str.replace(/\s/g, '').toLowerCase()

  let left = 0
  let right = str.length - 1

  while(left < right) {
    if(cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

//Split an array into subarrays of a given size.
const chunkArray = (arr, n) => {
  let res = []
  let i=0
  while(i < arr.length) {
    res.push(arr.slice(i, i+n))
    i+=n
  }
  console.log(res)
}

chunkArray([1,2,3,4,5],2)