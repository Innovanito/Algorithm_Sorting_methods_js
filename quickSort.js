function quickSort(array) {
  if (array.length === 1) {
    return array
  }

  const pivot = array[array.length - 1]
  const leftArr = []
  const rightArr = []
  //version 1
  // for (let i = 0; i < array.length - 1; i++) {
  //   if (array[i] < pivot) {
  //     leftArr.push(array[i])
  //   } else {
  //     rightArr.push(array[i])
  //   }
  // }
  //version 2
  for( const el of array.slice(0, array.length -1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el)
  }
  

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot,  ...quickSort(rightArr)]
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot]
  } else {
    return [pivot, ...quickSort(rightArr)]
  }
}

const arr1 = [11, 7, 5, 3,133, 44, 239, 9, 1]
console.log(quickSort(arr1));