// Part 1, Task 1 (Login)
var username = "admin";
var password = "421$$";
var userInput, passInput;

function Sign_In(){
  userSignIn();
  isValid();
}

function userSignIn(){ 
  userInput = prompt("Enter your username:");
  passInput = prompt("Enter your password:");
  return userInput, passInput;
}

function isValid(){
  if(userInput === username && passInput === password){
    alert(`Welcome ${username}. Logging in Succeeded`);
  }else if(userInput != username && passInput === password){
    alert("Sorry, Invalid Username. Try again!");
  }else if(userInput === username && passInput != password){
    alert("Sorry, Invalid Password. Try again!");
  }else if(userInput != username && passInput != password){
    alert("Sorry, Invalid Username and Invalid Password. Try again!");
  }
}
/*
// var signinServer = [
//   {
//     name:"admin",
//     password:"421$$"
//   }
// ]
// const signIn = {
//   name: nameField,
//   password: passField
// };

// userSignIn();
// isValid();

// function userSignIn(){ 
//   nameField = prompt("Enter your username:");
//   passField = prompt("Enter your password:");
//   return nameField, passField;
// }

// function isValid(){
//   if(nameField == signinServer.name && passField == signinServer.password){
//     alert(`Welcome ${nameField}. Logging in Succeeded`);
//   }else if(nameField != signinServer.name && passField == signinServer.password){
//     alert("Sorry, Invalid Username. Try again!");
//   }else if(nameField == signinServer.name && passField != signinServer.password){
//     alert("Sorry, Invalid Password. Try again!");
//   }else if(nameField != signinServer.name && passField != signinServer.password){
//     alert("Sorry, Invalid Username and Invalid Password. Try again!");
//   }
// }

// function isValid(){
//   if(signinServer.includes({name: nameField, password: passField})){
//     alert(`Welcome ${signIn.name}. Logging in Succeeded`);
//   }else if(!signinServer.includes(nameField)){
//     alert("Sorry, Invalid Username. Try again!");
//   }else if(!signinServer.includes(passField)){
//     alert("Sorry, Invalid Password. Try again!");
//   }else if(!signinServer.includes({name: nameField, password: passField})){
//     alert("Sorry, Invalid Username and Invalid Password. Try again!");
//   }
// }

// function userSignIn(){
//   const signIn = {};
//   signIn.name = prompt("Enter your username:");
//   signIn.password = prompt("Enter your password:");
//   return signIn.name, signIn.password;
// }

// function isValid(){
//   if(signinServer.includes({name: singIn.name, password: signIn.password})){
//     alert(`Welcome ${signIn.name}. Logging in Succeeded`);
//   }else if(!signinServer.includes(singIn.name)){
//     alert("Sorry, Invalid Username. Try again!");
//   }else if(!signinServer.includes(signIn.password)){
//     alert("Sorry, Invalid Password. Try again!");
//   }else if(!signinServer.includes({name: singIn.name, password: signIn.password})){
//     alert("Sorry, Invalid Username and Invalid Password. Try again!");
//   }
// }

// function isValid(singIn){
//   for(var i = 0; i < signinServer.length; i++){
//     //signInArrElem = signinServer[i];
//     if(singIn.name == signinServer.name && singIn.password == signinServer.password){
//       alert(`Welcome ${signIn.name}. Logging in Succeeded`);
//     }
//   }
// }
*/

// ==================================================

// Part 1, Task 2 (calc)
var num1, num2, operator, result;

function Calc(){
  inputs();
  operations(num1, num2, operator);
  if(!result){
    return;
  }else{
    alert(`The result is: ${result}`);
  }
}

function inputs(){
  num1 = parseFloat(prompt("Enter First Number:"));
  operator = prompt("Enter an Operator:");
  num2 = parseFloat(prompt("Enter Second Number:"));
  if(num1 == Number(num1) && num2 == Number(num2)){
    return Number(num1), operator,Number(num2);
  }else{
    alert("Please, enter valid numbers.");
  }
}

function operations(n1, n2, op){
  const ops = ["+", "*", "-", "/", "%"];
  for(let i = 0; i < ops.length; i++){
    ops[i] = op;
    switch(ops[i]){
      case "+":
        result = n1 + n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "/":
        result = n1 / n2;
        break;
      case "%":
        result = n1 % n2;
        break;
      default:
        alert("Please, enter a valid operator.");
        break;
    }
  }
  return result;
}

// function operations(n1, n2, op){
//   if(op == "+" || op == "*" || op == "-" || op == "/" || op == "%" ){
//     switch(op){
//       case "+":
//         result = n1 + n2;
//         break;
//       case "*":
//         result = n1 * n2;
//         break;
//       case "-":
//         result = n1 - n2;
//         break;
//       case "/":
//         result = n1 / n2;
//         break;
//       case "%":
//         result = n1 % n2;
//         break;
//     }
//     return result;
//   }else{
//     alert("Please, enter a valid operator.");
//   }
// }

// ==================================================

// Part 1, Task 3 (calc. Bonus)
var num1, num2, operator, result;

function CalcBonus(){
  inputs();
  operations(num1, num2, operator);
  resultGive()
  calcAgain();
}

function calcAgain(){
  var recalc = "Repeat with the last result!";
  do{
    confirm(recalc);
    inputAgain();
    operations(num1, num2, operator);
    alert(`The result is: ${result}`);
  }while(confirm(recalc))
  // if(!confirm(recalc)){
  //   return;
  // }
  return;
  // var recalc = "Repeat with the last result!";
  // while(recalc){
  //   confirm(recalc);
  //   inputAgain();
  //   operations(num1, num2, operator);
  //   alert(`The result is: ${result}`);
  // }
  // if(!confirm(recalc)){
  //   return;
  // }
}

function resultGive(){
  if(!result){
    return;
  }else{
    alert(`The result is: ${result}`);
  }
}

function inputAgain(){
  num1 = result;
  operator = prompt("Enter an Operator:");
  num2 = parseFloat(prompt("Enter Second Number:"));
  if(num1 == Number(num1) && num2 == Number(num2)){
    return Number(num1), operator,Number(num2);
  }else{
    alert("Please, enter valid numbers.");
  }
}

//=======================================================
// var num1B, num2B, operatorB, resultB;

// function CalcBonus(){
//   inputs(num1B, num2B, operatorB);
//   operations(num1B, num2B, operatorB);
//   if(resultB){
//     alert(`The result is: ${resultB}`);
//   }else{
//     return;
//   }
//   calcAgain();
// }

// function calcAgain(){
//   var reCalc = confirm("Repeat with the last result!");
//   do{
//     inputAgain(num2B, operatorB);
//     operationsB(resultB, num2B, operatorB);
//     if(!resultB){
//       return;
//     }else{
//       alert(`The result is: ${resultB}`);
//     }
//   }while(!reCalc)
// }

// function inputAgain(n2B, opB){
//   opB = prompt("Enter an Operator:");
//   n2B = parseFloat(prompt("Enter Second Number:"));
//   if(n1B == Number(n1B) && n2B == Number(n2B)){
//     return Number(n1B), opB,Number(n2B);
//   }else{
//     alert("Please, enter valid numbers.");
//   }
// }

// function inputsB(n1B, n2B, opB){
//   n1B = parseFloat(prompt("Enter First Number:"));
//   opB = prompt("Enter an Operator:");
//   n2B = parseFloat(prompt("Enter Second Number:"));
//   if(n1B == Number(n1B) && n2B == Number(n2B)){
//     return Number(n1B), opB,Number(n2B);
//   }else{
//     alert("Please, enter valid numbers.");
//   }
// }

// function operationsB(n1, n2, opB){
//   const opBs = ["+", "*", "-", "/", "%"];
//   for(let i = 0; i < opBs.length; i++){
//     opBs[i] = opB;
//     switch(opBs[i]){
//       case "+":
//         resultB = n1 + n2;
//         break;
//       case "*":
//         resultB = n1 * n2;
//         break;
//       case "-":
//         resultB = n1 - n2;
//         break;
//       case "/":
//         resultB = n1 / n2;
//         break;
//       case "%":
//         resultB = n1 % n2;
//         break;
//       default:
//         alert("Please, enter a valid operator.");
//         break;
//     }
//   }
//   return resultB;
// }

// function calcAgain(){
//   var reCalc = confirm("Repeat with the last result!");
//   do{
//     inputAgain(resultB, num2B, operatorB);
//     operationsB(resultB, num2B, operatorB);
//     if(!resultB){
//       return;
//     }else{
//       alert(`The result is: ${resultB}`);
//     }
//   }while(!reCalc)
// }

// function inputAgain(n1B, n2B, opB){
//   opB = prompt("Enter an Operator:");
//   n2B = parseFloat(prompt("Enter Second Number:"));
//   if(n1B == Number(n1B) && n2B == Number(n2B)){
//     return Number(n1B), opB,Number(n2B);
//   }else{
//     alert("Please, enter valid numbers.");
//   }
// }