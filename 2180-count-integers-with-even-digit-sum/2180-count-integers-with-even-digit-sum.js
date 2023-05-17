/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;

  for(let i=2; i<=num; i++) {
    let temp = 0;
    let number = i

    // here we'll break the number into single digit and add it
    // temp value
    while(number !== 0) {
      temp += number%10;
      number = Math.trunc(number/10);
    }
    // we'll check if the added digits value is even then we'll
    // increment the count value by 1 and then temp is set to zero
    if(temp % 2 === 0) {
      count++;
    }
    temp = 0;
  }
  return count;
};

// console.log(countEven(30))