function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

const arr1 = [11, 7, 5, 3, 9, 1]

console.log(bubbleSort(arr1));
console.log('length of arr', arr1.length);