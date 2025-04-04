// for loops for prime tester //
function countPrimeNumbers() {
    let count = 0;
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
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

// measure execution time // 
const startTime = performance.now();

// 100x loop counter //
setTimeout(() => {
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();

// calculate and log execution time //
console.log(`Execution time of printing countPrimeNumbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0);

// countPrimeNumbers is printing to the console even after voiding it out..... weird //