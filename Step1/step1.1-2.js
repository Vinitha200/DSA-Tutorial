//step1.1   Think you to know

//user input and output:
//let x = prompt("Enter the x value")
//let y = prompt("Enter the y value")

//console.log("Values are"+ x,y)

//Datatype -theory

//if-else statement
function ifelse(age) {
    return age >= 20 ? "You can vote" : "you cannot vote";
}


//Switch Statement
function SwitchStatement(date) {
    switch (date) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wedenday"
            break;
        case 4:
            return "Thusday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        case 7:
            return "Sunday"
            break;
        default:
            return null        
    }
}

//console.log(SwitchStatement(2))

//for loop
for(let i=0;i<3;i++){
    console.log(i)
}

function Pattern (n){
//Step - 1.2 : Pattern
// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *

let string = "";
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
           string += "*"
    }
    string += "\n";
}

console.log(string)
// Example 2:
// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

let string1 =""
for(let i=0;i<n;i++){
    for(let j=0; j<=i ;j++){
        string1 += "*"
    }
    string1 += "\n";
}
console.log(string1)

// Example 3:
// Input Format: N = 3
// Result: 
// 1
// 1 2 
// 1 2 3
let string2 =""
for(let i=1;i<=n;i++){
    for(let j=1; j<=i ;j++){
        string2 += j
    }
    string2 += "\n";
}
console.log(string2)

// Example 4:
// Input Format: N = 3
// Result: 
// 1
// 2 2 
// 3 3 3

let string3 =""
for(let i=1;i<=n;i++){
    for(let j=1; j<=i ;j++){
        string3 += i
    }
    string3 += "\n";
}
console.log(string3)

// Example:5
// Input Format: N = 3
// Result: 
// * * *
// * * 
// *

let string4 =""
for(let i=0;i<=n;i++){
    for(let j=n; j>i ;j--){
        string4 += "*"
    }
    string4 += "\n";
}
console.log(string4)

// Example:6
// Input Format: N = 3
// Result: 
// 1 2 3
// 1 2
// 1
let string5 =""
for(let i=0;i<=n;i++){
    for(let j=n; j>i ;j--){
        string5 += n-j+1
    }
    string5 += "\n";
}
console.log(string5)

// Example:7
// Input Format: N = 3
// Result: 
//   *  
//  *** 
// ***** 

let string6 =""
for(let i=0;i<=n;i++){
    for(let j=0; j<=n-i-1 ;j++){
        string6 += " "
    }
    for(let j=0; j<2*i+1 ;j++){
        string6 += "*"
    }
    
    
    for(let j=0; j<=n-i-1 ;j++){
        string6 += " "
    }
    string6 += "\n";
}
console.log(string6)

let string7 =""
for(let i=0;i<=n;i++){
    for(let j=0; j<=i ;j++){
        string7 += " "
    }
    for(let j=0; j<2*n-(2*i+1) ;j++){
        string7 += "*"
    }
    
    
    for(let j=0; j<=i ;j++){
        string7 += " "
    }
    string7 += "\n";
}
console.log(string7)

}

//Pattern(5)

//Diamond Star Pattern
function pyramid (n){
    let str=""
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
             str+=" "
        }
        for(let j=0;j<2*i+1;j++){
            str+="*"
       }
       for(let j=0;j<n-i-1;j++){
        str+=" "
   }
   str+="\n"
}
   return str
}

function inverted_pyramid(n){
  
    let string7 =""
    for(let i=0;i<=n;i++){
        for(let j=0; j<=i ;j++){
            string7 += " "
        }
        for(let j=0; j<2*n-(2*i+1) ;j++){
            string7 += "*"
        }
        
        
        for(let j=0; j<=i ;j++){
            string7 += " "
        }
        string7 += "\n";
    }
    return string7
}

console.log(pyramid(5))
console.log(inverted_pyramid(5))


// Input Format: N = 3
// Result: 
// 1
// 01
// 101

function binary(n){
    let str = ""
    for(let i=0;i<=n;i++){
        for(let j=0;j<=i;j++){
            str+="*"
        }
        str+="\n"
    }
    return str
}
console.log(binary(5))