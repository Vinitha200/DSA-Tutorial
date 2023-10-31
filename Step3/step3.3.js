//Hard
//1.Pascals Triangle
function pascalTriangle_varity1(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
}
function nCr(n,r){
    let res =1
    for(let i=0;i<r;i++){
        res =res*(n-i)
        res=res/(i+1)
    }
    return res
}

console.log(pascalTriangle_varity1(5,3))

function pascalTriangle_varity2(n){
   let  ans =1
   let arr =[1]
    for(let i = 1;i<n;i++){
        ans = ans*(n-i)
        ans=ans/(i)
        arr.push(ans)
    }
  return arr
}

console.log(pascalTriangle_varity2(5))

//2.Majority of n/3 time
//brute
function Majority3time_brute(arr,N){
    let ans = []
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let count = 0
        for(let j=i;j<n;j++){
           if(arr[i]===arr[j]){
             count++
           }
        }
      if(count>Math.floor(N/3))  {
        ans.push(arr[i])
      }
    }
  return ans
}
console.log(Majority3time_brute([1,1,1,3,3,2,2,2],8))

//better
function Majority_better(arr) {
    let n = arr.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }

    const result = [];
    for (let [key, value] of map) {
        if (value > Math.floor(n / 3)) {
            result.push(key);
        }
    }

    return result;
}

console.log(Majority_better([1, 1, 1, 3, 3, 2, 2, 2]));

//optimal
function Majority_optimal(arr){
    let cnt1 =0 ,cnt2=0
    let ele1 = Number.MIN_VALUE , ele2 = Number.MIN_VALUE

    for(let i=0;i<arr.length;i++){
        if(cnt1===0 && arr[i]!==ele2){
            cnt1 = 1
            ele1 = arr[i]
        }
        else if(cnt2 === 0 && arr[i]!==ele1 ){
            cnt2 = 1
            ele2=arr[i]
        }
        else if(ele1 === arr[i]){
            cnt1++
        }
        else if(ele2 === arr[i]){
            cnt2++
        }
        else{
            cnt1--
            cnt2--
        }
    }
  let ls = []
  cnt1=0 ,cnt2=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]===ele1){ cnt1++}
    if(arr[i]===ele2){ cnt2++}
  }

  let mini = Math.floor(arr.length/3)
  if(cnt1>=mini) ls.push(ele1)
  if(cnt2 >= mini) ls.push(ele2)
  return ls
}

console.log(Majority_optimal([1, 1, 1, 3, 3, 2, 2, 2]));

//3. 3Sum
//bruete
function threeSum_brute(arr){
    let n = arr.length; 
    let res = []; // array to store results
    let set = new Set()


    for(let i=0;i<n;i++){
        for(let j=i+1 ;j<n ;j++){
            for(let k =j+1 ;k<n;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    let temp = [arr[i], arr[j], arr[k]];
                    temp.sort((a, b) => a - b);
                    const key = temp.join(','); // Create a string representation
                    if (!set.has(key)) {
                        set.add(key);
                        res.push(temp);
                    }
                }
            }
        }
    }

    //store the set in the answer:
   return res
}

console.log(threeSum_brute([-1,0,1,2,-1,-4]))

//optimal
function threeSum_optimal(arr){
    let n=arr.length
    let ans =[]
    arr.sort((a,b)=>a-b)

    for(let i=0;i<n;i++){
        if(i!==0 && arr[i]===arr[i-1] ) continue;
        let j=i+1
        let k=n-1
        while(j<k){
            let sum = arr[i]+arr[j]+arr[k]
            if(sum<0){
               j++
            }
            else if(sum >0){
                 k--
            }
            else{
             let temp = [arr[i],arr[j],arr[k]]
             ans.push(temp)
             j++
             k--
             // skip the duplicates:
             while (j < k && arr[j] === arr[j - 1]) j++;
             while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans
}

console.log(threeSum_optimal([-1,0,1,2,-1,-4]))

//4. 4Sum
function fourSum_brute(arr,target){
    let n = arr.length
    let set = new Set()

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){
                    let sum = arr[i]+arr[j]+arr[k]+arr[l]
                    if(sum===target){
                        let temp = [arr[i],arr[j],arr[k],arr[l]]
                        temp.sort((a,b)=> a-b)
                        set.add(temp) //avoid duplicate
                    
                    }
                }
            }
        }
    }

    return [...set]
}

console.log(fourSum_brute([1,0,-1,0,-2,2],0))

//optimal
function fourSum_optimal(arr,target){
    let n = arr.length
    let ans =[]
    arr.sort((a,b)=> a-b)

    for(let i=0;i<n;i++){
       if(i!==0 && arr[i]===arr[i-1]) continue

        for(let j=i+1 ;j<n;j++){
          if(j!==i+1 && arr[j]===arr[j-1]) continue

          let k=j+1 
          let l=n-1

          while(k<l){
            let sum = arr[i]+arr[j]+arr[k]+arr[l];

            if(sum==target){
                let temp = [arr[i],arr[j],arr[k],arr[l]]
                ans.push(temp)
                k++
                l--
                // skip the duplicates:
                while(k<l && arr[k]===arr[k-1]) k++;
                while(k<l && arr[l]=== arr[l+1])l--

            } 
            else if(sum < target) k++
            else l--
          }
       }
    }
    return ans
}

console.log(fourSum_optimal([1,0,-1,0,-2,2],0))

//5. Count subarray with 0 sum with XOR of k.

//6.Merge Overlapping subintervals
//brute
function Overlapping_brute(arr){
    let n = arr.length
    let ans = []

    arr.sort((a,b)=>a[0]-b[0])  
 
    for(let i=0;i<n;i++){
        let start = arr[i][0]
        let end = arr[i][1]
        if(ans.length && end <= ans[ans.length-1][1]){
            continue
        }
        for(let j=i+1;j<n;j++){
            if(arr[j][0] <= end){
                end = Math.max(end,arr[j][1])
            }
            else{
                break
            }
        }
        ans.push([start,end])
    }

  return ans
}

console.log(Overlapping_brute([[1,3],[2,6],[8,10],[15,18]]))

//optimal
function Overlapping_optimal(arr){
    let n = arr.length
    arr.sort((a,b)=>a[0]-b[0])

    let ans = [arr[0]]

    for(let i=0;i<n;i++){
        let last = ans[ans.length-1]
        let curr = arr[i]
        if(curr[0] <= last[1]){
            last[1] = Math.max(last[1],curr[1])
        }
        else{
            ans.push(curr)
        }
    }
return ans
}

console.log(Overlapping_optimal([[1,3],[2,6],[8,10],[15,18]]))

//7.Merge 2 Sort array without space
function sort_optimal(arr1,arr2){
    let n = arr1.length
    let m = arr2.length
    let left = n-1
    let right = 0

    while(left >=0 &&  right < m){
        if(arr1[left] > arr2[right]){
            [arr1[left],arr2[right]] = [arr2[right],arr1[left]]
            left-- ,right++
        }
        else{
            break
        }
    }
   arr1.sort((a,b)=> a-b)
   arr2.sort((a,b)=> a-b)
   return [[...arr1], [...arr2]]
}

console.log(sort_optimal([1,3,5,7],[0,2,6,8,9]))

function repeat_better(arr) {
    let n = arr.length;
    let repeating = -1, missing = -1;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            repeating = arr[i];
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!map.has(i)) {
            missing = i;
        }
    }

    return { repeating: repeating, missing: missing };
}


console.log(repeat_better([4,3,6,2,1,1]))

function repeat_optimal(arr) {
    let n = arr.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    let expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;
    let actualSquareSum = arr.reduce((sum, num) => sum + num * num, 0);

    let diffSum = expectedSum - actualSum;
    let diffSquareSum = expectedSquareSum - actualSquareSum;

    let missing = (diffSum + diffSquareSum / diffSum) / 2;
    let repeating = missing + diffSum;

    return { repeating: repeating, missing: missing };
}


console.log(repeat_optimal([4,3,6,2,1,1]))