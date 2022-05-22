function countPrimeNumbers() {
  let count = 0;
  for (let prime = 2; prime <= 100; prime++) {
      let isPrime = true;
      for (let div = 2; div < prime; div++) {
          if (prime % div === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          count++;
      }
  }
  return count;
}

const startTime = performance.now();

for (let j = 0; j < 100; j++) {
    setTimeout(function() {
        countPrimeNumbers();
      }, 0);
}

const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was  ${endTime - startTime} milliseconds.`);
