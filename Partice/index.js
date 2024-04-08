// // function partice(arr){
// //     let n = arr.length
// //     let sum = n*(n+1)/2 
// //     let sum1=0
// //     for(let i=0;i<n-1;i++){
// //         sum1+=arr[i]
// //     }
// //     // let count = 0
// //     // let max = 0
// //     //  for(let i=0;i<n;i++){
// //     //     if(arr[i]===1){
// //     //        count ++
// //     //        max=Math.max(max,count)
// //     //     }
// //     //     else{
// //     //         count=0
// //     //     }
// //     //  }

// //     // let xor = 0

// //     // for(let i=0;i<n;i++){
// //     //     xor=xor^arr[i]
// //     // }
// //     // const map = new Map()

// //     // for(let i=0;i<n;i++){
// //     //     if(!map.has(arr[i])){
// //     //         map.set(arr[i],1)
// //     //     }
// //     //     else{
// //     //         map.set(arr[i],map.get(arr[i])+1)
// //     //     }
// //     // }

// //     // for(let i=0;i<n;i++){
// //     //     if(map.get(arr[i])==1)
// //     //       return arr[i]
// //     // }
// //     return Math.abs(sum-sum1)
// // }


// // console.log(partice([1,2,4,5]))


// //26/mar
// function lastdigit (num){
//     var count = 0
//     let res = ""
//     let n = Math.abs(num)
//     while(num >0){
//         var last = num % 10
//         num = Math.floor(num /10)
//         count++
//         console.log(last)
//         res = res + last
//     }

//     if(res==n){
//         return "Palindrome"
//     }
//     else{
//         return "Not a palindrome"
//     }
   
// }

// console.log(lastdigit(123))//f
// console.log(lastdigit(111))//t

// function arm (num){
//     var res = 0
//     const abs_num = Math.abs(num)

//     while(num!=0){
//      var last = num % 10
//      num = Math.floor(num/10)
//      res= res + last ** 3
//     }

//     if(abs_num == res){
//         return "Armstring"
//     }
//     else{
//         return "Not Armstring"
//     }
   
// }

// console.log(arm(371))
// console.log(arm(35))

// function dividor (num){

//     let arr = []

//     for(let i=0;i<=num;i++){
//         if(num%i===0){
//             arr.push(i)
//         }
//     }
//     return  arr
// }

// console.log(dividor(36))

// function gcd (a,b){
//     while(a>0 && b>0){
//         if(a>b){
//             a=a%b
//         }
//         else{
//             b=b%a
//         }
//     }

//     return a===0 ? b : a
// }

// console.log(gcd(20,40))
// console.log(gcd(9,12))

// // var count = 0

// // function repeatName (){
  
// //     if(count===4) return 
// //     console.log(count)
// //     count++
// //     repeatName()
  
// // }

// // repeatName()

// function Name (n){
  
//     if(n===0) return 0

//     return n+Name(n-1)

 
// }

// console.log(Name(3))

// function reverse_recursion(arr){
//     let left = 0
//     let right = arr.length-1

//     function rev (left,right,arr){

//         if(left>=right) return


//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp

//         rev(left+1,right-1,arr)
//     }

//     rev(left,right,arr)
//     return arr
// }

// console.log(reverse_recursion([1,2,3]))

// function fib (n){

//    if(n<=1) return n

//    return fib(n-2)+fib(n-1)
// }

// console.log(fib(3))

// //O(n)

// function fib_n (n){

// let arr = [0,1]

// for(let i=2;i<=n;i++){
//     arr.push(arr[i-2]+arr[i-1])
// }
// return arr[n]
//  }
 
//  console.log(fib_n(3))

//  function selection (arr){

//     let n = arr.length

//     for(let i=0;i<=n-2;i++){
//         let min = i
//         for(let j=i;j<=n-1;j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }

//     let tmp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = tmp
//     }
//     return arr

//  }

//  console.log(selection([8,6,7,4]))


// function mergeSort (arr){
//     const half = arr.length/2

//     if( arr.length < 2) return arr

//     let left = arr.splice(0,half)

//     return merge(mergeSort(left),mergeSort(arr))
// }

// function merge (left,right){
//     console.log("merge123",left,right)

//     let arr_new = []

//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             arr_new.push(left.shift())
//         }
//         else{
//             arr_new.push(right.shift())
//         }
//     }

//    return  [...arr_new, ...right ,...left  ]
   
// }

// // let res = mergeSort([5,3,9,1])

// // let largets = res.slice(-1)
// // for(let i = 0 ;i<res.length;i++){

// //     if(res[i]!=)
// // }

// function largest (arr){
//     let max = arr[0]
//     let smax = Number.MIN_VALUE
//   for(let i=0;i<arr.length;i++){

//     if(arr[i] > max){
//          smax = max
//          max = arr[i]
//     }
//     else if(arr[i] < max && arr[i] > smax){
//         smax=arr[i]
//     }
//   }

//   return [max,smax]
// }

// console.log("largest1",largest([5,3,9,1]))

// function deplicate (arr){

//     const filter = arr.filter((item,index)=>{
//         return arr.indexOf(item) === index
//     })

//     console.log("filter",filter)
//     return [...new Set (arr)]
// }

// console.log(deplicate([1,1,2,3,3,3,3,5,6]))

// function leftrotate (arr){
//     let first  = arr[0]

//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i+1]
//     }

//     arr[arr.length-1] = first

//     return arr
// }


// console.log(leftrotate([1,2,3,4]))

// function move0 (arr){
//  let arr_num = []
//  let arr_zero = []

//  for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         arr_zero.push(arr[i])
//     }
//     else{
//         arr_num.push(arr[i])
//     }
//  }

//  return [...arr_num,...arr_zero]
// }

// console.log(move0([1,0,0,4,5,6]))

// function linerar (arr,num){

//     return arr.indexOf(arr.find((item)=> item == num))
// }

// console.log(linerar([1,2,3],3))

// function missing (arr){
 
//     let n = arr.length
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)

//     for(let i=min ;i<max;i++){
//         if(arr.indexOf(i)<0){
//             return i
//         }
//     }
// }

// console.log(missing([6,8,9]))

// function once (arr){

// let cnt = 0
// let max_len = 0
//  for(let i=0;i<arr.length;i++){
//     if(arr[i]===1){
//         cnt++
//         max_len=Math.max(cnt,max_len)
//     }
//     else{
//         cnt=0
//     }
//  }

//  return max_len
// } 

// console.log(once([1,1,2,3,3,1,1,1]))

// function subarr(arr,k){
//     let n = arr.length
//     let maxlen = 0

//     for(let i=0;i<n;i++){
//         let sum = 0
//         for(let j=i;j<n;j++){
//             sum+=arr[j]
//            if(sum===k){
//             maxlen=Math.max(maxlen,j-i+1)
//            }
//         }
//     }

//     return maxlen
// }

// console.log(subarr([3,1,2,4],6))




// function pointer_bf(arr,t){

//     let n = arr.length

//     for(let i=0;i<n;i++){

//         for(let j=i+1;j<n;j++){
//            let sum = arr[i] + arr[j]

//            if(sum === t){
//             return [i,j]
//            }

//         }
//     }
// }

// console.log("pointer_bf",pointer_bf([2,6,5,8,11],14))

// // function pointer(arr,t){
// //   arr.sort((a,b)=>a-b)
// //   let left = 0
// //   let right = arr.length-1

// //   while(left<=right){
// //     let sum = arr[left] + arr[right]

// //     if(sum === t){
// //         return [left,right]
// //     }
// //     else if(sum <t){left ++}
// //     else {
// //         right ++
// //     }
// //   }
 
// //   return "no item present"
// // }

// // console.log("pointer",pointer([2,6,5,8,11],14))


// //Callback
// // function first(){
// //     console.log("1")
// // }

// // function second(callback){
// //       setTimeout(()=>{
// //         console.log("2")
// //         callback()
// //       },0)
// // }

// // function third(){
// //     console.log("3")
// // }

// // first()
// // second(third)

// //promise with condition 

// function first(){
//     console.log("1")
// }

// function second(){
//     setTimeout(()=>{
//      console.log("2")
//     },1000)
// }

// function third(){
//     console.log("3")
// }

// function forth(){
//     console.log("4")
// }

// first()
// second()
// third()
// forth()

// function sumOfThree(...elements){
//     return new Promise((resolve,reject)=>{
//         if(elements.length>3){
//             reject("Only 3 allowed")
//         }
//         else{

//             let sum = elements.reduce((acc,curr)=>acc+curr,0)
//             resolve(sum)
//         }
//     })
// }

// function mul (...elements){
//     return elements.map((i)=>i*2)
// }

// //Normal Promise
// sumOfThree(1,2,3)
// .then((data)=>{
//   console.log("Sum is ", data);
// })
// .catch((err)=>{
//     console.error(err);
// })

// console.log("Mul",mul(1,2,3)) // Mul got executed first

// //But i want to execute sum first after that multiplty

// sumOfThree(1,2,3)
// .then((data)=>{
//   console.log("Sum is first ", data);
// })
// .then(()=>{
//     console.log("Mul is second",mul(1,2,3))
// })
// .catch((err)=>{
//     console.error(err);
// })

// //async await

// const processData = async () =>{
//     try{
//       const sum = await sumOfThree(1,2,3)
//       console.log("Sum-async 1st",sum)
//       const muli = mul(1, 2, 3)
//       console.log("mul-async 2ndst",muli)

//     }
//     catch(err){
//     console.log(err)
//     }
// }

// processData() //calling


