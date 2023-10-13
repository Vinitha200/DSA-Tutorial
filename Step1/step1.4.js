//Extract all digits:
function extract (n){
    let count = 0
    while(n>0){
        var lastdigit = n%10
        count ++
        n=Math.floor(n/10)
        console.log(lastdigit)
    }
}
extract(7789)

//Count digits:
function Count_digit (n){
    let count = 0
    while(n>0){
        count ++
        n=Math.floor(n/10)
    }
    return count
}
console.log(Count_digit(7789))

//Reverse Number
function Reverse_no(n){
    var res = ""
    while(n>0){
        var lastdigit = n%10
        n=Math.floor(n/10)
        res+=lastdigit
    }
    return +res
}

console.log(Reverse_no(7789))

//Check for palindrome
function palindrome (x){
 var res =0
 x=Math.abs(x)
 let dup = Math.abs(x)
 while(x!=0){
    let LD = x%10
    res = (res*10)+LD
    x=Math.floor(x/10)
 }
 return dup === res ? true :false
}

console.log(palindrome(1331))
console.log(palindrome(13))

//Armstrong Number
//ip 371 --> 3^3+7^3+1^3 = 371
function Armstrong (x){
    x=Math.abs(x)
    let dup = Math.abs(x)
    var res =0
    
    while(x!=0){
        let LD = x%10
        res = res+(LD*LD*LD)
        x=Math.floor(x/10)
    }
    return dup===res ? true :false
}

console.log(Armstrong(371))
console.log(Armstrong(407))

//Print all divisor
function Print (n){
    var arr = []
    for(let i=1;i<=n;i++){
        if(n%i === 0 ){
            arr.push(i)
        }
    }
    return arr
}
console.log(Print(36))

//Prime No
//GCD
function GCD (a,b){
    while(a>0 && b>0){
        if(a>b) {
            a=a%b
        }
        else{
         b=b%a
        }
        
    }
    return a===0 ? b : a
}

console.log(GCD(20,40))
console.log(GCD(9,12))