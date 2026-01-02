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
  let count = {};
  for (let n of num) {
    count[n] = (count[n] || 0) + 1;
  }
  return count;
}

//Find second largest number in an array
function findSecondLargestNumer(num) {
  let n = num.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (num[j] < num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
      }
    }
  }
  return [...new Set(num)].length >= 2 ? num[1] : null;
}

// Check if two strings are anagrams
const checkAnagram = (str1, str2) => {
  //For str1
  let split1 = [];
  for (let s1 of str1) {
    split1.push(s1);
  }
  let n1 = split1.length;
  for (let i = 0; i < n1 - 1; i++) {
    for (let j = 0; j < n1 - 1 - i; j++) {
      if (split1[j].charCodeAt(0) < split1[j + 1].charCodeAt(0)) {
        [split1[j], split1[j + 1]] = [split1[j + 1], split1[j]];
      }
    }
  }
  let join1 = split1.reduce((str, a) => {
    return str + "" + a;
  }, "");

  //For str2
  let split2 = [];

  for (let s2 of str2) {
    split2.push(s2);
  }
  let n2 = split2.length;
  for (let i = 0; i < n2 - 1; i++) {
    for (let j = 0; j < n2 - 1 - i; j++) {
      if (split2[j].charCodeAt(0) < split2[j + 1].charCodeAt(0)) {
        [split2[j], split2[j + 1]] = [split2[j + 1], split2[j]];
      }
    }
  }

  let join2 = split2.reduce((str, a) => {
    return str + "" + a;
  }, "");

  //check anagram
  return join1 == join2;
};

//Capitalize first letter of every word in a string
const capitalizeFirstLetter = (str) => {
  let words = [];
  let word = "";

  for (let s of str) {
    if (s !== " ") {
      word += s;
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0].charCodeAt(0) >= 97 && words[i][0].charCodeAt(0) <= 122) {
      words[i] =
        String.fromCharCode(words[i][0].charCodeAt(0) - 32) + words[i].slice(1);
    }
  }
  return words.reduce((str, a) => {
    return str + " " + a;
  }, "");
};

//Count number of vowels in a string
const countVowels = (str) => {
  let splitStr = [];

  //Split the string
  for (let s of str) {
    splitStr.push(s);
  }

  let count = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (
      splitStr[i] == "a" ||
      splitStr[i] == "e" ||
      splitStr[i] == "i" ||
      splitStr[i] == "o" ||
      splitStr[i] == "u"
    ) {
      count++;
    }
  }
  return count;
};

//Find factorial using recursion
const findFactorialWithRecursion = (num) => {
  if (num == 0 || num == 1) return 1;

  return num * findFactorialWithRecursion(num - 1);
};

// Generate random number between two numbers
const generateRandomNumber = (max, min) => {
  return Math.random() * (max - min) + min;
};

// Write a function that takes an array of integers and returns the number of even and odd numbers.
const evenOddCount = (arr) => {
  let evenCount = 0;
  let oddCount = 0;

  arr.forEach((num) => (num % 2 == 0 ? evenCount++ : oddCount++));

  return {
    evenCount,
    oddCount,
  };
};

//Build a function that manually reverses a string using a loop.
const reverseString = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

//Return an array that contains Fizz for number divisible by 3 and Buzz for number divisible by 5 and Prime for a prime number

//Check if a number is prime
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }

  return true;
};

const fizzBuzzPrime = (num1, num2) => {
  let res = [];
  for (let i = num1; i <= num2; i++) {
    if (i % 3 == 0) {
      res.push("Fizz");
    } else if (i % 5 == 0) {
      res.push("Buzz");
    } else if (isPrime(i)) {
      res.push("Prime");
    } else {
      res.push(i);
    }
  }
  return res;
};

// Check if a string is a palindrome after removing spaces and ignoring case.
const isPalindrome = (str) => {
  return (
    str.replace(/\s/g, "").toLowerCase().split("").reverse().join("") ===
    str.replace(/\s/g, "").toLowerCase()
  );
};
//Optimized code
const isPalindromeOptimized = (str) => {
  let cleaned = str.replace(/\s/g, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//Split an array into subarrays of a given size.
const chunkArray = (arr, n) => {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i + n));
    i += n;
  }
  console.log(res);
};

//Write a function that counts all items, including those in nested arrays.
const deepCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += arr[i].length;
    }
    count += i;
  }
  console.log(count);
};
deepCount([1, [2, 3], [4, [5]]]);

//Print numbers from 1 to 10
const printTenNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

printTenNumbers();

//Print even numbers from 1 to 50
const printEvenNumbers = () => {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

printEvenNumbers();

//Sum of numbers from 1 to n
const sumOfNumbers = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumOfNumbers(2));

// Factorial of a given number
const factorial = (n) => {
  if (n == 0) return 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(5));

// Check prime number
const checkPrime = (n) => {
  let isPrime = true;
  if (n == 1) console.log(`${n} is neither prime nor composite number`);

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }
};

checkPrime(2);

//Find largest of three numbers
const findLargest = (n1, n2, n3) => {
  let max = n1;
  if (n2 > max) {
    max = n2;
  }
  if (n3 > max) {
    max = n3;
  }
  return `${max} is the largest number`;
};

console.log(findLargest(3, 6, 9));

// Swap two variables without using a third variable
const swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("a", a);
  console.log("b", b);
};

swap(5, 6);

//Reverse a string

const reverseStr = (str) => {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

reverseStr("Hello");

// Check if a string is a palindrome
const palindromeStr = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr === str ? "Palindrome" : "Non Palindrome";
};

console.log(palindromeStr("rar"));

//Count vowels in a string
const countVowelsInString = (str) => {
  //Remove whitespaces
  let cleanedStr = str.replace(/\s/g, "");
  let lowerStr = "";
  let vowels = 0;
  //Convert to lowerCase
  for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i].charCodeAt() >= 65 && cleanedStr[i].charCodeAt() <= 90) {
      lowerStr += String.fromCharCode(cleanedStr[i].charCodeAt() + 32);
    } else {
      lowerStr += cleanedStr[i];
    }
  }
  //Count the vowels
  for (let j of lowerStr) {
    if (j == "a" || j == "e" || j == "i" || j == "o" || j == "u") {
      vowels++;
    }
  }
  console.log(vowels);
};

countVowelsInString("aeiou");

//Find the maximum and minimum number in an array.
const maxMinArray = (arr) => {
  let max = arr[0];
  let min = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max: max, min: min };
};

console.log(maxMinArray([0, 2, 3, 8, 2]));

//Find the sum of all elements in an array
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));

//Count the number of even and odd numbers in an array.
const countEvenOdd = (arr) => {
  let even = 0;
  let odd = 0;
  for (let n of arr) {
    if (n % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return {
    evenCount: even,
    oddCount: odd,
  };
};

console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 10]));

//Reverse an array
const revArr = (arr) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};
revArr([1, 2, 3, 4, 5]);

//Check if an element exists in an array
const checkArr = (arr, e) => {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] === e) {
      return true;
    }
    i++;
  }
  return false;
};
console.log(checkArr([1, 2, 3, 4, 5], 2));

//Remove duplicates from an array
const removeDuplicate = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      res[res.length] = arr[i];
    }
  }
  return res;
};
console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 5]));

//Merge two arrays and sort them
const mergeSort = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res[res.length] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    res[res.length] = arr2[j];
  }
  //Bubble sort
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        let temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }
  return res;
};
console.log(mergeSort([1, 5, 3, 2, 6], [0, 0]));

//Print fibonacci sequence from 1 to n

const fibonacci = (n) => {
  if (n < 1) return;
  let res = [0, 1];
  for (let i = 2; i <= n; i++) {
    let next = res[i - 1] + res[i - 2];
    res.push(next);
  }
  return res;
};

console.log(fibonacci(10));

//Check if a given number is an armstrong number
const armstrongNumber = (n) => {
  let digits = n.toString().split("").map(Number);
  let power = digits.length;
  let res = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return n == res ? "Armstrong" : "Not Armstrong";
};
console.log(armstrongNumber(371));

//GCD of two numbers
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log(gcd(36, 60));

//LCM of two numbers
const calculateGCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / calculateGCD(24, 36);
};

console.log(lcm(24, 36));
