//Medium 
//1.2 sum
//a.brute
function Twosum_brute (a,t){
    let n = a.length
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if((a[i]+a[j])==t) return [true,[i,j]]
        }
    }
}
console.log(Twosum_brute([2,6,5,8,11],14))

//b.optimal
const twosum_optimal=(arr,target)=>{
    let n = arr.length
    arr.sort((a,b)=>a-b)
    let left = 0 ,right=n-1
    while(left<right){
        let sum = arr[left]+arr[right]
        if(sum==target){return {msg:"YES",index:[left,right]}}
        else if(sum<target){left++}
        else{right--}
    }
    return "NO"
 }
 
 console.log(twosum_optimal([2,6,5,8,11],14))

 //2.Sort o,1,2 in an array
 //Input: nums = [2,0,2,1,1,0] Output: [0,0,1,1,2,2]

 //a.brute --> using merge sort

 //b.better
 function sort_better(a) {
    let count0=0 ,count1=0,count2=0
    let n = a.length
    for(let i=0;i<n;i++){
        if(a[i]==0) count0++
        else if(a[i]==1) count1++
        else count2++
    }
    for(let i=0;i<count0;i++){
        a[i]=0
    }
    for(let i=count0;i<count0+count1;i++){
        a[i]=1
    }
    for(let i=count0+count1;i<n;i++){
        a[i]=2
    }
    return a
 }

 console.log(sort_better([2,0,2,1,1,0]))

 //c.optimal
 function sort__optimal(arr){
    var low =0,mid=0,high = arr.length-1,temp =0
    while(mid <= high){
        if(arr[mid]===0){
            //low,mid
            temp = arr[low];
            arr[low]=arr[mid]
            arr[mid]=temp
            low++
            mid++
        }
        else if(arr[mid]===2){
            //mid,high
            temp = arr[mid];
            arr[mid]=arr[high]
            arr[high]=temp
            high--
            mid++
        }
        else {
            mid++
        }
    }
    return  arr
 }
 console.log(sort__optimal([2,0,2,1,1,0]))

 //3.Majority Element(>n/2 times)
 //b.better 
 function Majority_better(arr){
     let n = arr.length
     const map = new Map()
     for(let i=0;i<n;i++){
         if(!map.has(arr[i])){
            map.set(arr[i],1)
         }
         else{
            map.set(arr[i],map.get(arr[i])+1)
         }
     }
     for(let i=0;i<n;i++){
        if(map.get(arr[i])>n/2){
            return [arr[i]]
        }
     }
    
 }

 console.log("Majority_better",Majority_better([2,2,3,3,1,2,2]))

 //c.optimal
function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

//4.Maximum Subarray Sum
//a.brute_force
function max_brute(arr){
    let n = arr.length
    let maxi = Number.MIN_SAFE_INTEGER; 
    let res = 0
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let sum = 0
            for(let k=i;k<=j;k++){
                sum+=arr[k]
                maxi = Math.max(maxi, sum);
            }
        }
    }
    return maxi
}

console.log(max_brute([-2,1,-3,4,-1,2,1,-5,4]))

//b.better
function max_better(arr){
    let n = arr.length
    let max = Number.MIN_VALUE

    for(let i=0;i<n;i++){
        let sum = 0
        for(let j=i;j<n;j++){
             sum+=arr[j]
             max = Math.max(sum,max)
        }
      
    }
    return max
}

console.log(max_better([-2,1,-3,4,-1,2,1,-5,4]))

//optimal
function max_optimal(arr){
    const n = arr.length
    let sum =0
    let max = Number.MIN_VALUE


    for(let i=0;i<n;i++){
        sum+=arr[i]
        max=Math.max(sum,max)
    
    if(sum<0){
        sum = 0
    }
    }
    if(max<0){
        max=0
    }

    return max
}
console.log(max_optimal([-2,1,-3,4,-1,2,1,-5,4]))

//5.Print subarray with maximum subarray sub

//6.stock and sell problem

//7.Rearrange the array in alternating positive and negative items
//a.brute
function rearrage_brute(arr){
    let pos=[],neg=[];
    let n = arr.length
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            pos.push(arr[i])
        }
        else{
            neg.push(arr[i]);
        }
    }

    for(let i=0;i<n/2;i++){
        arr[2*i] = pos[i]
        arr[2*i+1] = neg[i]
    }
    return arr
}

console.log(rearrage_brute([1,2,-3,-1,-2,3]))

//b.optimal
function rearrage_optimal(arr){
    let n=arr.length
    let ans = []
    let posIndex = 0, negIndex = 1
    for(let i=0;i<n;i++){
        if(arr[i]<0){
            ans[negIndex] = arr[i]
            negIndex+=2
        }
        else{
            ans[posIndex]=arr[i];
            posIndex+=2
        }
    }
    return ans
}
console.log(rearrage_optimal([1,2,-3,-1,-2,3]))

//varity2:If any of thr +ve,-ve no are left add them at end
//[1,2,-4,-5,3,6]--->[1,-4,2,-5,3,6]

function rearrage2_brute(arr){
    let n = arr.length
    let pos=[],neg=[]
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            pos.push(arr[i])
        }
        else{
            neg.push(arr[i])
        }
    }

    if(pos.length > neg.length){
        for(let i=0;i<neg.length;i++){
            arr[2*i] = pos[i]
            arr[2*i+1]=neg[i]
        }
        let index = neg.length*2
        for(let i= neg;i<pos.length;i++){
            arr[index]=pos[i]
            index++
     }
    }
    else{
        for(let i=0;i<pos.length;i++){
            arr[2*i] = pos[i]
            arr[2*i+1]=neg[i]
        }
        let index = pos.length*2
        for(let i= posIndex;i<neg.length;i++){
            arr[index]=neg[i]
            index++
     }
    }
    return arr
}

console.log(rearrage2_brute([1,2,-4,-5,3,6]))

//8.Next permutation

//9.Leader in an array
//a.brute
function Leader_brute(arr){
   let n = arr.length 
   let res = []
   for(let i=0;i<n;i++){
       let leader = true
       for(j=i+1;j<n;j++) {
         if(arr[j]>arr[i]){
            leader=false
            break
         }
       }
    if(leader){
        res.push(arr[i])
    }   
   }
   return res
}

console.log(Leader_brute([10,22,12,3,0,6]))

//b.optimal
function LeaderOptimal(arr) {
    let n = arr.length
    let res = []
    let max = arr[n - 1];
    res.push(arr[n - 1]);
    for(let i=n-2;i>=0;i--){
        if(arr[i]>max){
            res.push(arr[i])
            max=arr[i]
        }
    }
    return res
}

console.log(LeaderOptimal([10,22,12,3,0,6]))

//14.Count Subarray sum equal to k
function Count_Subarray(arr,k){
    let n = arr.length
    var count = 0

    for(let i=0;i<n;i++){
        let sum =0
        for(let j=i;j<n;j++){
            sum+=arr[j]
            if(sum==k){
                count++
                console.log(arr[i],arr[j])
                
            }
        }
       
    }
    return count
}

console.log(Count_Subarray([3,1,2,4],6))

//b.optimal
function Count_Subarray_optimal(arr,k){
    var n = arr.length
    let max =Math.MIN_VALUE
    let sum = 0
    
    for(let i=0;i<n;i++){
        sum += arr[i]
        if(sum===k){
            max = sum
        }
        if(sum<0){
            sum=0
        } 
    }
 
    if(max <0){
        max = 0
    }
    return max
}

console.log(Count_Subarray_optimal([3,1,2,4],6))