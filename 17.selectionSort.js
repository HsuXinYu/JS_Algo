//best O(n^2) worst O(n^2) average O(n^2)
function selectionSort(arr){
    for(i=0;i<=arr.length-2;i++){
        let minIndex=i;
        for(j=i;j<=arr.length-1;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        let temp=arr[minIndex];
        arr[minIndex]=arr[i];
        arr[i]=temp;
    }
    console.log(arr);
    return arr;
}

let test = [14, -4, 17, 6, 22, 1, -5];

selectionSort(test);