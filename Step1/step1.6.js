//Hashing

let arr =[1,2,1,3,1]
//Create a hashMap
let hash = {}
let num = 1
//Add arr item in hash
for(i=0; i<arr.length ; ++i){
    if(!hash[arr[i]]){
        hash[arr[i]] = 1
    }
    else{
        hash[arr[i]]+=1
    }
}
console.log(hash)
if(!hash[num]) {
    return
}
else{
    console.log(hash[num])
}


// Create a new hash map
const hashMap = new Map();

// Insert key-value pairs into the hash map
hashMap.set("John", 25);
hashMap.set("Jane", 23);
hashMap.set("Sam", 28);

// Access values by their keys
console.log(hashMap.get("John")); // Output: 25
console.log(hashMap.get("Jane")); // Output: 23

// Check if a key exists in the hash map
console.log(hashMap.has("John")); // Output: true
console.log(hashMap.has("Tom")); // Output: false

// Remove a key-value pair from the hash map
hashMap.delete("Sam");
console.log(hashMap.has("Sam")); // Output: false

// Get the size of the hash map
console.log(hashMap.size); // Output: 2

//2.
let s = "abcdabefca"
let str_arr = s.split('')
const Hash2 = new Map()
for(let i=0;i<str_arr.length;i++){
    if(Hash2.has(str_arr[i])){
        Hash2.set(str_arr[i], Hash2.get(str_arr[i]) + 1);
    }
    else{
        Hash2.set(str_arr[i],1)
    }
}

console.log(Hash2)


const data = { 'a': 3, 'b': 2, 'c': 2, 'd': 1, 'e': 1, 'f': 1 };

let highestCharacter = '';
let highestCount = -1;

for (const character in data) {
  if (data[character] > highestCount) {
    highestCharacter = character;
    highestCount = data[character];
  }
}

console.log(`Character with the highest occurrence: '${highestCharacter}' (Count: ${highestCount})`);