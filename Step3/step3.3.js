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
