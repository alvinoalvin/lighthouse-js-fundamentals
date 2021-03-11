function range(start, end, step) {
  let returnArr = [];
  if (start === undefined || end === undefined || step === undefined || (start > end) || (step <= 0)) {
    console.log(start)
    return [];
  } else {

    for (let i = start; i <= end; i += step) {
      console.log()
      returnArr.push(i);
    }
  }
  return returnArr;
}
console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));