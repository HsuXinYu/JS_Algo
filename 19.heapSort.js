//best O(n log n) worst O(n log n) average O(n log n)
let heapsize;
let arr = [15, 3, 17, 18, 20, 1, 66];

function buildMaxHeap() {
  heapsize = arr.length - 1;
  for (let i = Math.floor(heapsize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapsize && arr[l] > arr[i]) {
    //值大於父親
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapsize && arr[r] > arr[i]) {
    largest = r;
  } else {
    largest = i;
  }
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
  // console.log(i, arr);
}

function heapSort() {
  buildMaxHeap();
  //將已排好的二元樹與最後一個值交換後，整個陣列長度-1，在執行一次maxHeapify
  for (let i = arr.langth - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapsize -= 1;
    maxHeapify(0);
    console.log(i);
  }
  return arr;
}

heapSort();
console.log(arr);
