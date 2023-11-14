function sort_char(str){
    const map = new Map()
    for(let i=0;i<str.length;i++){
        if(!map.has(str[i])){
            map.set(str[i],1)
        }
        else{
            map.set(str[i],map.get(str[i])+1)
        }
    }
    console.log(map)
    //sort map
    const sortedMap = [...map.entries()].sort((a,b)=>b[1]-a[1])

    console.log(sortedMap)
    let sortedStr = '';
    for (const [char, count] of sortedMap) {
        sortedStr += char.repeat(count);
    }

    return sortedStr;

}
console.log(sort_char("tree"))

//2.Max nested depth of the parathesis
function maxdepth(s){
  let count=0
  let depth=0
  for(let i=0;i<s.length;i++){
    if(s[i]==='('){
        count+=1
        depth=Math.max(depth,count)
    }
    else if(s[i]===')'){
        count-=1
    }
  }
  return depth
}

console.log(maxdepth("(1+(2*3)+(((8))/4))+1"))

//3.Roman Number to integer
function roman(s){
    var map ={I:1,V:5,X:10,L:50,C:100,D:500,M:1000} //this is object not map
    var sum = 0
 
    for(let i=0;i<s.length;i++){
        if(map.hasOwnProperty(s[i])){
          let value = map[s[i]]
        //   console.log(map[s[i]])
          sum+=value
          // Handle subtractive notation (e.g., IV, IX, XL, XC, etc.)
          if (i > 0 && value > map[s[i - 1]]) {
            sum -= 2 * map[s[i - 1]]; // Subtract twice the previous value
        }
        }
    }
    return sum
}

console.log(roman("IV"))
console.log(roman("VI"))




//create all substring (general)
function Beauty(str){
    let n = str.length
    var max = Number.MIN_VALUE
    var min = Number.MAX_VALUE
    let arr = []
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            const substr = str.substring(i, j + 1); //this is string not an array 
            arr.push(substr)
        }
    }
   console.log(arr)
}

Beauty("aabcb")


function Character_count(str){
let charCount = {}

for(let char of str){
    charCount[char] ? charCount[char]++ : charCount[char]=1
}
console.log(charCount)
}
Character_count("aabcb")

//6.Sum of Beauty of All substring
function getBeauty(str) {
    let beauty = 0;
    let charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Assuming beauty is calculated as the sum of squared frequencies
    for (let count of Object.values(charCount)) {
      beauty += Math.pow(count, 2);
    }
  
    return beauty;
  }
  
  function totalBeauty(str) {
    let total = 0;
    let n = str.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let substring = str.substring(i, j + 1);
        total += getBeauty(substring);
      }
    }
  
    return total;
  }
  
  const beautySum = totalBeauty("aabcb");
  console.log(beautySum);
  
//7.Reverse words in string 
function reverseeord(str){
   
    var arr = str.split(' ')
    let n = arr.length
    console.log(arr)
    let res = ""

    for(let i=n-1;i>=0;i--){
        res+=arr[i]+" "
    }
    return res

}

console.log(reverseeord("the sky is blue"))



//HARD

//1.Minimum Add to make parentheses valid
function parentheses_valid(str){
  let open = 0,close=0
  for(let i=0;i<str.length;i++){
    if(str[i]==='('){
      open++
    }
    else{
      open ? open-- : close++
    }
  }
  return open+close
}

console.log(parentheses_valid("()))"))
console.log(parentheses_valid("())))"))
console.log(parentheses_valid("((("))

//2.Count ans say
function CountSay(n){
  let str = "1"
  for(let i=1;i<n;i++){
    let strArr = str.split(' ')
    str=''
    let count=0

    for(let j=0;j<strArr.length;j++){
      if(strArr[j]!==strArr[j+1]){
        str += count+strArr[j]
        count=1
      }
      else{
        count++
      }
    }
  }
  return str
}

console.log(CountSay("4"))

let arr = "abcd"
const res = arr.split('').findIndex((x)=>x==='c')
console.log(res)

//3.First occurance of a pattern in text 
//text="abcdecd" path="cd" op:2

function occurance(text,path){
  const index = text.indexOf(path);
  console.log(`The first occurrence is at position ${index}`);
}

occurance("abcdedd","cd")

//4.Rabin Karp(Reapt string till it matchs patters)

function Reapt(text,pattern){
  let num = Math.ceil(pattern.length/text.length)

  if(text.repeat(num).includes(pattern)){
    return num
  }

  if(text.repeat(num+1).includes(pattern)){
    return (num+1)
  }

  return 1
}

console.log(Reapt("abcd","cdabcdab"))

//5. Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// function ZFunction(a,b){
// //   const index = a.indexOf(b)
// //  console.log(index)

//   let str = ""
//   for(let i=0;i<b.length;i++){
//     if()
//   }

// }
// ZFunction("sadbutsadsad","sad")
// ZFunction("leetcode","leeto")

var shortestPalindrome = function(s) {
  let len = s.length;
  let rev = s.split('').reverse().join('');

  for(let i = 0; i < len; i++) {
      if(rev.slice(i) == s.slice(0, len - i)) {
          return rev.slice(0, i) + s;
      }
  }

  return "";
};
console.log(shortestPalindrome("abcd"))
