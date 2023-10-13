//Sort
//2.1 Selection Sort
//ip 13,46,24,52,20,9 --> 9,13,20,24,46,52

function Selection (arr,n){
  for(let i=0;i<=n-2;i++){

    let min = i //index
    console.log(i)
    for(let j=i;j<=n-1;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
   
   //swap arr[i],arr[min]
   let temp = arr[i]
   arr[i]=arr[min]
   arr[min]=temp
  }
return arr
}

console.log(Selection([4,2,3,1],4)) //Time complexity O(n^2)

//Bubble sort
function Bubble (arr,n){
    for(let i=n-1;i>=1;i--){
        var checkSorted = 0
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]) {
                var temp = arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp
                checkSorted = 1
        }
    }
    if(!checkSorted){break;}
}
return arr
}

console.log(Bubble([1,2,3,],3))//Time complexity O(n)

//Insertion sort  

function Insertion(arr,n){
    for(let i=0;i<n-1;i++){
        j=i
        while(arr[j-1]>arr[j]){
            var temp = arr[j];
            arr[j]=arr[j-1]
            arr[j-1]=temp
            j--
        }
    }
    return arr
}

console.log(Bubble([1,4,2,3],4))

//Merge Sort

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

console.log(mergeSort([2,1,5]))