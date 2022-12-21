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

function findUniq(arr) {
  arr.sort((one, two) => one-two);
  if (arr[0] !== arr[1]) {
    return arr[0]
  } else {
    return arr[arr.length - 1]
  }
};


function findUniq(arr) {
  arr.sort((one, two) => one-two);
  return (arr[0] !== arr[1]) ? arr[0] :
  arr[arr.length - 1]
}


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

function findOutlier(integers){
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