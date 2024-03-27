/* 
    Exercise 1 : maxOfTwoNumbers 
    In this exercise, create a function named maxOfTwoNumbers, It should take two numbers as i
    */

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};
console.log("Exercise 1 results:", maxOfTwoNumbers(3, 9));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThreeNumbers = (x, y, z) => {
  if (x >= y) {
    return x;
  } else if (y >= z) {
    return y;
  } else {
    return z;
  }
};
console.log("Exercise 2 results:", maxOfThreeNumbers(2, 5, 7));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

function isCharAVowel(char) {
  if (
    // this checks if the character is a vowel.
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "o" ||
    char.toLowerCase() === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log("Exersize 3 results:", isCharAVowel("a")); // this should result in true.
console.log("Exersize 3 results:", isCharAVowel("e"));
console.log("Exersize 3 results:", isCharAVowel("I"));
console.log("Exersize 3 results:", isCharAVowel("s")); // this should result false.

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

function sumArray(arr) {
  // We define a function named sumArray that takes one parameter arr, which is expected to be an array of numbers.
  // start with a value of 0
  let total = 0;
  // the loop starts with 0 and continues as long as i is less than the length of the array aka ar
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // this gets the sum of all elements in the array.
  }
  return total; // returns the calculated sum
}

const array = [10, 2, 43];
console.log("Exercise 4 result:", sumArray(array));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

function multiplyArray(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
}

const num = [2, 4, 5];
console.log("Exercise 5 Result:", multiplyArray(num)); // Output will be 40

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

//  split a string into an array of substrings
// reverses the order of elements in an array
// used to join all elements of an array into a single string

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Exercise 6 results:", reverseString("General Assembly"));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/
function longestStringInArray(arr) {
  return arr.reduce((maxLength, currentString) => {
    if (typeof currentString === "string") {
      return Math.max(maxLength, currentString.length);
    } else {
      return maxLength;
    }
  }, 0);
}

let strings = ["Justin", "General Assembly", "Rise", "Wiencek"];
console.log("Exercise 7 Result:", longestStringInArray(strings));



/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

function stringsLongerThan(array, number) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > number) {
      result.push(array[i]);
    }
  }
  return result;
}
// Testing the function
console.log("Exercise 8 Result:",stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); 
// Output: ['hello', 'morning']

