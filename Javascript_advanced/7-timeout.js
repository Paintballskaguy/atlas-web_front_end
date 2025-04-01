console.log(`Start of the execution queue`);

// timer set for the console.log to print // 
setTimeout(() => {
    console.log(`Final code block to be executed`);
}, 0);
// for loop that counts up to 100 //
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log('End of the loop printing');
