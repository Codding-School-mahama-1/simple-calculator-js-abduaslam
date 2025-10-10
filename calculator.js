/*
  
    SIMPLE CALCULATOR CHALLENGE
  

  Instructions for Students:
  1. Ask the user to enter:
       - First number
       - Operator (+, -, *, /, %)
       - Second number
  2. Use if...else OR switch to perform the calculation
  3. Display the result in the console
  4. Check if the result is even or odd
  5. Add a loop so the calculator repeats until the user says "no" or cancels
  6. Write all the code yourself; do not copy from AI or other sources
  
*/

//  Step 1: Create a loop to repeat your calculator
// TODO: Start your loop (while, do...while, or for loop)

// Inside your loop:
// ------------------------------
//  Step 2: Ask the user for inputs
// TODO: Get the first number
// TODO: Get the operator (+, -, *, /, %)
// TODO: Get the second number

//  Step 3: Perform calculation
// TODO: Use if...else OR switch to calculate the result
// TODO: Store the result in a variable

//  Step 4: Display the result
// TODO: Log the result in the console

//  Step 5: Check if the result is even or odd
// TODO: Use the result to determine if it is even or odd and log it

//  Step 6: Ask the user if they want to calculate again
// TODO: Use confirm() or prompt() to repeat the loop
// If user says "no" or cancels, stop the loop

//  Step 7: Optional functions for autograder
// TODO: Implement a function calculate(num1, operator, num2) that returns the result
// TODO: Implement a function isEven(num) that returns true if even, false if odd

//  Remember: Leave all TODOs for you to complete! No answers are given.

console.log("Calculator")
let number1;
let number2;
let operator;
let result;
for (let i = 0; i < 100; i++) {
  number1 = prompt("enter number one :")
  operator = prompt("Enter your operator:")
  number2 = prompt("Enter number two:")


  if (operator === "+") {
    console.log(`${number1} + ${number2}`);
    result = number1 + number2;
    if (result%2===0){
      console.log("your result is Even")

    }
    else{
      console.log("Your number is odd")
    }

    if(prompt("do you want continue or no:")==="yes"){
    continue
    } 
    else{
      break
    }

  }



  else if (operator === "-") {
    console.log(number1 - number2)
    result = number1 - number2;
      if (result%2===0){ if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }
      console.log("your result is Even")
 if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }
    }
    else{
      console.log("Your number is odd")
    }

     if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }


  }



  else if (operator === "*") {
    console.log(number1 * number2)
    result = number1 * number2;
      if (result%2===0){
      console.log("your result is Even")

    }
    else{
      console.log("Your number is odd")
    }

 if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }


  }
  else if (operator === "/") {
    console.log(number1 / number2)
    result = number1 / number2;
      if (result%2===0){
      console.log("your result is Even")

    }
    else{
      console.log("Your number is odd")
    }

     if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }
    if(prompt("do you want continue or no:")==="yes"){
    continue
    } 
    else{
      break
    }

  }

  else if (i === 4) {
    break
  }



  else {
    console.log("inviald number")

     if(prompt("do you want continue or no:")==="yes"){
    continue
    }
    else{
      break
    }
  }

  

}



