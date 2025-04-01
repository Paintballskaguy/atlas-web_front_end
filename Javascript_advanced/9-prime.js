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
countPrimeNumbers();
const endTime = performance.now();

// calculate and log execution time //
const executionTime = endTime - startTime;
console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);