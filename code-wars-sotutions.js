//1 
function solution(number) {
  let sum = 0;

  if (number < 0) {
    return 0;
  }

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

/*
p: sum of all multiplies of 3 and 5 below parameter, if par negative return 0,
  if num is multiple of 3 AND 5, add it once.

e: numbers below 10 that're multiples of 3 or 5: 3, 5, 6, 9
   the sum of these multiples is 23
   
a: input number. initialize sum. iterate through num. 
   if num is less than 0, return 0
   if i%3 or i%5 == 0, increment the sum by that num
   return sum 
*/

//2
function likes(names) {
  return names.length === 0 ? "no one likes this" :
    names.length === 1 ? `${names[0]} likes this` :
    names.length === 2 ? `${names[0]} and ${names[1]} like this` :
    names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

/*
P - user inputs arary of names, we return string depending on the amount of names
    if the amount of names is greater than 3, print 2 names and a sentence
    
E - ["Max", "John", "Mark"]   -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    
D - arrays, string
A - if length = 0, return "no one likes this"
    if length = 1,`${names[0]} likes this`
    ... = 2, `${names[0]} and ${names[1]} like this`
    ... = 3, `${names[0]}, ${names[1]} and ${names[2]} like this`
    else :  = 4, `${names[0]}, ${names[1]} and ${names.length - 2} others like this` 
*/

//3
function findUniq(arr) {
  arr.sort((one, two) => one - two);
  if (arr[0] !== arr[1]) {
    return arr[0]
  }
  else {
    return arr[arr.length - 1]
  }
};


//3
// function findUniq(arr) {
//   arr.sort((one, two) => one-two);
//   return (arr[0] !== arr[1]) ? arr[0] :
//   arr[arr.length - 1]
// }


/*
P - input array of integers, output the (unique) number
E - findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
D - arrays, integers
A - arr.sort();
    if (arr[0] !== arr[1]) {
    } return arr[0]
    } else {
    return arr[arr.length - 1]
    }
*/

//4
function findOutlier(integers) {
  const even = integers.filter(element => element % 2 === 0)
  const odd = integers.filter(element => element % 2 !== 0)
  if (even.length === 1) return even[0]
  else return odd[0]
}

/*
P - given array of nums (all even or all odd, except 1)
E - [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)
A - (initialize even variable, initialize odd variable)
    let even = integers.filter(element => element % 2 === 0)
    let odd = integers.filter(element => element % 2 !== 0)
*/

//5
function moveZeros(arr) {
  let newArr = [];
  let onlyZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
    else {
      onlyZeros.push(arr[i]);
    }
  }
  return newArr.concat(onlyZeros);
}


/*
P - input array of elements, return an array with all the 0' at the end of the array
E - oveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
D - array
A - initialize new array
  - iterate though array
  - for each 0, push it to the end
  - or
  - iterate through array
  - for each num that =! 0, push into new array
  - iterate again, for each 
  - return new array
*/

//6
function duplicateCount(text) {
  let obj = {};
  let count = 0;
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (text[i] in obj) {
      obj[text[i]]++
    }
    else {
      obj[text[i]] = 1
    }
  }
  for (key in obj) {
    if (obj[key] !== 1) count++;
  }
  return count;
}


// console.log(duplicateCount("MarcyLabFellowship"))
// console.log(obj)

/*
P -  return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
E - "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
D - string, object
A - initialize empty object and a counter
  - make text toLowerCase
  - iterate through array
  - if the curr char is in the object, increment it by 1
  - if not, add the value 1
  - loop through object
  - if the letter's value is not 1, increment the count
  - return count
*/

//7
function pigIt(str) {
  let array = str.split(' ');
  let pigLatin = [];

  for (let word of array) {
    if ((/([a-zA-Z])/).test(word)) {
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }
    else {
      pigLatin.push(word);
    }
  }
  return pigLatin.join(" ");
}

/*
P - move first letter of each word to the end of the word. add "ay" to the end of the word (leave punctuation)
E - pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
D - string, array
A - split string into array, initialize empty array
  - iterate through words of array, 
  - if regex matches to only alphabets, push the first index to the end of the word and add "ay"
  - else push into new array
  - return array joined to string
*/