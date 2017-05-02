

// all the primes up to MAX - not including the max

function sievePrime(max) {
  let primeArr = [];
  let indexArr = [false, false];
  let counter = max - 1;
  // O(n)
  while (counter > 0) {
    indexArr.push(true);
    counter -= 1;
  }
  let i = 2;
  let sub = 2;
  // O(n ^ 2)
  while (i <= Math.sqrt(max)) {
    if (indexArr[i]) {
      sub = i * i;
      while (sub < max) {
        indexArr[sub] = false;
        sub += i;
      }
    }
    i += 1;
  }
  i = 0;
  // O(n)
  while (i < max) {
    if (indexArr[i]) {
      primeArr.push(i);
    }
    i += 1;
  }
  // total   2 O(n) + O(n ^ 2) 
  // O(n^2)
  console.log(indexArr);
  console.log(primeArr);
}

sievePrime(100);