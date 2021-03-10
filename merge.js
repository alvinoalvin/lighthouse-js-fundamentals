function merge(str1, str2) {
  let greaterLength = str1.length
  let mergedArr = []

  if (str1.length < str2.length) {
    greaterLength = str2.length;
  }

  for (let i = 0; i < greaterLength; i++){
    if (str2[i]) {
      mergedArr.push(str2[i])
    }
    if (str1[i]) {
      mergedArr.push(str1[i])
    }
  }
  mergedArr.sort();
  return mergedArr;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);