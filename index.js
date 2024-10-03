function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start');

  // Sleep for 3 seconds
  for(i=1; i<=10; i++) {
    await sleep(60000);
    console.log(i + ' minutes passed');
  }
  console.log('End');
}

example();
