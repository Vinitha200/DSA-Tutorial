//Intro to stack
// Implementing a Stack: This involves creating a class or data structure that mimics the functionality of a stack, including operations like push, pop, and peek.

// Balanced Parentheses: Given a string containing only parentheses (‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’), determine if the input string is balanced or not. This problem can be solved using a stack.

// Reverse a String or Sentence: Using a stack to reverse a given string or sentence.

// Evaluate Postfix Expression: Given a postfix expression, evaluate it using a stack.

// Next Greater Element: Given an array, for each element, find the nearest greater element present to its right.

// Implementing a Min Stack: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implementing a Stack using Queues: Implement a stack using queues (either using two queues or one queue).

// Validating Stack Sequences: Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

// Implementing a Stack with Max Operation: Design a stack that supports push, pop, top, and retrieving the maximum element in constant time.

// Design a Stack with Increment Operation: Design a stack that supports the stack operations and also an increment operation, which adds a certain value to all elements in the stack up to a given index.

// Implementing a Stack: Write code to create a basic stack data structure with operations 
// like push, pop, and isEmpty.

function BasicStack(str){

    let stack = []
 
    for(let i=0;i<str.length;i++){
       let char = str[i]
       stack.push(char)
       if(stack.length>0 && char>3){
          stack.pop()
       }
     
    }
 
    return stack
 }
 
 console.log(BasicStack("abcd423"))
 
 // Balanced Parentheses: Given a string containing only parentheses (‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’),
 //  determine if the input string is balanced or not. This problem can be solved using a stack
 //  Input: "({[))}"          
 // Output: Not balanced
 // Input: "{[()()]}"
 // Output: Balanced
 
 function  checkBalance(str){
    let stack = []
 
    for(let i=0;i<str.length;i++){
      let char = str[i]
 
      if(char === '(' ||char ==='['||char ==='{'){
           stack.push(char)
      }
      else if(stack.length > 0){
         if(char === ')' && stack[stack.length-1]==='(' ||
            char === ']' && stack[stack.length-1]==='[' ||
            char === '}' && stack[stack.length-1]==='{' 
           )
 
           stack.pop()
      }
    }
 
    return stack.length === 0 ? "Balanced" : "Not Balanced"
 }
 
 console.log(checkBalance("({[))}")) 
 console.log(checkBalance("{[()()]}"))
 
 
 function  reverseString(s) {
   let stack = []
   let newstr = ""
   for(let i=0;i<s.length;i++){
       stack.push(s[i])
   }
 
   while(stack.length>0){
       newstr += stack.pop()
 
   }
 
   return newstr
 }
 
 console.log(reverseString("hello world"))