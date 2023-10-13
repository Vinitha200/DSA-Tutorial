//Recursion

//1.print 0-4
var count=0
function recursionEx(){
    if(count===4) return //base condition
    console.log(count)
    count ++
    recursionEx() //recursive call
}
recursionEx();

//2.print my name n times
function my_name(i,n){
    if(i>n) return 
    console.log("Vinitha")
    my_name(i+1,n)
}
my_name(1,3)

//3.print linear 1 to n
function printLinear(i,n){
   if(i>n) return
   console.log(`${i}`)
   printLinear(i+1,n)
}

printLinear(1,4)

//4.print linear n to 1
function linearnto1(i,n)
{
    if(i<1) return
    console.log(` ${i}`);
    linearnto1(i-1,n)
}
let n = 3
linearnto1(n,n)

//BackTracking
//6.print linear n to 1 (without i+1)
function oneTon (i,n){
    if(i<0) return
    oneTon(i-1,n)
    console.log(i)
}
oneTon(n,n)

//6.print linear n to 1 (without i-1)
function nto1(i,n){
    if(i>n) return 
    nto1(i+1,n)
    console.log(i)
}
nto1(1,4)

//7.Sum of n
// n=3 1+2+3=6
function sumOfn(n){
    if(n===0) return 0
    return n +sumOfn(n-1);
}

console.log(sumOfn(3))

//8.Factorial of n 
//ip 3! 3*2*1=6
function Factorial(n){
    if(n===0) return 1
    return n*Factorial(n-1)
}

console.log(Factorial(4))

function rev (arr){
var left = arr[0]
var right = arr[arr.length -1]
while(left>right){
    var temp = left
    left = right
    right = temp
    for(let i=left;i<=right;i++){
         console.log(arr[i])
    }
   
    left ++
    right --
    
}
}
rev([1,2,3])

//9.Reverse using recursion

//10.palimdrome

//11.Fibonnice number
function Fibonnice (n){
    if(n<2 )return n ;
    return Fibonnice(n-1)+Fibonnice(n-2)
}

console.log(Fibonnice(3))

