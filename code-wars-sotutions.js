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
   if i%3 or i%5 == 0, increment the sum
   return sum 
*/