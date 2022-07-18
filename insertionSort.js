function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j-1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      } else {
        break
      }
    }
  }
  return arr
}

const arr1 = [11, 7, 5, 3, 9, 1]
console.log('result of insertion sort', insertionSort(arr1));
