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

//5.Isomorphic String

function Isomorphic(str1,str2){
    if(str1.length !== str2.length) return false

    let map = new Map()
    let set = new Set()

    for(let i=0;i<str1.length;i++){
        let char1 = str1[i]
        let char2 = str2[i]

        if(map.has(char1)){
            if(map.get(char1)!==char2) return false
        }
        else {
            if(set.has(char2)) return false

            map.set(char1,char2)
            set.add(char2)
        }
    }
    return true
}

console.log(Isomorphic("egg","add"))

//6.check whether one string is a rotation of other

function rotate(a,b){
    if(a.length !== b.length) return false
    if(a.length===0 && b.length ===0) return true
    a=a+a
    return a.includes(b)
}

console.log(rotate("abcde","cdeab"))

//7.Check for Angram
function Angram(a,b){
    let sort_a = a.split('').sort().join('')
    let sort_b = b.split('').sort().join('')

    for(let i=0;i<sort_a.length;i++){
        if(sort_a[i]!==sort_b[i]){
             return false
        }
    }
    return true
}

console.log(Angram("CAT","ACT"))