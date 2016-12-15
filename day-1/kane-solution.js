var sum = 0

var summation = function () {
  for (i=0;i<1000;i++) {
   if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
      }
    }
  return sum
  }

console.log(summation ())
