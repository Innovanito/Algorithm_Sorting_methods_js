const merge = (leftArr, rightArr) => {
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if (leftEl < rightEl) {
      output.push(leftEl)
      leftIndex++
    } else {
      output.push(rightEl)
      rightIndex++
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = array => {
  if (array.length <= 1) {
    return array
  }

  const middleIndex = Math.floor(array.length/2)
  const leftArr = array.slice(0, middleIndex)
  const rightArr = array.slice(middleIndex)

  console.log("The result of leftArr", leftArr);
  console.log("The result of rightArr", rightArr);

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  )
}

const arr1 = [11, 7, 5, 3,133, 44, 239, 9, 1]


console.log(mergeSort(arr1));