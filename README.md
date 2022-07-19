# Algorithm_Sorting_methods_js


알고리즘 정렬 방식은 여러가지가 있지만 많이 사용되는 5가지의 정렬의 개념과 빅 오 표기법 및     
javascript의 코드와 함께 실제 정렬이 되어있지 않은 array를 여러 정렬 방법으로 오름차순으로 정렬해 볼 것이다.


## 빅 오 표기법(Big-O notation)의 정의
Big-O(또는 Big-Oh) notation은 알고리즘의 시간 복잡도를 나타내는 표기법이며, O(f(n))으로 나타낸다.

버블정렬, 선택 정렬, 삽입 정렬은 모두 최악의 경우 n^2의 시간이 걸리지만 평균 시간 복잡도를 고려해 본다면 유용한 순서는 다음과 같다.

<img width="845" alt="스크린샷 2022-07-04 오후 2 11 21" src="https://user-images.githubusercontent.com/72393144/179666018-518ea703-d347-4b83-bdad-68aa96145ecf.png">
(출처: Nomad Coder)

## 1.Bubble Sort(버블 정렬)
가장 단순한 형태의 정렬 방법으로, 버블 정렬은 첫번째 원소부터 인접한 원소와 비교하며 자리를 바꾸면서 맨 끝부터 정렬하는 방식이다. 

 * 장점

  * 구현이 간단하다.

  * 데이터를 하나씩 비교하기 때문에 정밀한 비교가 가능하다.

 
* 단점

  * 데이터를 하나씩 비교하기 때문에 비교 횟수가 많아지므로 시간이 오래 걸린다.

시간 복잡도: n^2,  
공간 복잡도: n

javascript 코드
```js
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
```


결과  
(6) [1, 3, 5, 7, 9, 11]  
length of arr 6


## 2. Selection Sort(선택 정렬)
선택 정렬은 앞쪽부터 정렬하는 방식이다. 주어진 배열에서 가장 작은 최소값을 찾고 배열의 맨 앞의 값과 위치를 바꾸면서 정렬한다.

* 장점

  *구현이 간단하다.

  * 데이터를 하나씩 비교하기 때문에 정밀한 비교가 가능하다.

  * 비교하는 횟수에 비해 교환하는 횟수가 적다.

 

* 단점

  * 데이터를 하나씩 비교하기 때문에  시간이 오래 걸린다.

  * 정렬된 상태에서 새로운 데이터가 추가되면 정렬 효율이 좋지 않다.  
  


시간 복잡도: n^2,  
공간 복잡도: n

javascript 코드
  * 정렬된 상태에서 새로운 데이터가 추가되면 정렬 효율이 좋지 않다.  
```js
 function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

const arr1 = [11, 7, 5, 3, 9, 1]

console.log('result of selection sort', selectionSort(arr1));
```

결과  
result of selection sort (6) [1, 3, 5, 7, 9, 11]  



## 3. Insertion Sort(삽입 정렬)
자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 정렬한다.

* 장점

  * 입력으로 들어오는 배열의 원소가 정렬되어있을수록 속도가 빠르다.

  * 정렬된 값은 교환이 일어나지 않는다
 

* 단점

  * 삽입을 구현해야 하므로 속도가 자료구조의 영향을 많이 받는다.

  * 입력으로 들어오는 배열이 역순으로 정렬된 경우 성능이 굉장히 좋지 않다.  
  

시간 복잡도: n^2,  
공간 복잡도: n  
  
```js
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
```

결과  
result of insertion sort (6) [1, 3, 5, 7, 9, 11]  

## 4. Quick Sort(퀵 정렬)
퀵 정렬은 하나의 축(pivot)을 정해서 이 축보다 작은 값은 왼쪽에 큰값은 오른쪽에 위치시킨다.  
그리고 왼쪽과 오른쪽에 해당하는 원소들에 대해 다시 축을 각각 정하고 마찬가지로 그 안에서 작은 값은 왼쪽에 큰값은 오른쪽에 위치시킨다. 

시간 복잡도: n*log(n)
공간 복잡도: n

버젼 1과 버젼 2가 있는데, 버젼1은 for loop을 이용한 것이고, 버전2는 삼항 연산자를 이용해서 코드의 양이 더 적다.
```js
function quickSort(array) {
  if (array.length === 1) {
    return array
  }

  const pivot = array[array.length - 1]
  const leftArr = []
  const rightArr = []
  // version 1
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i])
    } else {
      rightArr.push(array[i])
    }
  }
  // version 2
  // for( const el of array.slice(0, array.length -1)) {
  //   el < pivot ? leftArr.push(el) : rightArr.push(el)
  // }
  

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
```

결과  
(9) [1, 3, 5, 7, 9, 11, 44, 133, 239]  

## 5. Merge Sort(병합 정렬)
병합 정렬은 배열을 작은 단위로 쪼개어 정렬한 결과를 합치면서 전체를 정렬하는 방식이다.  
배열을 왼쪽 절반, 오른쪽 절반으로 분할하여 최소 단위로 쪼갠 후 정렬을 진행한다.  

시간 복잡도: n*log(n)
공간 복잡도: n

```js
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
  
}

const arr1 = [11, 7, 5, 3,133, 44, 239, 9, 1]


console.log(mergeSort(arr1));
```

결과  

The result of leftArr (4) [11, 7, 5, 3]  
The result of rightArr (5) [133, 44, 239, 9, 1]  
The result of leftArr (2) [11, 7]  
The result of rightArr (2) [5, 3]  
The result of leftArr (1) [11]  
The result of rightArr (1) [7]  
The result of leftArr (1) [5]  
The result of rightArr (1) [3]  
The result of leftArr (2) [133, 44]  
The result of rightArr (3) [239, 9, 1]  
The result of leftArr (1) [133]  
The result of rightArr (1) [44]  
The result of leftArr (1) [239]  
The result of rightArr (2) [9, 1]  
The result of leftArr (1) [9]  
The result of rightArr (1) [1]  
(9) [1, 3, 5, 7, 9, 11, 44, 133, 239]  

Merge되는 과정을 보기위해 재귀함수가 호출되기 전해 분해되는 과정을 console.log로 찍었다.  
LeftArr와 RightArr로 반 씩 나누어 져서 배열의 수가 1이 될 때 까지 나눈 후 이것을 하나로 합쳐 오름차순으로 만들어 진 것을 두 눈으로 확인해보는 경험이었다.
