//String
//Basic

//1.Remove Outermost Paranthesis
function outmost(S) {
    let result = ''
    let level = 0
    
    for(const item of S) {
        if(item === ')') {
            level--
        }
        if(level >= 1) {
            result += item                
        }
        if(item === '(') {
            level++
        }
    }
    
    return result
}


console.log(outmost("(()())(())"))

//2.Reverse words in a string
function reverseStr(s){
    let arr = s.split(" ")
    let n = arr.length
    let new_str=""
    for(let i=n-1;i>=0;i--){
       new_str+=arr[i]+" "
    }
    return new_str
}

console.log(reverseStr("this is an amazing program"))

//3. Largest Odd number in a string
function Largest_odd(s){
    let num = parseInt(s)

    var max = 0

    if(num %2===0){
        let num_arr = s.split("")
        for(let i=0;i<num_arr.length;i++){
            const digit = parseInt(num_arr[i]);
            if (digit % 2 !== 0 && digit > max) {
                max = digit;
            }
        }
    }
    else{
       max = num
    }

    return max
}

console.log(Largest_odd("52"))
console.log(Largest_odd("4226")) //takes the initial value bcz all are even number
console.log(Largest_odd("35427"))

//4.Longest Common Prefix
function commonPrefix(str){
    if(str.length===0){
        return " "
    }

    let minlength = Math.min(...str.map((i)=>i.length))
    let prefix="";

    for(let i=0 ;i<minlength;i++){
        let char = str[0][i]
        if(str.every((s)=> s[i] == char)){
            prefix +=char
        }
        else{
            break
        }
    }
    return prefix
}

console.log(commonPrefix(["flower", "flow", "flight"]))