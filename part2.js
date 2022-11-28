// Part 1, Task 1 (SUM & AVG)
var n, num, sum, avg;
//const numArr = [];
var numArr = new Array();

function getN(){
  n = parseInt(prompt("How many numbers do you want to get their sum & average?"));
  return n;
}

function getNum(){
  num = parseInt(prompt("Put values one by one:"));
  return numArr.push(num);
}

function numSum(){
  sum = 0;
  for(let i = 0; i < numArr.length; i++){
    sum += numArr[i];
  }
  return sum;
}

function numAvg(){
  avg = sum / n;
  return avg;
}

function SumAvg(){
  getN();
  numArr = new Array();
  for(let i = 0; i < n; i++){
    getNum();
  }
  numSum();
  numAvg();
  alert(`The sum is: ${sum} \n The average is: ${avg.toFixed(2)}`);
}

// ==================================================

// Part 1, Task 2 (PHONE BOOK APP)
//var name, phoneNum;
const phoneBook = [
  {
    name: "",
    phone: null
  }
];

function addSearchContacts(){
  var stop = false;
  do{
    var addOrSearch = prompt("You've started the PHONE BOOK APP.\nChoose: add, search, or exit!");
    switch(addOrSearch){
      case "add":
        addContact();
      break;
      case "search":
        searchContact();
      break;
      case "exit":
        stop = true;
      break;
    }
  }while(!stop)
}

function addContact(){
  var newContact = {};
  newContact.name = prompt("Add Contact Name:");
  newContact.phone = prompt("Add Contact Phone Number:");
  phoneBook.push(newContact);
  //return newContact;
}

function searchContact(){
  var searchKey = prompt("Enter name or phone number:");
  for(let i = 0; i< phoneBook.length; i++){
    var currContact = phoneBook[i];
    if(searchKey == currContact.name || searchKey == currContact.phone){
      alert(`Name: ${currContact.name}\nPhone Number: ${currContact.phone}`);
      break;
    }
  }
}

// ==================================================

// Part 1, Task 3 (Area Calc. Bonus)
var shapeName, a, b, h, l, r, w;
var shapes = {
  circle: {
    name: "circle",
    dim: ["r"],
    equation: function(r){
      let area = Math.PI * Math.pow(r, 2);
      alert(`Circle area = ${area}`);
    }
  },
  triangle: {
    name: "triangle",
    dim: ["b", "h"],
    equation: function(b, h){
      let area = b * h / 2;
      alert(`triangle area: ${area}`);
    }
  },
  square: {
    name: "square",
    dim: ["a"],
    equation: function(a){
      let area = Math.pow(a, 2);
      alert(`square area: ${area}`);
    }
  },
  rectangle: {
    name: "rectangle",
    dim: ["l", "w"],
    equation: function(l, w){
      let area = l * w;
      alert(`rectangle area: ${area}`);
    }
  },
  parallelogram: {
    name: "parallelogram",
    dim: ["b", "h"],
    equation: function(b, h){
      let area = b * h;
      alert(`parallelogram area: ${area}`);
    }
  },
  trapezium: {
    name: "trapezium",
    dim: ["a", "b", "h"],
    equation: function(a, b, h){
      let area = (Number(a) + Number(b)) * h / 2;
      alert(`trapezium area: ${area}`);
    }
  },
  ellipse: {
    name: "ellipse",
    dim: ["a", "b"],
    equation: function(a, b){
      //let dims = [];
      //let area = Math.PI * Number(dims[0]) * Number(dims[1]);
      let area = Math.PI * a * b;
      alert(`ellipse area: ${area}`);
    }
  }
};
var dimValues = [];

function areaCalc(){
  shapeGet();
  dimGetAreaGive();
  //areaGive();
}

function shapeGet(){
  shapeName = prompt(`Choose a shape to calculate its area:\n\
  (${shapes.circle.name},\
  ${shapes.triangle.name},\
  ${shapes.square.name},\
  ${shapes.rectangle.name},\
  ${shapes.parallelogram.name},\
  ${shapes.trapezium.name},\
  ${shapes.ellipse.name})`);
  //(circle, triangle, square, rectangle, parallelogram, trapezium, ellipse)
  // for (const shape in shapes) {
	//   if(shapeName == shape.name){
	//     dimGet();
  //     break;
	//   }else{
  //     alert("Please, choose from the brackets!");
  //   }
  //   }
  // }
  return shapeName;
}

function dimGetAreaGive(){
  dimValues = [];
  for (var shape in shapes) {
    if (shapeName != shape.toString()) continue;
    // {
    //   alert("Please, choose from the brackets!");
    //   break;
    // }
    var shapeObj = shapes[shape];
    for(var i = 0; i < shapeObj.dim.length; i++){
      var dimEle = shapeObj.dim[i];
      dimEle = prompt(`Enter ${dimEle}:`);
      dimValues.push(dimEle);
    }
  }
  shapeObj.equation(...dimValues);
}

// function areaGive(){
//   for (var shape in shapes) {
//     if (shapeName != shape.name) continue;
//     var shapeObj = shapes[shape];
//     shapeObj.equation(...dimValues);
//   }
// }

//Object.hasOwnProperty.call(object, key)
// function dimGet(){
//   for (var shape in shapes) {
//     if (shapeName == shape.name) {
//       //const element = object[key];
//         for(let i = 0; i < shape.dim.length; i++){
//           var dimEle = shape.dim[i];
//           dimEle = prompt(`Enter ${dimEle}:`);
//           //return dimEle;
//           break;
//         }
//     // }else{
//     //   alert("Please, choose from the brackets!");
//     }
//   }
//   //shape.equation();
// }