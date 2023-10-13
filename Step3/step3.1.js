//Easy Array Question 

//Largest Element in an array
//Brute force
function Largest_Brute (arr){
    function merge(left,right){
          let sortarr=[]
          while(left.length && right.length){
            if(left[0]<right[0]){
                sortarr.push(left.shift())
            }
            else{
                sortarr.push(right.shift());
            }
          }
          return [...sortarr,...left,...right]
    }
    function mergeSort(arr){
        if(arr.length <2) return arr
        let mid = arr.length/2
        let left = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left,right)
    }
    //return Math.max(...mergeSort([...arr]))  //Math.max() is a built-in method of the Number object that returns its
   let res = mergeSort([...arr])
   return {largest:res[arr.length-1],arr:res}
}

console.log(Largest_Brute([6,1,8,1]))

//optimal
let largestElement=(arr)=>{
    let largets = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largets){
            largets = arr[i];
        }
    }
  return largets
}
console.log(largestElement([6,1,8,1]))

//2.Second largest element in an array 
//a.bruteforce
function SLargest_Brute (arr){
    function merge(left,right){
          let sortarr=[]
          while(left.length && right.length){
            if(left[0]<right[0]){
                sortarr.push(left.shift())
            }
            else{
                sortarr.push(right.shift());
            }
          }
          return [...sortarr,...left,...right]
    }
    function mergeSort(arr){
        if(arr.length <2) return arr
        let mid = arr.length/2
        let left = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left,right)
    }
    //return Math.max(...mergeSort([...arr]))  //Math.max() is a built-in method of the Number object that returns its
   let res = mergeSort([...arr])
   let larget = res[arr.length-1]
   let Secondlargest = 0
   for(let i=res.length-2;i>0;i--){
    if(res[i]!=larget){
            Secondlargest=res[i]
            break
    }
   }
   return {largest:larget,arr:res,Secondlargest:Secondlargest}
}
console.log(SLargest_Brute([6,1,8,1]))

//b.better
function SecondLargest_Better(arr){
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    let secondLargest = Number.MIN_VALUE
    for(let j=0;j<arr.length;j++){
         if(arr[j]>secondLargest && arr[j]!=largest){
            secondLargest=arr[j];
         }
    }
    return [largest ,secondLargest ]
}
console.log(SecondLargest_Better([6,1,8,1]))

//c.optimal
function secondLargest_optimal(arr){
    let largest = arr[0]
    let slargest = Number.MIN_VALUE
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            slargest = largest
            largest=arr[i]
        }
        else if(arr[i]<largest && arr[i]>slargest){
            slargest=arr[i]
        }
    }
    return{largest : largest,slargest:slargest};
}

function secondSmallest_optimal(arr){
    let smallest = arr[0]
    let sSmallest = Number.MAX_VALUE
    for(let i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            sSmallest = smallest
            smallest=arr[i]
        }
        else if(arr[i]>smallest && arr[i]<sSmallest){
            sSmallest=arr[i]
        }
    }
    return {smallest : smallest,sSmallest:sSmallest };
}

console.log(secondLargest_optimal([6,1,8,1]))
console.log(secondSmallest_optimal([6,1,8,1]))

//3.Check whether array is sorted

function checkSorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=arr[i-1]){

        }
        else{
            return false
        }
    }
  return true
}

console.log(checkSorted([2,3,9,4]))

//4.Remove duplicate item from array size of array
//a.bruteforce
function removeDuplicate_brute(arr){
    let newset = new Set()
    for(let i=0;i<arr.length;i++){
        newset.add(arr[i])
    }
  return {arr:[...newset],index:newset.size}
}

console.log(removeDuplicate_brute([1,2,2,1,3,2,3,1]))
//b.optimal
function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
  
  const arr = [1, 1, 2, 2, 2, 3, 3];
  const k = removeDuplicates(arr);
  
  console.log("The array after removing duplicate elements is:");
  for (let i = 0; i < k; i++) {
    console.log(arr[i]);
  }

//5.Left Rotate the array by one place
function RotateByOne(arr){
    let temp=arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp 
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+' ')
    }
    //return arr
}
RotateByOne([1,2,3,4,5])

//6.Left Rotate the array by D place
//a.bruteforce
function RotateByD(arr,d){
    let n=arr.length
    let temp = []
    for(let i=0;i<d;i++){
       temp.push(arr[i])
    }
    for(let i=d;i<n;i++){
        arr[i-d]=arr[i]
    }
    let j=0
    for(let i=n-d;i<n;i++){
        arr[i]=temp[j]
        j++
    }
    return arr
}
console.log(RotateByD([1,2,3,4,5],2))

//7.Move all zeros to end of array
//ip [1,2,0,0,5]-->[1,2,5,0,0]
//a.brute force
function MoveZero_brute(arr){
    let n = arr.length
    let nonZero = []
    let Zero = []
    for(let i=0;i<n;i++){
        if(arr[i]!=0){
           nonZero.push(arr[i])
        }
        else{
          Zero.push(arr[i])
        }
    }
    return [...nonZero,...Zero]
}

console.log(MoveZero_brute([0,1,0,3,12]))

//b.optimal
function MoveZero_optimal(arr){
    var n =arr.length
    var j=-1
    for(let i=0;i<n;i++){
        if(arr[i]===0){
            j=i
            break;
        }
    }

    for(let i=j+1;i<n;i++){
        if(arr[i]!=0){
            var temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            j++
        }
    }
    return arr
}

console.log(MoveZero_optimal([0,1,0,3,12]))

//8.Liner Search
//ip [6,7,8,4,1] num= 4 ---> 3
function Linerar(arr,num){
    let n = arr.length
    
    for(let i=0;i<n;i++){
        if(arr[i]===num){
            return i
            //break
        }
    }
    return -1
}

console.log(Linerar([6,7,8,4,1,4,4],4))

//9.Union of 2 sorted array
//a.brute force
function Union_brute(arr1,arr2){
    let set = new Set()
    let newarr = [...arr1,...arr2]
    for(let i=0;i<newarr.length;i++){
        set.add(newarr[i])
    }
    return [...set]
}

console.log(Union_brute([1,2,1,2,3],[2,4,5,5]))
//b.optimal---check in video

//10.Find Missing no in array
function missing_brute(arr){
 for(let i=1;i<arr.length;i++){
     //1 to n 
     var flag =0
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]==i){
            flag=1
           break
        }
    }
    if(flag == 0){
        return i
    }
       
 }
}
console.log(missing_brute([1,2,4,5]))

function missing_optimal(arr){
    let n = arr.length
    let sum = (n*(n+1))/2
    let sum1 = 0
    for(let i = 0 ;i<n-1;i++){
        sum1+=arr[i]
    }
    return sum-sum1
}
console.log(missing_optimal([1,2,4,5]))

//11.Maximum consective ones
function MaxConsective(arr){
    var max = 0
    var count =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++
            max = Math.max(count,max)
        }
        else{
            count=0
        }
    }
    return max
}

console.log(MaxConsective([1,1,0,1,1,1,1,0,1,1]))

//12. Find the number that appears once and others are twice
//[2,2,1] --> 1

function appears (arr){
    const hashMap = new Map();
    for(let i=0;i<arr.length;i++){
        if(hashMap.has(arr[i])){
            hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
            
        }
        else{
            hashMap.set(arr[i],1);
        }
    }
    console.log(hashMap)
   for(let i=0;i<arr.length;i++){
     if(hashMap.has(i) && hashMap.get(i) == 1){
       
        return i
     }
   }
  
}

console.log(appears([4,1,2,1,2]))

//b.optimal
function appears_optimal(arr){
    var xor = 0
    for(let i = 0;i<arr.length;i++){
        xor = xor ^ arr[i];
    }
    return xor
}
console.log(appears_optimal([2,2,1,1,3,4,4]))

//13.Longest subarray with given sum(+ve)
function Longest_brute (a,k){
let n = a.length; 

let len = 0;
for (let i = 0; i < n; i++) { 
    let s = 0;
    for (let j = i; j < n; j++) { 
        s += a[j];
        if (s === k)
            len = Math.max(len, j - i + 1);
    }
}
return len;
}



console.log(Longest_brute([2,3,5],5))

